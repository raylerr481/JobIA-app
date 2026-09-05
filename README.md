# JobIA App

**Canal Android oficial de JobIA.**

JobIA es el módulo especializado de empleo y trabajo de **Bitey IA**. Esta aplicación es únicamente su canal Android instalable: no contiene el backend ni una IA independiente.

## Arquitectura

```text
                         BITEY IA
                    inteligencia general
                           │
                        JobIA
                  módulo de empleo
                           │
                    contrato jobia-v1
                       ┌───┴───┐
                       │       │
                  JobIA-Web  JobIA-app
                     Web      Android
                    canal       canal

Bitey IA Web = canal web de Bitey IA
```

El mismo backend de JobIA sirve a `JobIA-Web` y `JobIA-app`.

## Repositorios relacionados

- `bitey-web` → canal web de Bitey IA.
- `JobIA` → módulo/backend especializado de empleo y API `jobia-v1`.
- `JobIA-Web` → canal web de JobIA.
- `JobIA-app` → este canal Android.
- `bitey-trainer` → capacidad interna de Bitey IA para entrenamiento, evaluación y validación.

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

> **Bitey IA es el sistema general; JobIA es su módulo especializado de empleo; JobIA-app es el canal Android de JobIA; JobIA-Web es su canal web; Bitey IA Web es el canal web de Bitey IA.**
