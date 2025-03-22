import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://egvuknlirjkhhhoooecl.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVndnVrbmxpcmpraGhob29vZWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNDE0NTMsImV4cCI6MjA1MTkxNzQ1M30.kKCmKyiyGZrjwHZxYjuALIgX78l1FbQZaYOJqzjhfCk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 