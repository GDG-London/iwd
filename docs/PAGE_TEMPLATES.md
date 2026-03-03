# Page Templates Guide

## Overview

This guide explains the page structure and how to create or modify pages in the IWD website template.

---

## Available Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/pages/home.js` | Landing page |
| `/speakers` | `src/pages/speakers.js` | All speakers |
| `/sessions` | `src/pages/sessions.js` | Session list |
| `/schedule` | `src/pages/schedule.js` | Event schedule |
| `/location` | `src/pages/location.js` | Venue details |
| `/sponsors` | `src/pages/sponsors.js` | Sponsor logos |
| `/code-of-conduct` | `src/pages/code-conduct-policy.js` | Event policies |
| `/volunteer` | `src/pages/volunteer.js` | Volunteer info |
| `/faq` | `src/pages/faq.js` | FAQ section |

---

## Page Structure

### Typical Page Layout

```
┌─────────────────────────────┐
│         Header              │  ← Sticky navigation
├─────────────────────────────┤
│                             │
│         Banner              │  ← Event info banner
│                             │
├─────────────────────────────┤
│                             │
│         Main Content        │  ← Page-specific content
│                             │
├─────────────────────────────┤
│         Footer              │  ← Links and info
└─────────────────────────────┘
```

### App.js Routing

Routes are defined in `src/App.js`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/speakers" element={<Speakers />} />
  <Route path="/sessions" element={<Sessions />} />
  <Route path="/schedule" element={<Schedule />} />
  <Route path="/location" element={<Location />} />
  <Route path="/sponsors" element={<Sponsors />} />
  <Route path="/code-of-conduct" element={<CodeOfConduct />} />
</Routes>
```

---

## Home Page

**File**: `src/pages/home.js`

### Components Used

```jsx
<Home>
  <Hero />            {/* Main banner + event info */}
  <SpeakerProfiles /> {/* Featured speakers */}
  <LocationSection /> {/* Venue preview */}
</Home>
```

### Customization

1. **Change order**: Reorder components in home.js
2. **Add sections**: Import and add new components
3. **Remove sections**: Comment out or delete components

```jsx
// Example: Add About section
import About from '../components/about';

const Home = () => (
  <div>
    <Hero />
    <About />           {/* Add new section */}
    <SpeakerProfiles />
    <LocationSection />
  </div>
);
```

---

## Speakers Page

**File**: `src/pages/speakers.js`

### Data Source

Fetches from Sessionize API:
```env
REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_ID/view/Speakers
```

### Features

- Grid layout (responsive 1-4 columns)
- Speaker photos
- Click for bio modal
- Social media links

---

## Sessions Page

**File**: `src/pages/sessions.js` / `src/components/sessions.js`

### Data Source

```env
REACT_APP_SESSIONIZE_SESSIONS_API=https://sessionize.com/api/v2/YOUR_ID/view/Sessions
```

### Features

- Session cards with details
- Category pills (Talk/Workshop)
- Speaker names
- Session descriptions

---

## Schedule Page

**File**: `src/pages/schedule.js`

### Implementation

Uses Sessionize embedded schedule:

```jsx
<iframe 
  src={process.env.REACT_APP_SESSIONIZE_SCHEDULE_API}
  width="100%"
  height="800px"
/>
```

### Configuration

```env
REACT_APP_SESSIONIZE_SCHEDULE_API=https://sessionize.com/api/v2/YOUR_ID/view/GridSmart
```

---

## Location Page

**File**: `src/pages/location.js`

### Configuration

```env
REACT_APP_VENUE_NAME=Blackett Laboratory, Imperial College London
REACT_APP_VENUE_ADDRESS=Imperial College London,South Kensington Campus,London,SW7 2AZ
REACT_APP_VENUE_TRANSPORT=Nearest tube: South Kensington
REACT_APP_VENUE_MAP_URL=https://maps.google.com/maps?q=...&output=embed
```

### Features

- Venue name and address
- GPS coordinates
- What3Words link
- Transportation info
- Venue image
- Google Maps embed

---

## Creating a New Page

### Step 1: Create the Page Component

```jsx
// src/pages/my-new-page.js
import React from 'react';

