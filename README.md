# IWD London Website Template

> 🎉 **International Women's Day (IWD) Website Template** - Perfect for GDG chapters hosting IWD events!

A modern, customizable React website template for International Women's Day events, originally built for IWD London 2026 by GDG London and Women Techmakers.

## ✨ Features

- 🎨 Beautiful purple/violet theme designed for IWD
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔧 Easy configuration via environment variables
- 🎤 Sessionize integration for speakers and sessions
- 🗺️ Google Maps integration for venue
- 🎟️ Eventbrite registration integration
- ⚡ Fast loading with React and Tailwind CSS

## 📚 Documentation

Complete documentation for developers:

| Guide | Description |
|-------|-------------|
| [Getting Started](./docs/GETTING_STARTED.md) | Installation and setup |
| [Page Templates](./docs/PAGE_TEMPLATES.md) | Understanding page structure |
| [Components](./docs/COMPONENTS.md) | Component reference |
| [Environment Variables](./docs/ENVIRONMENT_VARIABLES.md) | Configuration guide |
| [Styling Guide](./docs/STYLING.md) | Colors, fonts, and CSS |

## 🚀 Quick Start

### Prerequisites

- Node.js v14 or higher ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/GDGLondon/iwd.git
cd iwd

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your event details

# 4. Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Essential Settings

Edit your `.env` file with these key settings:

```env
# Event Information
REACT_APP_EVENT_NAME=Build with AI - International Women's Day 2026
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_CITY=London
REACT_APP_EVENT_TAGLINE=Celebrating women in technology

# Registration
REACT_APP_REGISTRATION_URL=https://www.eventbrite.com/e/your-event

# Venue
REACT_APP_VENUE_NAME=Your Venue Name
REACT_APP_VENUE_ADDRESS=Street,City,Postcode

# Call for Speakers
REACT_APP_CFP_URL=https://sessionize.com/your-event/
REACT_APP_CFP_DEADLINE=15 Feb 2026
```

See [Environment Variables Guide](./docs/ENVIRONMENT_VARIABLES.md) for all options.

---

## 🎨 Styling & Design System

### Why Tailwind CSS?

We chose **Tailwind CSS** as our styling framework for several reasons:

| Benefit | Description |
|---------|-------------|
| **Utility-First** | Write styles directly in JSX without switching files - faster development |
| **No CSS Bloat** | Only the classes you use are included in the final build |
| **Responsive Made Easy** | Built-in breakpoints (`sm:`, `md:`, `lg:`, `xl:`) for responsive design |
| **Consistent Design** | Pre-defined spacing, colors, and typography scales ensure consistency |
| **Easy Customization** | Extend or override the theme in `tailwind.config.js` |
| **Great DX** | Excellent VS Code extensions for autocomplete |

### IWD Color Palette

Our custom purple theme is defined in `tailwind.config.js`:

```javascript
colors: {
  'IWDPurple': '#7C3AED',      // Primary - Vibrant Purple
  'IWDDeepPurple': '#5B21B6',  // Darker purple for gradients
  'IWDViolet': '#8B5CF6',      // Lighter violet accent
  'IWDMagenta': '#D946EF',     // Magenta for highlights
  'IWDPink': '#EC4899',        // Pink accent
  'IWDLightPurple': '#C4B5FD', // Light purple for text on dark
  'IWDBackground': '#0f0a1a',  // Dark purple-black background
  'IWDAccent': '#A78BFA',      // Accent purple
}
```

### Typography

We use **Google Sans** as the primary font (included in `src/assets/fonts/`), with **Roboto Mono** as a fallback for code snippets.

### CSS Architecture

```
src/
├── index.css          # Global styles, Tailwind imports, base styles
├── App.css            # App-level styles (minimal)
└── tailwind.config.js # Theme configuration, custom colors, fonts
```

---

## 📦 Dependencies & Why We Use Them

### Core Dependencies

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **react** | ^18.2.0 | Modern React with hooks, concurrent features, and great performance |
| **react-dom** | ^18.2.0 | DOM rendering for React |
| **react-scripts** | 5.0.1 | Create React App - zero-config build setup with Webpack, Babel, ESLint |

### Routing & Navigation

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **react-router-dom** | ^6.3.0 | Industry-standard routing for React SPAs. Declarative, nested routes, easy navigation |
| **react-burger-menu** | ^3.0.8 | Animated slide-out menu for mobile navigation. Highly customizable, touch-friendly |

### UI & Icons

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **react-icons** | ^4.4.0 | Huge icon library (Font Awesome, Material, etc.) as React components. Tree-shakeable |
| **react-modal** | ^3.15.1 | Accessible modal dialogs for speaker bios. Handles focus trapping, keyboard navigation |

