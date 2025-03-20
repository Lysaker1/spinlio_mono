import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps extends React.PropsWithChildren<{
  fallback?: React.ReactNode;
}> {}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;  // Changed from optional to union with null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {  // Explicitly type the state
    hasError: false,
    error: null  // Initialize as null instead of undefined
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { 
      hasError: true,
      error 
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary: ", {
      error,
      errorInfo,
      location: window.location.href
    });
  }

  render() {
    if (this.state.hasError && this.state.error) {  // Check for both
      return this.props.fallback || (
        <div style={{ padding: '80px', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>Please try refreshing the page</p>
          {process.env.NODE_ENV !== 'production' && (
            <pre>{this.state.error.message}</pre>  // Now TypeScript knows error is not null
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;