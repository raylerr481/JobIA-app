# JobIA App

**Official Android channel of JobIA.**

JobIA is the specialized employment and work module of **Bitey IA**. This application is only its installable Android channel. It does not contain the backend or an independent AI system.

## Language and naming standard

All repository documentation, API contracts, frontend/backend references, variable names, TypeScript types, JSON keys, query parameters, configuration keys, and internal technical identifiers must use **English**.

The user interface may be localized independently, but technical identifiers must remain English and consistent with JobIA-Web and the JobIA backend.

Examples: `job_id`, `company`, `location`, `modality`, `kind`, `skills`, `match`, `application`, `EXPO_PUBLIC_JOBIA_API_URL`.

Do not introduce Spanish variable names, JSON keys, API parameters, or internal identifiers in new code.

## Architecture

```text
                         BITEY IA
                    general intelligence
                           │
                         JobIA
                  employment/work module
                           │
                    contract jobia-v1
                       ┌───┴───┐
                       │       │
                  JobIA-Web  JobIA-app
                     Web      Android
                    channel    channel

Bitey IA Web = web channel of Bitey IA
```

The same JobIA backend serves `JobIA-Web` and `JobIA-app`.

## Related repositories

- `bitey-web` → web channel of Bitey IA.
- `JobIA` → specialized employment/work module and API `jobia-v1`.
- `JobIA-Web` → web channel of JobIA.
- `JobIA-app` → this Android channel.
- `bitey-trainer` → internal Bitey IA capability for training, evaluation, and validation.

## Backend connection

Configure the API URL through an Expo environment variable:

```bash
EXPO_PUBLIC_JOBIA_API_URL=https://your-jobia-backend.example
```

The application must not contain private keys, provider credentials, database credentials, or Supabase `service_role` keys.

## Development

```bash
npm install
npm start
npm run android
```

To generate an APK with EAS:

```bash
eas build --platform android --profile preview
```

## Principle

> **Bitey IA is the general system; JobIA is its specialized employment/work module; JobIA-app is the Android channel of JobIA; JobIA-Web is its web channel; Bitey IA Web is the web channel of Bitey IA.**
