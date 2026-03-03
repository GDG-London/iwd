# Vercel Deployment Guide

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already)
npm i -g vercel

# Deploy (first time will prompt to link project)
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Git (recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project** → Import your repository
4. Vercel auto-detects Create React App
5. Add environment variables (see below)
6. Click **Deploy**

---

## Environment Variables for Vercel

Add variables in **Vercel Dashboard → Project → Settings → Environment Variables**.

Copy the variable names from `.env.example` and set values in the Vercel dashboard. **Do not commit secrets or production values to the repo.**

| Variable | Description |
|----------|-------------|
| `REACT_APP_EVENT_NAME` | Event display name |
| `REACT_APP_EVENT_DATE` | Event date |
| `REACT_APP_EVENT_YEAR` | Event year |
| `REACT_APP_EVENT_CITY` | City name |
| `REACT_APP_EVENT_TAGLINE` | Short tagline |
| `REACT_APP_EVENT_DESCRIPTION` | Full event description |
| `REACT_APP_CHAPTER_NAME` | GDG chapter name |
| `REACT_APP_EVENT_EMAIL` | Contact email |
| `REACT_APP_REGISTRATION_URL` | Eventbrite/ticket URL |
| `REACT_APP_ATTENDEE_COUNT` | Expected attendees |
| `REACT_APP_VENUE_*` | Venue details (name, address, map URL, etc.) |
| `REACT_APP_SOCIAL_*` | Social media links |
| `REACT_APP_SESSIONIZE_*` | Sessionize API URLs (Speakers, Sessions, Schedule) |
| `REACT_APP_CFP_*` | Call for speakers (optional) |

See [ENVIRONMENT_VARIABLES.md](./ENVIRONMENT_VARIABLES.md) for full documentation.

---

## After Deployment

- **Redeploy** after changing env vars: Vercel Dashboard → Deployments → ⋮ → Redeploy
- **Custom domain**: Settings → Domains
- **Preview deployments**: Each PR gets a unique URL