const MyNewPage = () => {
  return (
    <section className="w-11/12 mx-auto py-20">
      <h1 className="text-4xl font-bold text-white mb-8">
        Page Title
      </h1>
      <div className="text-IWDText">
        <p>Your content here...</p>
      </div>
    </section>
  );
};

export default MyNewPage;
```

### Step 2: Add Route in App.js

```jsx
// src/App.js
import MyNewPage from './pages/my-new-page';

// In Routes:
<Route path="/my-new-page" element={<MyNewPage />} />
```

### Step 3: Add Navigation Link (Optional)

```jsx
// src/components/navbar.js
<li>
  <Link 
    to='/my-new-page' 
    className='text-black hover:text-IWDPurple font-semibold transition-colors'
  >
    My New Page
  </Link>
</li>
```

### Step 4: Add to Mobile Menu (Optional)

```jsx
// src/components/sidebar.js
<li className='my-5'>
  <NavLink 
    onClick={() => handleCloseMenu()} 
    to="/my-new-page" 
    className='text-white'
  >
    My New Page
  </NavLink>
</li>
```

---

## Page Templates

### Simple Content Page

```jsx
import React from 'react';

const SimplePage = () => (
  <section className="w-11/12 mx-auto py-20">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">
        Page Title
      </h1>
      <div className="prose prose-invert text-IWDText">
        <p>Content paragraph...</p>
        <h2>Subheading</h2>
        <p>More content...</p>
      </div>
    </div>
  </section>
);

export default SimplePage;
```

### Grid Page (e.g., Sponsors)

```jsx
import React from 'react';

const GridPage = ({ items }) => (
  <section className="w-11/12 mx-auto py-20">
    <h1 className="text-4xl font-bold text-white text-center mb-12">
      Our Sponsors
    </h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-xl p-6 flex items-center justify-center">
          <img src={item.logo} alt={item.name} className="max-h-20" />
        </div>
      ))}
    </div>
  </section>
);

export default GridPage;
```

### Feature Section Page

```jsx
import React from 'react';

const FeaturePage = () => (
  <section className="bg-gradient-to-br from-IWDDeepPurple via-IWDPurple to-IWDViolet text-white py-20 my-10 rounded-2xl">
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Section Title
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="text-5xl mb-4">🎤</div>
          <h3 className="text-xl font-bold mb-2">Feature 1</h3>
          <p className="opacity-90">Description text...</p>
        </div>
        {/* More features... */}
      </div>
    </div>
  </section>
);

export default FeaturePage;
```

---

## Styling Pages

### Use IWD Theme Colors

```jsx
// Purple gradient background
<section className="bg-gradient-to-br from-IWDDeepPurple via-IWDPurple to-IWDViolet">

// Dark card background
<div className="bg-IWDCard border border-IWDPurple/30">

// Text colors
<h1 className="text-white">White heading</h1>
<p className="text-IWDText">Light purple text</p>
<a className="text-IWDLightPurple hover:text-white">Link</a>
```

### Responsive Design

```jsx
// Mobile first, add breakpoints for larger screens
<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive heading
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  Responsive grid
</div>
```

---

## Best Practices

### ✅ Do

1. **Use environment variables** for configurable content
2. **Provide fallback values** for missing env vars
3. **Use semantic HTML** (`<section>`, `<article>`, `<main>`)
4. **Add alt text** to all images
5. **Test on mobile** - design mobile-first
6. **Keep components small** - extract reusable pieces

### ❌ Don't

1. Don't hardcode text that should be configurable
2. Don't forget mobile navigation when adding pages
3. Don't use inline styles when Tailwind classes exist
4. Don't skip accessibility considerations

---

## SEO Considerations

### Update Meta Tags

For important pages, update `public/index.html`:

```html
<title>Your Page Title | IWD London 2026</title>
<meta name="description" content="Page description..." />
```

### Structured Data

Update Event schema in `public/index.html` for search engines:

```html
<script type="application/ld+json">
{
  "@type": "Event",
  "name": "Build with AI - International Women's Day 2026",
  ...
}
</script>
```

---

## Next Steps

- [Components Documentation](./COMPONENTS.md) - Component details
- [Styling Guide](./STYLING.md) - Colors and CSS
- [Environment Variables](./ENVIRONMENT_VARIABLES.md) - Configuration
