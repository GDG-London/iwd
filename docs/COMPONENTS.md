# Component Documentation

## Overview

This document describes all components in the IWD template and how to customize them.

---

## Component Map

```
src/components/
├── banner.js        # Top event banner
├── hero.js          # Main landing section
├── header.js        # Navigation header
├── navbar.js        # Desktop navigation
├── sidebar.js       # Mobile navigation
├── hamburger.js     # Mobile menu button
├── speakers.js      # Speaker grid
├── location.js      # Venue information
├── footer.js        # Site footer
├── ticket-button.js # Registration button
├── bio.js           # Speaker bio card
├── modal.js         # Popup modal
└── sessions.js      # Sessions list
```

---

## Core Components

### Banner Component

**File**: `src/components/banner.js`

**Purpose**: Colorful top banner with event highlights

**Features**:
- Purple gradient background
- Event name and tagline
- Location, date, and attendee count
- Decorative background effects

**Customization**:
```env
REACT_APP_EVENT_NAME=Your Event Name
REACT_APP_EVENT_TAGLINE=Your tagline here
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_CITY=London
REACT_APP_ATTENDEE_COUNT=300+
```

**Code Structure**:
```jsx
<section className="bg-gradient-to-r from-IWDDeepPurple via-IWDPurple to-IWDViolet">
  <h1>{process.env.REACT_APP_EVENT_NAME}</h1>
  <p>{process.env.REACT_APP_EVENT_TAGLINE}</p>
  <!-- Location, date, attendees -->
</section>
```

---

### Hero Component

**File**: `src/components/hero.js`

**Purpose**: Main landing section with event details and registration

**Features**:
- Large "International Women's Day" title
- City and year badges
- Event description
- Registration button
- Banner image

**Customization**:
```env
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_CITY=London
REACT_APP_EVENT_DESCRIPTION=Your event description...
REACT_APP_REGISTRATION_URL=https://eventbrite.com/...
```

**Changing the banner image**:
1. Add image to `src/assets/`
2. Update import in `hero.js`:
```javascript
import bannerImage from '../assets/your-banner.png';
```

---

### Header Component

**File**: `src/components/header.js`

**Purpose**: Sticky navigation bar at top of page

**Includes**:
- Logo (links to home)
- Desktop navigation (Navbar)
- Registration button
- Mobile hamburger menu

**Customization**:

*Change logo:*
```javascript
import logo from '../assets/your-logo.png';
```

*Change registration URL:*
```env
REACT_APP_REGISTRATION_URL=https://your-registration-link
```

---

### Navbar Component

**File**: `src/components/navbar.js`

**Purpose**: Desktop navigation links

**Links included**:
- Schedule
- Speakers
- Sessions
- Location
- Code of Conduct

**Adding a new link**:
```jsx
<li>
  <Link 
    to='/new-page' 
    className='text-black hover:text-IWDPurple font-semibold transition-colors'
  >
    New Page
  </Link>
</li>
```

---

### Sidebar Component

**File**: `src/components/sidebar.js`

**Purpose**: Mobile slide-out navigation menu

**Features**:
- Purple gradient background
- Same links as Navbar
- Register button
- Slide animation

**Customization**: Edit the `styles` object to change colors:
```javascript
var styles = {
  bmMenu: {
    background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #8B5CF6 100%)',
    // ...
  }
}
```

---

### Ticket Button Component

**File**: `src/components/ticket-button.js`

**Purpose**: Registration/ticket button

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | string | - | Registration URL |
| `text` | string | "Register" | Button text |
| `compact` | boolean | false | Smaller size for header |
| `className` | string | "" | Additional CSS classes |

**Usage**:
```jsx
// Full size (hero section)
<TicketButton 
  href={process.env.REACT_APP_REGISTRATION_URL}
  text="Register Now"
/>

// Compact (header)
<TicketButton 
  href={process.env.REACT_APP_REGISTRATION_URL}
  compact={true}
/>
```

**Styling**: Uses purple gradient (`from-IWDPurple via-IWDViolet to-IWDMagenta`)

---

### Speakers Component

**File**: `src/components/speakers.js`

**Purpose**: Display speaker grid from Sessionize

**Data Source**: Fetches from Sessionize API

