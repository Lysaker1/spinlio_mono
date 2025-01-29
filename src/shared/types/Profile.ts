export type UserType = 'designer' | 'manufacturer';

export interface Profile {
  id: string;
  name: string;
  avatar_url?: string;
  location?: string;
  description?: string;
  user_type?: UserType;
  email?: string;
  website?: string;
  custom_url?: string;
  created_at: string;
}
