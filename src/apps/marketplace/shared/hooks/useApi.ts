import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Define the state of the API call
interface ApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

// Options for the API hook
interface UseApiOptions {
  immediate?: boolean; // Whether to fetch immediately
  headers?: Record<string, string>;
  method?: string;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
}

/**
 * A hook for making API calls with state management
 */
export function useApi<T>(url: string, options: UseApiOptions = {}) {
  // Extract immediate option and pass the rest to axios
  const { immediate = true, ...axiosOptions } = options;
  
  // State for the API call
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  // Function to fetch data
  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const response = await axios(url, {
        ...axiosOptions,
      });
      
      setState({
        data: response.data,
        isLoading: false,
        error: null,
      });
      
      return response.data;
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error instanceof Error 
          ? error
          : new Error('An unknown error occurred'),
      });
      throw error;
    }
  }, [url, axiosOptions]);

  // Fetch data immediately if requested
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  // Return the current state and a function to refresh the data
  return {
    ...state,
    refresh: fetchData,
  };
} 