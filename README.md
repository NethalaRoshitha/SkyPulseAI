# SkyPulse AI

Intelligent weather insights and lifestyle recommendations powered by AI. A modern, responsive web application built with React, TypeScript, and Tailwind CSS.

## Features

- **Global City Search** - Search weather for any city worldwide
- **Real-time Weather Data** - Current conditions from OpenWeatherMap API
- **5-Day Forecast** - Detailed multi-day weather predictions
- **AI Mood & Activity Suggestions** - Personalized recommendations based on weather
- **Temperature Toggle** - Switch between Celsius and Fahrenheit
- **Sunrise & Sunset Cards** - Track sun times for any location
- **Dynamic Weather Animations** - Rain, snow, thunder, and cloud animations
- **Recent Searches** - localStorage-backed search history
- **Dark/Light Mode** - System-aware theme with manual toggle
- **Share Weather** - Native share API with clipboard fallback
- **Glassmorphism UI** - Premium glass-effect design
- **Mobile-First Responsive** - Optimized for all screen sizes

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM
- Lucide React (icons)
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skypulse-ai.git
cd skypulse-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your OpenWeatherMap API key
```

### API Setup

1. Visit [https://openweathermap.org/api](https://openweathermap.org/api)
2. Create a free account
3. Generate an API key
4. Add the key to your `.env` file:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```
## Live website link
https://skypulse-ai-weather-bed9.bolt.host/
## Documentation Link
https://github.com/NethalaRoshitha/Alfido-Tech-Internship
## Project Structure

```
src/
  components/     # Reusable UI components
  constants/      # App-wide constants and configurations
  hooks/          # Custom React hooks
  pages/          # Route-level page components
  services/       # API service layer (axios)
  types/          # TypeScript type definitions
  utils/          # Utility functions
```

## Deployment

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add `VITE_WEATHER_API_KEY` in Environment variables

### Vercel

1. Import your GitHub repository
2. Framework preset: Vite
3. Add `VITE_WEATHER_API_KEY` in Environment Variables

### GitHub Pages

1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy`

## License

MIT
