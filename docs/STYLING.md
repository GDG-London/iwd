# Styling Guide

## Overview

This project uses **Tailwind CSS** with a custom **IWD purple theme**.

---

## Color Palette

### IWD Theme Colors

The purple theme is defined in `tailwind.config.js`:

| Color Name | Hex | Usage |
|------------|-----|-------|
| `IWDPurple` | `#7C3AED` | Primary vibrant purple |
| `IWDDeepPurple` | `#5B21B6` | Deep purple |
| `IWDDarkPurple` | `#4C1D95` | Very dark purple |
| `IWDLightPurple` | `#A78BFA` | Light purple accent |
| `IWDViolet` | `#8B5CF6` | Violet |
| `IWDPink` | `#EC4899` | Pink accent |
| `IWDMagenta` | `#D946EF` | Magenta accent |
| `IWDBackground` | `#0f0a1a` | Dark background |
| `IWDCard` | `#1a1025` | Card background |
| `IWDText` | `#E9D5FF` | Light text |

### Usage Examples

```jsx
// Background colors
<div className="bg-IWDPurple">Purple background</div>
<div className="bg-IWDBackground">Dark background</div>
<div className="bg-IWDCard">Card background</div>

// Text colors
<p className="text-IWDLightPurple">Light purple text</p>
<p className="text-IWDText">Light readable text</p>
<p className="text-white">White text</p>

// Border colors
<div className="border-2 border-IWDPurple">Purple border</div>
<div className="border border-IWDPurple/30">30% opacity border</div>
```

### Gradients

```jsx
// Main purple gradient
<div className="bg-gradient-to-r from-IWDDeepPurple via-IWDPurple to-IWDViolet">
  Horizontal gradient
</div>

// Diagonal gradient
<div className="bg-gradient-to-br from-IWDDeepPurple to-IWDViolet">
  Diagonal gradient
</div>

// Button gradient
<button className="bg-gradient-to-r from-IWDPurple via-IWDViolet to-IWDMagenta">
  Colorful button
</button>
```

---

## Typography

### Fonts

| Font | Usage | Class |
|------|-------|-------|
| Google Sans | Primary text | `font-GoogleSans` (default) |
| Roboto Mono | Code/technical | `font-RobotoMono` |

Fonts are loaded from `src/assets/fonts/`.

### Text Sizes

```jsx
<p className="text-xs">Extra small (12px)</p>
<p className="text-sm">Small (14px)</p>
<p className="text-base">Base (16px)</p>
<p className="text-lg">Large (18px)</p>
<p className="text-xl">Extra large (20px)</p>
<p className="text-2xl">2XL (24px)</p>
<p className="text-3xl">3XL (30px)</p>
<p className="text-4xl">4XL (36px)</p>
<p className="text-5xl">5XL (48px)</p>
```

### Font Weights

```jsx
<p className="font-normal">Normal weight</p>
<p className="font-medium">Medium weight</p>
<p className="font-semibold">Semibold weight</p>
<p className="font-bold">Bold weight</p>
```

---

## Layout

### Container

Standard content container:

```jsx
<div className="w-11/12 mx-auto">
  {/* Centers content with margins */}
</div>
```

### Grid

```jsx
// Two columns
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div>Left column</div>
  <div>Right column</div>
</div>

// Three columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

// Four columns (speakers grid)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Speaker cards */}
</div>
```

### Flexbox

```jsx
// Horizontal centering
<div className="flex justify-center items-center">
  Centered content
</div>

// Space between
<div className="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>

// Vertical stack
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Spacing

### Padding

```jsx
<div className="p-4">All sides 16px</div>
<div className="px-6 py-4">Horizontal 24px, Vertical 16px</div>
<div className="pt-10 pb-20">Top 40px, Bottom 80px</div>
```

### Margin

```jsx
<div className="m-4">All sides 16px</div>
<div className="mx-auto">Horizontal auto (centering)</div>
<div className="mt-8 mb-4">Top 32px, Bottom 16px</div>
<div className="my-10">Vertical 40px</div>
```

### Common Values

| Class | Pixels |
|-------|--------|
| `1` | 4px |
| `2` | 8px |
| `4` | 16px |
| `6` | 24px |
| `8` | 32px |
| `10` | 40px |
| `12` | 48px |
| `20` | 80px |

---

## Responsive Design

### Breakpoints

| Prefix | Min Width | Device |
|--------|-----------|--------|
| (none) | 0px | Mobile |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

### Examples

```jsx
// Responsive text
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive heading
</h1>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col → 2 col → 3 col */}
</div>

