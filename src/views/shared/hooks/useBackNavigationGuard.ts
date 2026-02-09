import { useEffect } from 'react';

const DUMMY_STATE = { presentationGuard: true } as const;

export function useBackNavigationGuard() {
  useEffect(() => {
    history.pushState(DUMMY_STATE, '');

    const handlePopState = () => {
      history.pushState(DUMMY_STATE, '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