**Configuration**:
```env
REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_ID/view/Speakers
```

**Features**:
- Automatic data fetching
- Responsive grid (1-4 columns)
- Click to view full bio
- Social media links

---

### Location Component

**File**: `src/components/location.js`

**Purpose**: Venue information with map

**Features**:
- Venue name and address
- GPS coordinates
- What3Words link
- Transportation info
- Venue image
- Google Maps embed

**Configuration**:
```env
REACT_APP_VENUE_NAME=Blackett Laboratory, Imperial College London
REACT_APP_VENUE_ADDRESS=Imperial College London,South Kensington Campus,London,SW7 2AZ
REACT_APP_VENUE_TRANSPORT=Nearest tube: South Kensington
REACT_APP_VENUE_MAP_URL=https://maps.google.com/maps?q=...&output=embed
```

---

### Footer Component

**File**: `src/components/footer.js`

**Purpose**: Site footer with links and info

**Sections**:
1. **About** - GDG chapter description
2. **Resources** - GDG, WTM, GDSC links
3. **Contact** - Email and social icons
4. **IWD Links** - Code of Conduct, Volunteer

**Configuration**:
```env
REACT_APP_CHAPTER_NAME=London
REACT_APP_EVENT_EMAIL=iwd@gdglondon.com
REACT_APP_SOCIAL_WEBSITE=...
REACT_APP_SOCIAL_TWITTER=...
REACT_APP_SOCIAL_LINKEDIN=...
REACT_APP_SOCIAL_MEETUP=...
```

---

## Page Components

### Home Page (`src/pages/home.js`)

```jsx
<Home>
  <Hero />         {/* Banner + main content */}
  <Speakers />     {/* Speaker grid */}
  <Location />     {/* Venue section */}
</Home>
```

### Speakers Page (`src/pages/speakers.js`)

Full page with all speakers and bio modals.

### Schedule Page (`src/pages/schedule.js`)

Embeds Sessionize schedule grid via iframe.

### Location Page (`src/pages/location.js`)

Standalone venue page with Location component.

---

## Best Practices

### ✅ Use Environment Variables

```jsx
// ❌ Don't hardcode
<h1>International Women's Day London</h1>

// ✅ Use environment variables with fallback
<h1>{process.env.REACT_APP_EVENT_NAME || 'IWD London 2026'}</h1>
```

### ✅ Add Fallback Values

```jsx
const city = process.env.REACT_APP_EVENT_CITY || 'London';
const date = process.env.REACT_APP_EVENT_DATE || '14th March 2026';
```

### ✅ Use Semantic HTML

```jsx
<header>...</header>
<main>...</main>
<section>...</section>
<footer>...</footer>
```

### ✅ Add Alt Text to Images

```jsx
<img src={logo} alt="IWD London 2026 Logo" />
<img src={venue} alt="Blackett Laboratory entrance" />
```

### ✅ Use Tailwind Responsive Classes

```jsx
// Mobile first, then larger screens
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

---

## Creating New Components

### Basic Template

```jsx
import React from 'react';

const MyComponent = ({ title, children }) => {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-IWDPurple mb-6">
        {title}
      </h2>
      <div className="text-IWDText">
        {children}
      </div>
    </section>
  );
};

export default MyComponent;
```

### Using the Component

```jsx
import MyComponent from '../components/my-component';

<MyComponent title="About Us">
  <p>Content goes here...</p>
</MyComponent>
```

---

## Common Patterns

### Purple Gradient Background

```jsx
<div className="bg-gradient-to-r from-IWDDeepPurple via-IWDPurple to-IWDViolet">
  {/* Content */}
</div>
```

### Card with Shadow

```jsx
<div className="bg-IWDCard border border-IWDPurple/30 rounded-xl p-6 shadow-lg">
  {/* Card content */}
</div>
```

### Responsive Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Hover Effect

```jsx
<div className="hover:scale-105 transition-transform cursor-pointer">
  {/* Hoverable content */}
</div>
```

---

## Next Steps

- [Styling Guide](./STYLING.md) - Colors and CSS
- [Environment Variables](./ENVIRONMENT_VARIABLES.md) - Configuration
- [Getting Started](./GETTING_STARTED.md) - Setup guide
