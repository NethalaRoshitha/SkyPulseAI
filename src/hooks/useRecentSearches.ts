import { useState, useCallback } from 'react';
import { getRecentSearches, addRecentSearch, clearRecentSearches } from '../utils/storage';

export function useRecentSearches() {
  const [searches, setSearches] = useState<string[]>(getRecentSearches);

  const add = useCallback((city: string) => {
    const updated = addRecentSearch(city);
    setSearches(updated);
  }, []);

  const clear = useCallback(() => {
    clearRecentSearches();
    setSearches([]);
  }, []);

  return { searches, add, clear };
}
