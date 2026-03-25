# DNS Setup for tylerdotai.com

## Vercel Deployment
- **Production URL:** https://tylerdotai-3hl1nq1dc-tylerdotais-projects.vercel.app
- **Alias:** https://tylerdotai.vercel.app

## DNS Records to Add at Namecheap

Log into your Namecheap account → Domain Management → Advanced DNS for `tylerdotai.com`

### Option A: A Record (Recommended by Vercel)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | Automatic |

### Option B: CNAME + A Record (if you want www too)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | Automatic |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic |

## Steps

1. Log into Namecheap
2. Go to **Dashboard** → **Domain Management** → **Advanced DNS**
3. Delete any existing A records for `@` (unless you need them for other services)
4. Add the A record above
5. (Optional) Add the CNAME for `www`
6. Wait 5-10 minutes for propagation

## Verify

Once DNS propagates, visit https://tylerdotai.com — it should load your site!

## Notes

- Vercel handles SSL automatically (free)
- You do NOT need to change nameservers
- If you have email records (@, MX) at Namecheap, keep them — these DNS changes won't affect email