### Data & API

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **axios** | ^1.5.1 | Promise-based HTTP client. Better error handling than fetch, request interceptors |
| **moment** | ^2.29.4 | Date/time formatting and manipulation (used for schedule display) |

### Media

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **cloudinary** | ^1.41.0 | Image optimization and CDN delivery (optional - for photo galleries) |
| **cloudinary-react** | ^1.8.1 | React components for Cloudinary images |

### Development Dependencies

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **tailwindcss** | ^3.1.8 | Utility-first CSS framework - see styling section above |
| **postcss** | ^8.4.16 | CSS processing pipeline for Tailwind |
| **autoprefixer** | ^10.4.8 | Automatically adds vendor prefixes for browser compatibility |
| **@tailwindcss/aspect-ratio** | ^0.4.0 | Aspect ratio utilities for responsive images/videos |

### Testing

| Package | Version | Why We Use It |
|---------|---------|---------------|
| **@testing-library/react** | ^13.3.0 | Testing utilities that encourage good practices |
| **@testing-library/jest-dom** | ^5.16.5 | Custom Jest matchers for DOM assertions |
| **@testing-library/user-event** | ^13.5.0 | Simulates user interactions in tests |

---

## 🛠️ Tech Stack Summary

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND STACK                        │
├─────────────────────────────────────────────────────────┤
│  Framework    │  React 18 (Hooks, Functional Components) │
│  Styling      │  Tailwind CSS 3 (Utility-First)          │
│  Routing      │  React Router v6                         │
│  Build Tool   │  Create React App (Webpack + Babel)      │
│  Icons        │  React Icons (FA, Material, etc.)        │
│  API Client   │  Axios + Fetch                           │
├─────────────────────────────────────────────────────────┤
│                    INTEGRATIONS                          │
├─────────────────────────────────────────────────────────┤
│  Speakers     │  Sessionize API                          │
│  Tickets      │  Eventbrite                              │
│  Maps         │  Google Maps Embed                       │
│  Images       │  Cloudinary (optional)                   │
├─────────────────────────────────────────────────────────┤
│                    DEPLOYMENT                            │
├─────────────────────────────────────────────────────────┤
│  Hosting      │  Vercel / Netlify / Any Static Host      │
│  CI/CD        │  GitHub Actions (optional)               │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to update the color palette:

```javascript
colors: {
  'IWDPurple': '#7C3AED',     // Primary purple
  'IWDDeepPurple': '#5B21B6', // Deep purple
  'IWDViolet': '#8B5CF6',     // Violet accent
  // ... more colors
}
```

### Changing Content

1. **Event details** → Edit `.env` file
2. **Page content** → Edit files in `src/pages/`
3. **Components** → Edit files in `src/components/`
4. **Images** → Add to `src/assets/`

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. Add environment variables in Vercel dashboard
5. Deploy!

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Add environment variables in Netlify dashboard

**Important**: Keep the `_redirects` file in `public/` folder for proper SPA routing!

### Other Platforms

The `build` folder works with any static hosting:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

---

## 📁 Project Structure

```
iwd/
├── public/              # Static files
│   ├── index.html       # HTML template with meta tags & SEO
│   └── _redirects       # Netlify/Vercel routing config
├── src/
│   ├── assets/          # Images, fonts, media
│   │   ├── fonts/       # Google Sans, Roboto Mono
│   │   └── sponsors/    # Sponsor logos
│   ├── components/      # Reusable UI components
│   │   ├── header.js    # Site header with logo & nav
│   │   ├── navbar.js    # Desktop navigation
│   │   ├── sidebar.js   # Mobile slide-out menu
│   │   ├── hero.js      # Homepage hero section
│   │   ├── speakers.js  # Speaker cards grid
│   │   ├── location.js  # Venue info with map
│   │   ├── call-for-speakers.js  # CFP banner
│   │   └── ...
│   ├── pages/           # Page components (routes)
│   │   ├── home.js      # Homepage
│   │   ├── speakers.js  # Speakers page
│   │   ├── schedule.js  # Schedule page
│   │   └── ...
│   ├── util/            # Helper functions
│   ├── App.js           # Main app with routes
│   ├── App.css          # App styles
│   └── index.css        # Global styles + Tailwind
├── docs/                # Documentation
├── .env.example         # Example environment config
├── tailwind.config.js   # Tailwind theme & customization
├── postcss.config.js    # PostCSS config for Tailwind
└── package.json         # Dependencies & scripts
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **GDG London** - Original development
- **Women Techmakers** - Design inspiration
- **Google Developer Groups** - Brand guidelines

---

**Need help?** Check the [documentation](./docs/) or open an issue!
