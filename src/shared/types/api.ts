// Define what our API responses look like
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

// Design-specific responses
export interface DesignResponse {
  id: string;
  user_id: string;
  name: string;
  parameters: Record<string, any>;
  created_at: string;
  configurator_type: 'default' | 'vulz';
}

// Now our services can use these types
export interface SaveDesignResponse extends ApiResponse<DesignResponse> {}
export interface GetDesignsResponse extends ApiResponse<DesignResponse[]> {} 