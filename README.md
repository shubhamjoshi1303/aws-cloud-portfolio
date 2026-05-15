# Cloud Engineer Portfolio

## Local Environment

Create `.env.local` in the project root:

```env
VITE_RAG_API_URL=https://qj6bc35xk3.execute-api.us-east-1.amazonaws.com
```

Vite only loads environment variables when the dev server starts. After adding or changing `.env.local`, stop and restart the dev server:

```bash
npm run dev -- --host 127.0.0.1
```

## Production API Debugging

Vite environment variables are baked into the JavaScript bundle at build time. The deploy workflow must provide `VITE_RAG_API_URL` during `npm run build`, then CloudFront may need an invalidation before the browser receives the rebuilt bundle.

The RAG API Gateway HTTP API CORS config should allow these exact origins:

```hcl
allow_origins = [
  "http://localhost:5173",
  "https://shubhamjoshi.xyz",
  "https://www.shubhamjoshi.xyz",
  "https://portfolio.shubhamjoshi.xyz",
]

allow_methods = ["POST", "OPTIONS"]
allow_headers = ["content-type", "authorization"]
```

The Lambda response should include:

```http
Content-Type: application/json
```

The API endpoint expected by this portfolio build is:

```env
VITE_RAG_API_URL=https://qj6bc35xk3.execute-api.us-east-1.amazonaws.com
```
