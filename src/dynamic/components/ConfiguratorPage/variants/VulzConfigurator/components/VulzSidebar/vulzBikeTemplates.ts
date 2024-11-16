import { BikeTemplate } from '../../../../components/Sidebar/bikeTemplates';
import { CanyonParameters } from '../../../../components/Sidebar/bikeTemplates';

// Using the same MODEL_ID for now - will be updated with VULZ specific ticket later
export const MODEL_ID = '9d6043a1-538e-4c70-8ff7-977224ec7928';

// Temporarily using Canyon parameters as a placeholder
export const VulzRoadBikeParameters = {
  ...CanyonParameters,
  // We can customize some parameters if needed
  "8620773c-238b-4627-ba8e-2d1c0995b089": "VULZ Bikes",
};

export const vulzBikeTemplates: BikeTemplate[] = [
  { 
    id: 'vulz-road-bike',
    image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Canyon-bike_zitfqq.png', // Placeholder image
    name: 'VULZ Road Bike',
    modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
    parameters: VulzRoadBikeParameters
  }
];