# Environment Variables Guide

## Overview

Environment variables let you configure the website without changing code. All settings go in a `.env` file in the root directory.

## Quick Setup

```bash
# 1. Copy example file
cp .env.example .env

# 2. Edit with your values
# 3. Restart dev server (important!)
npm start
```

---

## All Variables

### 📅 Event Information

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_EVENT_NAME` | Full event name | `International Women's Day London 2026` |
| `REACT_APP_EVENT_DATE` | Display date | `14th March 2026` |
| `REACT_APP_EVENT_YEAR` | Year only | `2026` |
| `REACT_APP_EVENT_CITY` | City name | `London` |
| `REACT_APP_EVENT_TAGLINE` | Short tagline | `Celebrating women in technology` |
| `REACT_APP_EVENT_DESCRIPTION` | Full description | `Join us for a community-run conference...` |

**Example:**
```env
REACT_APP_EVENT_NAME=International Women's Day London 2026
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_YEAR=2026
REACT_APP_EVENT_CITY=London
REACT_APP_EVENT_TAGLINE=Celebrating women in technology
REACT_APP_EVENT_DESCRIPTION=We're excited to announce that International Women's Day London will take place at Imperial College. Join us for a community-run one-day conference celebrating women in technology.
```

---

### 🏢 Chapter Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_CHAPTER_NAME` | GDG chapter name | `London` |
| `REACT_APP_EVENT_EMAIL` | Contact email | `iwd@gdglondon.com` |

**Example:**
```env
REACT_APP_CHAPTER_NAME=London
REACT_APP_EVENT_EMAIL=iwd@gdglondon.com
```

---

### 🎟️ Registration

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_REGISTRATION_URL` | Eventbrite URL | `https://www.eventbrite.com/e/...` |
| `REACT_APP_ATTENDEE_COUNT` | Expected attendees | `300+` |

**Example:**
```env
REACT_APP_REGISTRATION_URL=https://www.eventbrite.com/e/iwd-london-2026-tickets
REACT_APP_ATTENDEE_COUNT=300+
```

**Tip**: Add `?aff=oddtdtcreator` to Eventbrite URL for tracking!

---

### 📍 Venue Configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_VENUE_NAME` | Venue name | `Blackett Laboratory, Imperial College` |
| `REACT_APP_VENUE_ADDRESS` | Address (comma-separated) | `Imperial College,South Kensington,London,SW7 2AZ` |
| `REACT_APP_VENUE_LEVEL` | Floor/level | `Ground Floor` |
| `REACT_APP_VENUE_TRANSPORT` | Transport info | `Nearest tube: South Kensington` |
| `REACT_APP_VENUE_COORDINATES` | GPS coordinates | `51.499699, -0.179409` |
| `REACT_APP_VENUE_MAP_URL` | Google Maps embed | See below |

**Example:**
```env
REACT_APP_VENUE_NAME=Blackett Laboratory, Imperial College London
REACT_APP_VENUE_ADDRESS=Imperial College London,South Kensington Campus,London,SW7 2AZ
REACT_APP_VENUE_LEVEL=Ground Floor
REACT_APP_VENUE_TRANSPORT=The nearest underground station is South Kensington on the District, Circle, and Piccadilly lines.
REACT_APP_VENUE_COORDINATES=51.499699, -0.179409
REACT_APP_VENUE_MAP_URL=https://maps.google.com/maps?q=Blackett+Laboratory,+Imperial+College+London&output=embed
```

**How to get Google Maps URL:**
1. Go to Google Maps
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the `src` URL from the iframe code

---

### 🌐 Social Media Links

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_SOCIAL_WEBSITE` | Chapter website | `https://gdg.community.dev/gdg-london/` |
| `REACT_APP_SOCIAL_TWITTER` | Twitter handle (no @) | `GDGLondon` |
| `REACT_APP_SOCIAL_LINKEDIN` | LinkedIn URL | `https://linkedin.com/company/gdg-london` |
| `REACT_APP_SOCIAL_MEETUP` | Meetup URL | `https://meetup.com/gdg-london` |
| `REACT_APP_SOCIAL_INSTAGRAM` | Instagram handle | `gdglondon` |
| `REACT_APP_SOCIAL_YOUTUBE` | YouTube channel | `https://youtube.com/@gdglondon` |

**Example:**
```env
REACT_APP_SOCIAL_WEBSITE=https://gdg.community.dev/gdg-london/
REACT_APP_SOCIAL_TWITTER=GDGLondon
REACT_APP_SOCIAL_LINKEDIN=https://linkedin.com/company/gdg-london
REACT_APP_SOCIAL_MEETUP=https://meetup.com/gdg-london
```

---

