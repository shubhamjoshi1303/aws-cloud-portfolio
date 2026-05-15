# Cloud Engineer Portfolio

## Local Environment

Create `.env.local` in the project root:

```env
VITE_RAG_API_URL=https://v7sd1lcao2.execute-api.us-east-1.amazonaws.com
```

Vite only loads environment variables when the dev server starts. After adding or changing `.env.local`, stop and restart the dev server:

```bash
npm run dev -- --host 127.0.0.1
```
