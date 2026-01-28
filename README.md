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
REACT_APP_EVENT_NAME=International Women's Day London 2026
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_CITY=London
REACT_APP_EVENT_TAGLINE=Celebrating women in technology

# Registration
REACT_APP_REGISTRATION_URL=https://www.eventbrite.com/e/your-event

# Venue
REACT_APP_VENUE_NAME=Your Venue Name
REACT_APP_VENUE_ADDRESS=Street,City,Postcode
```

See [Environment Variables Guide](./docs/ENVIRONMENT_VARIABLES.md) for all options.

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Page navigation
- **Sessionize API** - Speaker/session management
- **Google Sans** - Typography (included)

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `react-router-dom` | Navigation |
| `react-icons` | Icon library |
| `react-burger-menu` | Mobile navigation |
| `react-modal` | Speaker bio popups |

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

## 🌐 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Add environment variables in Netlify dashboard

**Important**: Keep the `_redirects` file in `public/` folder for proper routing!

### Other Platforms

The `build` folder works with any static hosting:
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3

## 📁 Project Structure

```
iwd/
├── public/              # Static files
│   ├── index.html       # HTML template with meta tags
│   └── _redirects       # Netlify routing config
├── src/
│   ├── assets/          # Images and fonts
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── util/            # Helper functions
│   ├── App.js           # Main app component
│   └── index.css        # Global styles
├── docs/                # Documentation
├── .env                 # Environment variables (create this)
├── .env.example         # Example configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies
```

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
