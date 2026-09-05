import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { API_URL, getJobs, type Job } from '../src/api';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [status, setStatus] = useState('Conectando con JobIA…');

  useEffect(() => {
    getJobs().then(({ jobs: data, source }) => {
      setJobs(data);
      setStatus(source === 'api' ? 'Conectado al backend JobIA' : API_URL ? 'Backend no disponible' : 'API JobIA no configurada');
    });
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>JobIA</Text>
        <Text style={styles.title}>Tu asistente inteligente de empleo</Text>
        <Text style={styles.subtitle}>Aplicación Android conectada al mismo backend que JobIA-Web.</Text>
        <View style={styles.status}><Text style={styles.statusText}>{status}</Text></View>
        <Text style={styles.section}>Oportunidades</Text>
        {jobs.length === 0 ? <Text style={styles.muted}>No hay oportunidades disponibles todavía.</Text> : jobs.map(job => (
          <TouchableOpacity key={job.id} style={styles.card}>
            <Text style={styles.score}>{job.match}% Match</Text>
            <Text style={styles.cardTitle}>{job.title}</Text>
            <Text style={styles.muted}>{job.company} · {job.location} · {job.modality}</Text>
            <Text style={styles.cardText}>{job.summary}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f7f9fc' },
  container: { padding: 22, gap: 14 },
  logo: { fontSize: 40, fontWeight: '800', color: '#208AEF' },
  title: { fontSize: 27, fontWeight: '800', color: '#172033' },
  subtitle: { fontSize: 16, lineHeight: 24, color: '#5c667a' },
  status: { padding: 12, borderRadius: 12, backgroundColor: '#eef7ff' },
  statusText: { color: '#1769aa', fontWeight: '700' },
  section: { fontSize: 21, fontWeight: '800', color: '#172033', marginTop: 8 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 18, borderWidth: 1, borderColor: '#e4e8ef', gap: 5 },
  score: { color: '#208AEF', fontWeight: '800' },
  cardTitle: { fontSize: 19, fontWeight: '800', color: '#172033' },
  cardText: { color: '#4b5565', lineHeight: 21 },
  muted: { color: '#667085', lineHeight: 21 },
});
