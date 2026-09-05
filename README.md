# JobIA App

**Aplicación Android oficial de JobIA.**

JobIA App es el cliente móvil instalable del módulo de empleo de **Bitey IA Web**. No contiene el backend ni un motor de IA independiente.

## Arquitectura

```text
Bitey IA Web
  └── JobIA (backend / módulo de empleo)
          │
       HTTPS/JSON
          │
       JobIA App
         Android
```

El mismo backend también es consumido por `JobIA-Web`.

## Repositorios relacionados

- `bitey-web` → inteligencia general, memoria, herramientas, políticas y orquestación.
- `JobIA` → backend especializado de empleo y API `jobia-v1`.
- `JobIA-Web` → frontend web de JobIA.
- `JobIA-app` → esta aplicación Android.
- `bitey-trainer` → entrenamiento y validación interna de las capacidades de JobIA.

## Conexión con backend

Configura la URL de la API con una variable de entorno de Expo:

```bash
EXPO_PUBLIC_JOBIA_API_URL=https://tu-backend-jobia.example
```

La aplicación no debe contener claves privadas, credenciales de proveedores ni claves `service_role` de Supabase.

## Desarrollo

```bash
npm install
npm start
npm run android
```

Para generar un APK mediante EAS:

```bash
eas build --platform android --profile preview
```

## Principio

> **Bitey IA Web piensa y coordina; JobIA proporciona la capacidad especializada de empleo; JobIA App presenta esa capacidad en Android.**
