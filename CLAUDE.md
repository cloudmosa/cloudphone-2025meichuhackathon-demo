# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a feature phone demo website built with Next.js, specifically designed to support low-resolution displays:
- QVGA: 240x320 pixels
- QQVGA: 160x120 pixels

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Key Components

- `app/components/Navigation.tsx` - Fixed bottom navigation bar showing left/right button functions
- `app/layout.tsx` - Root layout with Navigation component included
- `app/page.tsx` - Welcome page with title and description
- `app/globals.css` - Global styles with feature phone responsive breakpoints

### Feature Phone Optimization

The website uses responsive design optimized for extremely small screens:

- CSS breakpoints at 320px, 240px, and 160px widths
- Font sizes scale down for smaller screens (12px, 10px, 8px)
- Container max-width constraints for different resolutions
- Fixed navigation bar always visible at bottom
- Minimal, centered layout design

### Navigation System

Every page includes a fixed bottom navigation bar that shows:
- Left button function (currently "Back")
- Right button function (currently "Select")

This navigation paradigm is essential for feature phone UX where users rely on physical left/right soft keys.

## File Structure

- `app/` - Next.js App Router directory
- `app/components/` - Reusable React components
- `public/` - Static assets