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

class Logger {
  private logLevel: LogLevel = 'info';

  constructor() {
    // Set log level based on environment
    if (process.env.NODE_ENV === 'development') {
      this.logLevel = 'debug';
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
    
    return levels[level] >= levels[this.logLevel];
  }

  debug(...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.debug('[DEBUG]', ...args);
    }
  }

  info(...args: any[]): void {
    if (this.shouldLog('info')) {
      console.info('[INFO]', ...args);
    }
  }

  warn(...args: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn('[WARN]', ...args);
    }
  }

  error(...args: any[]): void {
    if (this.shouldLog('error')) {
      console.error('[ERROR]', ...args);
    }
  }

  // Special method for sensitive data that you want to log in development only
  sensitive(...args: any[]): void {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[SENSITIVE]', ...args);
    }
  }
}

export const logger = new Logger(); 