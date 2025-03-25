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
  is_public: boolean;
  custom_url?: string;
  created_at: string;
}

export interface BusinessProfile {
  id: string;
  company_name: string;
  business_type: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  logo: string;
  tax_id: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
  custom_url: string;

  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}
