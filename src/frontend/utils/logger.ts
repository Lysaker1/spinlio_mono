// src/shared/utils/logger.ts

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

// Sensitive patterns to redact
const SENSITIVE_PATTERNS = [
  /token[=:]\s*([A-Za-z0-9_.-]+)/gi,
  /key[=:]\s*([A-Za-z0-9_.-]+)/gi,
  /password[=:]\s*([A-Za-z0-9_.-]+)/gi,
  /secret[=:]\s*([A-Za-z0-9_.-]+)/gi,
  /auth[=:]\s*([A-Za-z0-9_.-]+)/gi,
  /bearer\s+([A-Za-z0-9_.-]+)/gi,
];

// List of object properties that should never be logged
const NEVER_LOG_PROPERTIES = [
  'password', 'token', 'secret', 'key', 'authorization', 'auth', 'credentials'
];

const sanitizeData = (data: any): any => {
  if (data === null || data === undefined) return data;
  
  // Handle simple types
  if (typeof data !== 'object') {
    // Try to redact sensitive patterns in strings
    if (typeof data === 'string') {
      SENSITIVE_PATTERNS.forEach(pattern => {
        data = data.replace(pattern, (match: string, p1: string) => {
          return match.replace(p1, '***REDACTED***');
        });
      });
    }
    return data;
  }
  
  // Handle arrays
  if (Array.isArray(data)) {
    return data.map(item => sanitizeData(item));
  }
  
  // Handle objects
  const sanitized = {...data};
  for (const key in sanitized) {
    if (NEVER_LOG_PROPERTIES.includes(key.toLowerCase())) {
      sanitized[key] = '***REDACTED***';
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeData(sanitized[key]);
    } else if (typeof sanitized[key] === 'string') {
      // Check if this property contains sensitive data
      let value = sanitized[key];
      SENSITIVE_PATTERNS.forEach(pattern => {
        value = value.replace(pattern, (match: string, p1: string) => {
          return match.replace(p1, '***REDACTED***');
        });
      });
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};

// Helper for truncating long keys/IDs for display
export const truncateKey = (key: string): string => {
  if (!key || key.length < 16) return '***short-key***';
  return `${key.substring(0, 6)}...${key.substring(key.length - 6)}`;
};

export const logger = {
  debug: (...args: any[]) => {
    // Only log in development
    if (process.env.NODE_ENV !== 'production') {
      console.debug(...args.map(arg => sanitizeData(arg)));
    }
  },
  
  info: (...args: any[]) => {
    // Log in all environments, but sanitize in production
    if (process.env.NODE_ENV === 'production') {
      console.info(...args.map(arg => sanitizeData(arg)));
    } else {
      console.info(...args);
    }
  },
  
  warn: (...args: any[]) => {
    console.warn(...args.map(arg => sanitizeData(arg)));
  },
  
  error: (...args: any[]) => {
    console.error(...args.map(arg => sanitizeData(arg)));
  },
  
  // Special method for sensitive data that you want to log in development only
  sensitive: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[SENSITIVE]', ...args);
    }
  }
}; 