// Show/hide
<div className="hidden lg:block">Only on large screens</div>
<div className="lg:hidden">Only on small screens</div>

// Responsive padding
<section className="py-10 sm:py-16 lg:py-20">
  Content with responsive vertical padding
</section>
```

---

## Common Components

### Card

```jsx
<div className="bg-IWDCard border border-IWDPurple/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <h3 className="text-xl font-bold text-white mb-2">Card Title</h3>
  <p className="text-IWDText">Card content goes here...</p>
</div>
```

### Button - Primary

```jsx
<button className="bg-gradient-to-r from-IWDPurple to-IWDViolet text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
  Click Me
</button>
```

### Button - Outline

```jsx
<button className="border-2 border-IWDPurple text-IWDPurple px-6 py-3 rounded-lg font-semibold hover:bg-IWDPurple hover:text-white transition-all">
  Click Me
</button>
```

### Badge/Pill

```jsx
<span className="bg-IWDPurple text-white px-4 py-2 rounded-full text-sm font-semibold">
  Badge
</span>
```

### Section with Gradient

```jsx
<section className="bg-gradient-to-br from-IWDDeepPurple via-IWDPurple to-IWDViolet text-white py-20 rounded-2xl">
  <div className="w-11/12 mx-auto">
    <h2 className="text-4xl font-bold mb-8">Section Title</h2>
    {/* Content */}
  </div>
</section>
```

---

## Effects

### Shadows

```jsx
<div className="shadow">Small shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
<div className="shadow-2xl">2XL shadow</div>

// Colored shadow
<div className="shadow-lg shadow-IWDPurple/30">Purple tinted shadow</div>
```

### Hover Effects

```jsx
// Scale
<div className="hover:scale-105 transition-transform">
  Grows on hover
</div>

// Opacity
<div className="hover:opacity-80 transition-opacity">
  Fades slightly on hover
</div>

// Shadow
<div className="shadow-lg hover:shadow-xl transition-shadow">
  Shadow grows on hover
</div>

// Background
<div className="bg-IWDCard hover:bg-IWDPurple/20 transition-colors">
  Background changes on hover
</div>
```

### Border Radius

```jsx
<div className="rounded">Small radius (4px)</div>
<div className="rounded-lg">Large radius (8px)</div>
<div className="rounded-xl">XL radius (12px)</div>
<div className="rounded-2xl">2XL radius (16px)</div>
<div className="rounded-full">Fully rounded (pill/circle)</div>
```

---

## Custom Styles

### Adding Custom CSS

Edit `src/index.css`:

```css
@layer components {
  .iwd-card {
    @apply bg-IWDCard border border-IWDPurple/30 rounded-xl p-6;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.15);
  }
  
  .iwd-button {
    @apply bg-gradient-to-r from-IWDPurple to-IWDViolet;
    @apply text-white px-6 py-3 rounded-lg font-semibold;
    @apply hover:opacity-90 transition-all;
  }
}
```

### Extending Tailwind

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'MyCustomColor': '#123456',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
```

---

## Best Practices

### ✅ Do

1. **Use Tailwind classes** instead of inline styles
2. **Design mobile-first**, add larger screen styles with prefixes
3. **Use semantic HTML** elements
4. **Maintain consistent spacing** using Tailwind scale
5. **Extract repeated patterns** into custom classes or components

### ❌ Don't

1. Don't use arbitrary values when Tailwind has standard classes
2. Don't forget responsive prefixes for layout changes
3. Don't hardcode colors - use theme variables
4. Don't mix inline styles with Tailwind (unless necessary)

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Heroicons](https://heroicons.com/) - SVG icons
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Next Steps

- [Components Documentation](./COMPONENTS.md) - See components in action
- [Environment Variables](./ENVIRONMENT_VARIABLES.md) - Configuration
- [Getting Started](./GETTING_STARTED.md) - Setup guide
