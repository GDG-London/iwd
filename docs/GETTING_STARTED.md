# Getting Started with IWD Template

Welcome! This guide will help you set up and customize the IWD (International Women's Day) website template.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Development](#development)
5. [Building for Production](#building-for-production)
6. [Common Tasks](#common-tasks)

---

## Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v14 or higher | [nodejs.org](https://nodejs.org/) |
| npm | Comes with Node.js | - |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

**Recommended**: VS Code with these extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/GDGLondon/iwd.git
cd iwd
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all packages from `package.json`. It may take a few minutes.

### Step 3: Create Environment File

```bash
# On Mac/Linux
cp .env.example .env

# On Windows (PowerShell)
Copy-Item .env.example .env
```

### Step 4: Configure Your Event

Open `.env` and update with your event details:

```env
REACT_APP_EVENT_NAME=International Women's Day [Your City] 2026
REACT_APP_EVENT_DATE=14th March 2026
REACT_APP_EVENT_CITY=Your City
REACT_APP_REGISTRATION_URL=https://www.eventbrite.com/e/your-event
```

### Step 5: Start Development Server

```bash
npm start
```

🎉 The app opens at [http://localhost:3000](http://localhost:3000)

---

## Configuration

### Quick Configuration Checklist

- [ ] Event name, date, and city
- [ ] Event description and tagline
- [ ] Venue name and address
- [ ] Registration URL (Eventbrite)
- [ ] Social media links
- [ ] Chapter name and email
- [ ] Sessionize API endpoints (for speakers)
- [ ] Logo and banner images

### Essential Files to Update

| File | What to Change |
|------|----------------|
| `.env` | All event configuration |
| `public/index.html` | Meta tags, page title, SEO |
| `src/assets/` | Logo, banner, venue images |

See [Environment Variables Guide](./ENVIRONMENT_VARIABLES.md) for complete list.

---

## Development

### Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

### Project Structure Explained

```
src/
├── components/     # Reusable UI pieces
│   ├── header.js   # Navigation bar
│   ├── hero.js     # Main landing section
│   ├── banner.js   # Top event banner
│   ├── speakers.js # Speaker grid
│   ├── location.js # Venue information
│   └── footer.js   # Site footer
├── pages/          # Full page views
│   ├── home.js     # Homepage
│   ├── speakers.js # All speakers page
│   ├── schedule.js # Event schedule
│   └── location.js # Venue page
├── assets/         # Images and fonts
└── util/           # Helper functions
```

### Making Changes

**To change text/content:**
1. Find the component in `src/components/` or `src/pages/`
2. Edit the text or update `.env` variable
3. Save - changes appear automatically!

**To change colors:**
1. Open `tailwind.config.js`
2. Find the `colors` section
3. Update color values
4. Save and refresh

**To add images:**
1. Add image to `src/assets/`
2. Import in component: `import myImage from '../assets/myimage.png'`
3. Use in JSX: `<img src={myImage} alt="Description" />`

---

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized `build` folder.

### Deploy to Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `build`

3. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add all your `.env` variables

4. **Deploy!**
   - Netlify auto-deploys on every push

### Important: Keep `_redirects` File!

The `public/_redirects` file is essential for React Router to work. Don't delete it!

---

## Common Tasks

### Adding a New Page

1. Create file in `src/pages/`:
   ```javascript
   // src/pages/my-page.js
   import React from 'react';
   
   const MyPage = () => (
     <div className="w-11/12 mx-auto py-10">
       <h1>My New Page</h1>
       <p>Content goes here</p>
     </div>
   );
   
   export default MyPage;
   ```

2. Add route in `src/App.js`:
   ```javascript
   import MyPage from './pages/my-page';
   
   // In Routes:
   <Route path="/my-page" element={<MyPage />} />
   ```

3. Add navigation link in `src/components/navbar.js`

### Updating Speakers

Speakers come from Sessionize API. To update:

1. Go to your Sessionize dashboard
2. Get API endpoints
3. Update in `.env`:
   ```env
   REACT_APP_SESSIONIZE_SPEAKERS_API=https://sessionize.com/api/v2/YOUR_ID/view/Speakers
   ```

### Changing the Logo

1. Add your logo to `src/assets/`
2. Update import in `src/components/header.js`:
   ```javascript
   import logo from '../assets/your-logo.png';
   ```

---

## Troubleshooting

### "Port 3000 already in use"

```bash
# Use different port
PORT=3001 npm start

# Or kill existing process (Mac/Linux)
lsof -ti:3000 | xargs kill

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### "Module not found" errors

```bash
npm install
```

### Environment variables not working

1. Check file is named exactly `.env` (not `.env.txt`)
2. Variables must start with `REACT_APP_`
3. Restart development server after changes

### Images not loading

1. Check file path is correct
2. Use relative imports: `import img from '../assets/image.png'`
3. Check file extension matches exactly

---

## Next Steps

- 📖 [Component Documentation](./COMPONENTS.md) - Learn about each component
- 🎨 [Styling Guide](./STYLING.md) - Customize colors and design
- ⚙️ [Environment Variables](./ENVIRONMENT_VARIABLES.md) - All configuration options
- 📄 [Page Templates](./PAGE_TEMPLATES.md) - Page structure guide

---

## Need Help?

- Check the documentation files in `/docs`
- Look at code comments in source files
- Open an issue on GitHub
- Ask in GDG community channels
