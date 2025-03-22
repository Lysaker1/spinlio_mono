import { ApiResponse } from '@shared/types/api';

export class ErrorService {
  static async handleError(error: unknown, context: string): Promise<ApiResponse<any>['error']> {
    console.error(`Error in ${context}:`, error);

    if (error instanceof Response) {
      try {
        const errorData = await error.json();
        return {
          message: errorData.message || 'API Error',
          code: errorData.status?.toString() || 'API_ERROR',
          details: errorData
        };
      } catch (e) {
        return {
          message: 'Failed to parse API error',
          code: 'PARSE_ERROR',
          details: e
        };
      }
    }

    if (error instanceof Error) {
      return {
        message: error.message,
        code: 'UNKNOWN_ERROR',
        details: error.stack
      };
    }

    return {
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR',
      details: error
    };
  }

  static isNetworkError(error: unknown): boolean {
    return error instanceof Error && 
           (error.message.includes('network') || 
            error.message.includes('Network') ||
            error.message.includes('Failed to fetch'));
  }

  static isAuthError(error: unknown): boolean {
    return error instanceof Response && 
           (error.status === 401 || error.status === 403);
  }
} 