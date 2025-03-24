// Bike templates constants
import { CONFIGURATOR_TYPES } from '../configuratorTypes';

export interface BikeTemplate {
  id: string;
  manufacturer_id?: string;
  name: string;
  description?: string;
  imageUrl?: string;
  image?: string;
  price: number;
  category?: string;
  modelStateId?: string;
  parameters?: Record<string, string>;
  type?: keyof typeof CONFIGURATOR_TYPES | Lowercase<keyof typeof CONFIGURATOR_TYPES>;
}

// Parameter definitions (empty objects are placeholders that should be filled with actual parameters)
export const VulzParameters = {};
export const StepthruParameters = {};
export const UrbanParameters = {};
export const CanyonParameters = {
  "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false",
  "eea4374e-a513-4f61-924a-f8175351fa8b": "560",
  // ... add more parameter data as needed
};

export const ClassicroadbikejsonParameters = {
  "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false",
  "eea4374e-a513-4f61-924a-f8175351fa8b": "548",
  // ... add more parameter data as needed
};

export const bikeTemplates: BikeTemplate[] = [
  {
    id: 'vulz_e_gravel',
    manufacturer_id: 'vulz',
    name: 'VULZ E-Gravel',
    description: 'A state-of-the-art electric gravel bike',
    image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Screenshot_2025-01-27_at_01.42.08_x9yrka.png',
    price: 459,
    category: 'electric',
    modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
    parameters: VulzParameters,
    type: CONFIGURATOR_TYPES.VULZ
  },
  {
    id: 'stepthru_e_gravel',
    manufacturer_id: 'vulz',
    name: 'Step thru E-Gravel',
    description: 'An easy-mount electric gravel bike',
    image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Screenshot_2025-01-27_at_01.46.32_gfkmn5.png',
    price: 429,
    category: 'electric',
    modelStateId: '9e104901-9480-4aaf-913a-fd34ee379ab6',
    parameters: StepthruParameters,
    type: CONFIGURATOR_TYPES.STEPTHRU
  },
  { 
    id: 'Canyon Bike',
    manufacturer_id: 'vulz',
    name: 'Canyon Bike',
    description: 'A premium quality road bike from Canyon',
    image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Screenshot_2025-01-27_at_01.41.22_yd8msm.png',
    price: 549,
    category: 'road',
    modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
    parameters: CanyonParameters,
    type: CONFIGURATOR_TYPES.DEFAULT
  },
  {
    id: 'Urban Bike',
    manufacturer_id: 'vulz',
    name: 'Urban E-Bike',
    description: 'Perfect for city commuting with electric assistance',
    image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Screenshot_2025-01-27_at_01.42.32_iytpg3.png',
    price: 569,
    category: 'electric',
    modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
    parameters: UrbanParameters,
    type: CONFIGURATOR_TYPES.URBAN
  },
  {
    id: 'Classic road bike',
    manufacturer_id: 'vulz',
    name: 'Classic Road Bike',
    description: 'A timeless road bike design with modern components',
    image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Screenshot_2025-01-27_at_01.41.47_sbr52h.png',
    price: 499,
    category: 'road',
    modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
    parameters: ClassicroadbikejsonParameters,
    type: CONFIGURATOR_TYPES.DEFAULT
  }
];

export default bikeTemplates; 