import { RECENT_SEARCHES_KEY, MAX_RECENT_SEARCHES } from '../constants';

export function getRecentSearches(): string[] {
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addRecentSearch(city: string): string[] {
  const searches = getRecentSearches().filter((s) => s.toLowerCase() !== city.toLowerCase());
  const updated = [city, ...searches].slice(0, MAX_RECENT_SEARCHES);
  localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  return updated;
}

export function clearRecentSearches(): void {
  localStorage.removeItem(RECENT_SEARCHES_KEY);
}