### 🎤 Sessionize API

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_SESSIONIZE_SPEAKERS_API` | Speakers endpoint | See below |
| `REACT_APP_SESSIONIZE_SESSIONS_API` | Sessions endpoint | See below |
| `REACT_APP_SESSIONIZE_SCHEDULE_API` | Schedule grid | See below |

**Example:**
```env
REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_EVENT_ID/view/Speakers
REACT_APP_SESSIONIZE_SESSIONS_API=https://sessionize.com/api/v2/YOUR_EVENT_ID/view/Sessions
REACT_APP_SESSIONIZE_SCHEDULE_API=https://sessionize.com/api/v2/YOUR_EVENT_ID/view/GridSmart
```

**How to get Sessionize URLs:**
1. Log into [Sessionize](https://sessionize.com)
2. Go to your event dashboard
3. Click "API/Embed" in the menu
4. Copy the endpoint URLs

---

## Using Variables in Code

### Basic Usage

```javascript
// Access a variable
const eventName = process.env.REACT_APP_EVENT_NAME;

// In JSX
<h1>{process.env.REACT_APP_EVENT_NAME}</h1>
```

### With Fallback Values

Always provide fallbacks for missing variables:

```javascript
// Good - has fallback
const city = process.env.REACT_APP_EVENT_CITY || 'London';

// In JSX
<p>{process.env.REACT_APP_EVENT_DATE || '14th March 2026'}</p>
```

### Example Component

```javascript
const EventBanner = () => (
  <section>
    <h1>{process.env.REACT_APP_EVENT_NAME || 'IWD London 2026'}</h1>
    <p>{process.env.REACT_APP_EVENT_TAGLINE || 'Celebrating women in tech'}</p>
    <span>📍 {process.env.REACT_APP_EVENT_CITY || 'London'}</span>
    <span>📅 {process.env.REACT_APP_EVENT_DATE || '14th March 2026'}</span>
  </section>
);
```

---

## Complete Example `.env` File

```env
# ===================
# EVENT INFORMATION
# ===================
REACT_APP_EVENT_NAME=International Women's Day London 2026
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_YEAR=2026
REACT_APP_EVENT_CITY=London
REACT_APP_EVENT_TAGLINE=Celebrating women in technology
REACT_APP_EVENT_DESCRIPTION=International Women's Day (IWD) 2026 London by GDG London will take place at Blackett Laboratory, Imperial College London. Join us for a community-run one-day conference celebrating women in technology.

# ===================
# CHAPTER INFO
# ===================
REACT_APP_CHAPTER_NAME=London
REACT_APP_EVENT_EMAIL=iwd@gdglondon.com

# ===================
# REGISTRATION
# ===================
REACT_APP_REGISTRATION_URL=https://www.eventbrite.com/e/iwd-london-2026-tickets
REACT_APP_ATTENDEE_COUNT=300+

# ===================
# VENUE
# ===================
REACT_APP_VENUE_NAME=Blackett Laboratory, Imperial College London
REACT_APP_VENUE_ADDRESS=Imperial College London,South Kensington Campus,London,SW7 2AZ
REACT_APP_VENUE_TRANSPORT=The nearest underground station is South Kensington on the District, Circle, and Piccadilly lines.
REACT_APP_VENUE_COORDINATES=51.499699, -0.179409
REACT_APP_VENUE_MAP_URL=https://maps.google.com/maps?q=Blackett+Laboratory,+Imperial+College+London,+South+Kensington,+London,+SW7+2AZ&output=embed

# ===================
# SOCIAL MEDIA
# ===================
REACT_APP_SOCIAL_WEBSITE=https://gdg.community.dev/gdg-london/
REACT_APP_SOCIAL_TWITTER=GDGLondon
REACT_APP_SOCIAL_LINKEDIN=https://linkedin.com/company/gdg-london
REACT_APP_SOCIAL_MEETUP=https://meetup.com/gdg-london

# ===================
# SESSIONIZE
# ===================
REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_ID/view/Speakers
REACT_APP_SESSIONIZE_SESSIONS_API=https://sessionize.com/api/v2/YOUR_ID/view/Sessions
REACT_APP_SESSIONIZE_SCHEDULE_API=https://sessionize.com/api/v2/YOUR_ID/view/GridSmart
```

---

## Important Rules

### ⚠️ Variables MUST start with `REACT_APP_`

```env
# ❌ Won't work
EVENT_NAME=My Event

# ✅ Will work
REACT_APP_EVENT_NAME=My Event
```

### ⚠️ Restart server after changes

```bash
# Stop server (Ctrl+C)
# Start again
npm start
```

### ⚠️ Never commit `.env` to Git

Add to `.gitignore`:
```
.env
.env.local
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Variable is `undefined` | Check spelling, must start with `REACT_APP_` |
| Changes not showing | Restart development server |
| File not found | Check file is named `.env` (not `.env.txt`) |
| Works locally, not in production | Add variables to hosting platform |

---

## Next Steps

- [Components Documentation](./COMPONENTS.md) - See how variables are used
- [Styling Guide](./STYLING.md) - Customize the look
- [Getting Started](./GETTING_STARTED.md) - Setup instructions
