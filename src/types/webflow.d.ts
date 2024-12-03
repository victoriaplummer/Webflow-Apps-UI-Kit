declare namespace Webflow {
  interface Site {
    id: string;
    displayName: string;
  }

  interface User {
    id: string;
    email: string;
  }

  interface App {
    site: Site;
    user: User;
    ready(): Promise<void>;
    listen(event: string, callback: (data: any) => void): void;
  }

  interface Window {
    Webflow: {
      env: string;
      scriptLoaded: boolean;
    };
  }
}

declare const Webflow: Webflow.App;
