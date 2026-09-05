export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  modality: string;
  kind: string;
  match: number;
  summary: string;
  skills?: string[];
};

const API_URL = process.env.EXPO_PUBLIC_JOBIA_API_URL?.replace(/\/$/, '') || '';

export async function getJobs(query = ''): Promise<{ jobs: Job[]; source: 'api' | 'demo' }> {
  if (!API_URL) return { jobs: [], source: 'demo' };
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);
    const response = await fetch(`${API_URL}/jobs${query ? `?q=${encodeURIComponent(query)}` : ''}`, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return { jobs: Array.isArray(data) ? data : data.jobs ?? data.data ?? data.results ?? [], source: 'api' };
  } catch {
    return { jobs: [], source: 'demo' };
  }
}

export { API_URL };
