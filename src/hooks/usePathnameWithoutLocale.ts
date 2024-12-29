import { useSelectedLayoutSegment } from 'next/navigation';

/**
 * Hook `usePathnameWithoutLocale`
 * Returns the current pathname without locale, defaulting to `/`.
 *
 * @returns {string} Pathname, e.g., `"/segment"` or `"/"`.
 */

export const usePathnameWithoutLocale = () => {
  const segment = useSelectedLayoutSegment();
  return segment ? `/${segment}` : '/';
};
