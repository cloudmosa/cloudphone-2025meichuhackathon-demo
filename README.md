# Feature Phone Demo

A demo website optimized for feature phones with ultra-low resolution displays, built with Next.js and designed for QVGA (240×320) and QQVGA (160×120) screens.

*Created for the 2025 Meichu Hackathon.*

## Features

- **Ultra-low resolution support**: Optimized for QVGA (240×320) and QQVGA (160×120) displays
- **Feature phone navigation**: Keyboard mapping for Escape (left), Enter (center), and Backspace (right) keys
- **Visual feedback**: Navigation buttons highlight when corresponding keys are pressed
- **Responsive design**: Font sizes and layouts automatically adjust for different screen sizes
- **Static export ready**: Pre-configured for GitHub Pages deployment

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

Build and export static files:

```bash
npm run build
```

Static files will be generated in the `out/` directory.

## Navigation Controls

| Key | Action | Visual Indicator |
|-----|--------|------------------|
| Escape | Left button (SL) | Highlights L: SL |
| Enter | Center button | Highlights Enter |
| Backspace | Right button (SR) | Highlights R: SR |

## Project Structure

- `app/page.tsx` - Main welcome page
- `app/components/Navigation.tsx` - Fixed bottom navigation bar
- `app/components/KeyboardHandler.tsx` - Keyboard event management
- `app/components/NavigationContext.tsx` - State management for button highlights
- `app/components/ClientLayout.tsx` - Client-side layout wrapper
- `app/globals.css` - Feature phone responsive breakpoints