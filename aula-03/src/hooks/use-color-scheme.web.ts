import { useSyncExternalStore } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
const hydrationStore = createHydrationStore();

export function useColorScheme() {
  const hasHydrated = useSyncExternalStore(
    hydrationStore.subscribe,
    hydrationStore.getSnapshot,
    hydrationStore.getServerSnapshot,
  );

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}

function createHydrationStore() {
  let hydrated = false;
  const listeners = new Set<() => void>();

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);

      if (!hydrated && typeof window !== 'undefined') {
        const frame = requestAnimationFrame(() => {
          hydrated = true;
          listeners.forEach((notify) => notify());
        });

        return () => {
          cancelAnimationFrame(frame);
          listeners.delete(listener);
        };
      }

      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot() {
      return hydrated;
    },
    getServerSnapshot() {
      return false;
    },
  };
}
