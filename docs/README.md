# IWD Template Documentation

## 👋 Welcome, Developer!

This documentation will help you understand, customize, and extend the IWD (International Women's Day) London website template.

---

## 📚 Documentation Index

| Guide | Description | Best For |
|-------|-------------|----------|
| [Getting Started](./GETTING_STARTED.md) | Installation, setup, and first steps | New developers |
| [Environment Variables](./ENVIRONMENT_VARIABLES.md) | All configuration options | Customizing content |
| [Components](./COMPONENTS.md) | Component reference and usage | Understanding the code |
| [Page Templates](./PAGE_TEMPLATES.md) | Page structure and routing | Adding new pages |
| [Styling Guide](./STYLING.md) | Colors, fonts, and CSS | Design customization |

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/GDGLondon/iwd.git
cd iwd
npm install

# Configure
cp .env.example .env
# Edit .env with your event details

# Run
npm start
```

---

## 🎯 Common Tasks

### "I want to change the event name/date/description"
→ Edit `.env` file - See [Environment Variables](./ENVIRONMENT_VARIABLES.md)

### "I want to change the colors"
→ Edit `tailwind.config.js` - See [Styling Guide](./STYLING.md)

### "I want to add a new page"
→ Create in `src/pages/` - See [Page Templates](./PAGE_TEMPLATES.md)

### "I want to update a component"
→ Edit files in `src/components/` - See [Components](./COMPONENTS.md)

### "I want to add speakers"
→ Configure Sessionize API - See [Environment Variables](./ENVIRONMENT_VARIABLES.md#sessionize-api)

---

## 📁 Project Structure

```
iwd/
├── 📂 docs/              # You are here!
├── 📂 public/            # Static files (index.html, images)
├── 📂 src/
│   ├── 📂 assets/        # Images, fonts
│   ├── 📂 components/    # Reusable UI components
│   ├── 📂 pages/         # Page components
│   └── 📂 util/          # Helper functions
├── 📄 .env               # Your configuration (create this)
├── 📄 .env.example       # Example configuration
├── 📄 tailwind.config.js # Tailwind CSS settings
└── 📄 package.json       # Dependencies
```

---

## 🆘 Getting Help

1. **Read the docs** - Start with [Getting Started](./GETTING_STARTED.md)
2. **Check code comments** - Components have helpful comments
3. **Search the codebase** - Use VS Code search (Ctrl/Cmd + Shift + F)
4. **Open an issue** - Ask on GitHub if stuck

---

## 🔗 Quick Links

- [Main README](../README.md)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Sessionize](https://sessionize.com)
