export type UserType = 'designer' | 'manufacturer' | 'user';
export type BusinessType = 'manufacturer' | 'supplier' | 'retailer' | 'other';

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
  website?: string;
}

export interface Certification {
  name: string;
  year?: string;
  description?: string;
  validated?: boolean;
}

export interface Business {
  company_name?: string;
  business_type?: BusinessType;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  logo?: string;
  tax_id?: string;
  social_media?: SocialMedia;
  certifications?: Certification[];
}

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
  updated_at?: string;
  
  // Business fields in the database
  company_name?: string;
  business_type?: string;
  business_address?: string;
  business_city?: string;
  business_state?: string;
  business_zip?: string;
  business_country?: string;
  business_phone?: string;
  business_email?: string;
  business_website?: string;
  business_description?: string;
  business_logo?: string;
  business_verified?: boolean;
  tax_id?: string;
  
  // Social media links
  social_media?: SocialMedia;
  
  // Certifications
  certifications?: Certification[];
  
  // For storing gallery images
  gallery_images?: string[];
  
  // For API requests only - gets transformed on the server
  business?: Business;
}
