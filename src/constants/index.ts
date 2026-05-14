export const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '';
export const GEO_BASE_URL = 'https://api.openweathermap.org/geo/1.0';

export const WEATHER_CONDITIONS = {
  THUNDERSTORM: 'Thunderstorm',
  DRIZZLE: 'Drizzle',
  RAIN: 'Rain',
  SNOW: 'Snow',
  MIST: 'Mist',
  SMOKE: 'Smoke',
  HAZE: 'Haze',
  DUST: 'Dust',
  FOG: 'Fog',
  SAND: 'Sand',
  ASH: 'Ash',
  SQUALL: 'Squall',
  TORNADO: 'Tornado',
  CLEAR: 'Clear',
  CLOUDS: 'Clouds',
} as const;

export const MOOD_SUGGESTIONS: Record<string, { mood: string; activities: string[]; outfit: string }> = {
  Clear: {
    mood: 'Energetic & Optimistic',
    activities: ['Outdoor run', 'Picnic in the park', 'Photography walk', 'Ride a bicycle', 'Visit a rooftop cafe'],
    outfit: 'Light t-shirt, sunglasses, and shorts',
  },
  Clouds: {
    mood: 'Calm & Thoughtful',
    activities: ['Visit a museum', 'Read at a cafe', 'Sketch outdoors', 'Take a walk', 'Try a new recipe'],
    outfit: 'Light jacket with comfortable jeans',
  },
  Rain: {
    mood: 'Cozy & Reflective',
    activities: ['Movie marathon', 'Bake cookies', 'Journal writing', 'Board game night', 'Listen to jazz'],
    outfit: 'Waterproof jacket, boots, and a warm scarf',
  },
  Snow: {
    mood: 'Playful & Peaceful',
    activities: ['Build a snowman', 'Hot cocoa by the fire', 'Snow photography', 'Ice skating', 'Cozy reading'],
    outfit: 'Heavy coat, thermal layers, gloves, and beanie',
  },
  Thunderstorm: {
    mood: 'Dramatic & Introspective',
    activities: ['Watch the storm', 'Meditate', 'Write poetry', 'Indoor workout', 'Call a friend'],
    outfit: 'Stay indoors with cozy loungewear',
  },
  Drizzle: {
    mood: 'Gentle & Creative',
    activities: ['Watercolor painting', 'Cafe hopping', 'Light walk with umbrella', 'Podcast listening', 'Indoor gardening'],
    outfit: 'Light raincoat and waterproof shoes',
  },
  Mist: {
    mood: 'Mysterious & Dreamy',
    activities: ['Nature walk', 'Mindful breathing', 'Write in a journal', 'Visit a botanical garden', 'Practice yoga'],
    outfit: 'Layered light clothing with a scarf',
  },
  Fog: {
    mood: 'Contemplative & Slow',
    activities: ['Slow morning routine', 'Photography', 'Visit a library', 'Hot tea session', 'Plan your week'],
    outfit: 'Warm sweater and comfortable layers',
  },
  Default: {
    mood: 'Balanced & Ready',
    activities: ['Go for a walk', 'Try something new', 'Call a loved one', 'Organize your space', 'Stretch & move'],
    outfit: 'Comfortable layered outfit',
  },
};

export const BG_GRADIENTS: Record<string, string> = {
  Clear: 'from-amber-400 via-orange-300 to-yellow-200',
  Clouds: 'from-slate-400 via-gray-300 to-blue-200',
  Rain: 'from-slate-600 via-gray-500 to-blue-400',
  Snow: 'from-blue-200 via-white to-slate-100',
  Thunderstorm: 'from-gray-800 via-slate-700 to-indigo-900',
  Drizzle: 'from-gray-500 via-blue-300 to-slate-400',
  Mist: 'from-gray-300 via-slate-200 to-blue-100',
  Fog: 'from-gray-400 via-slate-300 to-gray-200',
  Haze: 'from-yellow-300 via-amber-200 to-gray-300',
  Default: 'from-cyan-500 via-blue-400 to-indigo-500',
};

export const DARK_BG_GRADIENTS: Record<string, string> = {
  Clear: 'from-amber-900 via-orange-900 to-yellow-900',
  Clouds: 'from-slate-800 via-gray-800 to-blue-900',
  Rain: 'from-slate-900 via-gray-900 to-blue-950',
  Snow: 'from-blue-950 via-slate-900 to-gray-900',
  Thunderstorm: 'from-gray-950 via-slate-950 to-indigo-950',
  Drizzle: 'from-gray-900 via-blue-900 to-slate-900',
  Mist: 'from-gray-800 via-slate-800 to-blue-900',
  Fog: 'from-gray-900 via-slate-800 to-gray-900',
  Haze: 'from-yellow-900 via-amber-900 to-gray-900',
  Default: 'from-slate-900 via-gray-900 to-blue-950',
};

export const RECENT_SEARCHES_KEY = 'skypulse_recent_searches';
export const MAX_RECENT_SEARCHES = 5;
