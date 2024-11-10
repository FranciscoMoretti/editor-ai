# Auto Login in Development with Supabase

Quick guide to set up automatic login for development environments.

## 1. Get Session Tokens
After logging in normally, get your session tokens:
```ts
// In browser console
const session = await window.supabase.auth.getSession()
console.log(session.data.session)
```

## 2. Set Environment Variables
Add to your `.env`:
```env
SUPABASE_ACCESS_TOKEN=eyJhbG...  # Your access_token from session
SUPABASE_REFRESH_TOKEN=8LpX...   # Your refresh_token from session
```

## 3. Update Middleware
The middleware will automatically log you in during development if:
- `NODE_ENV` is "development"
- Both tokens are present in env vars
- No user is currently logged in

```ts
// packages/supabase/src/clients/middleware.ts
if (
  process.env.NODE_ENV === "development" &&
  process.env.SUPABASE_ACCESS_TOKEN &&
  process.env.SUPABASE_REFRESH_TOKEN &&
  !user
) {
  await supabase.auth.setSession({
    access_token: process.env.SUPABASE_ACCESS_TOKEN!,
    refresh_token: process.env.SUPABASE_REFRESH_TOKEN!,
  });
}
```

## Notes
- Tokens expire - you'll need to update them periodically
- Never commit your tokens
- This only works in development mode
- To get new tokens, uncomment the session logging code in middleware