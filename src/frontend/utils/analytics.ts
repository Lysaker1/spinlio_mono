declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }
  
  export const pageView = (page_path: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-5KTKWSZ0W5', {
        page_path,
      });
    }
  };
  
  export const event = (action: string, params: Record<string, any>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, params);
    }
  };