import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../shared/styles/global.css';  // Import global styles


const startTime = performance.now();


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(`Initial render took: ${performance.now() - startTime}ms`);

// Add performance markers
performance.mark('static-app-start');

// In your App.tsx or main component
useEffect(() => {
  performance.mark('static-app-loaded');
  performance.measure('static-app-total', 'static-app-start', 'static-app-loaded');
  
  const measurements = performance.getEntriesByType('measure');
  console.log('Performance metrics:', {
    totalLoad: measurements[0].duration.toFixed(2) + 'ms',
    resourceCount: performance.getEntriesByType('resource').length,
    scriptCount: document.scripts.length
  });

  // Log bundle sizes
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  console.table(
    resources
      .filter(r => r.name.includes('vendor'))
      .map(r => ({
        name: r.name.split('/').pop(),
        size: (r.transferSize / 1024).toFixed(2) + 'KB',
        duration: r.duration.toFixed(2) + 'ms'
      }))
  );
}, []);