import { useState, useEffect } from 'react';

interface UseWebflowOptions {
  onReady?: () => void;
}

export const useWebflow = (options: UseWebflowOptions = {}) => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initWebflow = async () => {
      try {
        await Webflow.ready();
        setIsReady(true);
        options.onReady?.();
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize Webflow'));
      }
    };

    initWebflow();
  }, [options.onReady]);

  const listen = (event: string, callback: (data: any) => void) => {
    if (!isReady) {
      console.warn('Webflow is not ready yet');
      return;
    }
    Webflow.listen(event, callback);
  };

  return {
    isReady,
    error,
    site: isReady ? Webflow.site : null,
    user: isReady ? Webflow.user : null,
    listen,
  };
};
