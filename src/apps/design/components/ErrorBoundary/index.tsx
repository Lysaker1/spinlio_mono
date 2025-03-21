import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = ({ error }: { error: Error }) => (
  <div style={{ padding: '80px', textAlign: 'center' }}>
    <h1>Something went wrong</h1>
    <p>Please try refreshing the page</p>
    {process.env.NODE_ENV !== 'production' && (
      <pre>{error.message}</pre>
    )}
  </div>
);

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, fallback }) => {
  return (
    <ReactErrorBoundary
      fallbackRender={({ error }) => (
        fallback ? <>{fallback}</> : <DefaultFallback error={error} />
      )}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary; 