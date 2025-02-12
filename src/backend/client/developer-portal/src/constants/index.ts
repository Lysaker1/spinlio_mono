import { CategoryManagement } from '../types';

export const defaultCategories: CategoryManagement = {
  tubing: {
    subcategories: ['Frame', 'Top Tube', 'Down Tube', 'Head Tube'],
    defaultValues: {}
  },
  geometry: {
    subcategories: ['Top Tube', 'Seat Tube', 'Head Tube', 'Rear Triangle'],
    defaultValues: {}
  },
  accessories: {
    subcategories: ['Fittings', 'Wheels', 'Forks', 'Water Bottles'],
    defaultValues: {}
  },
  'client information': {
    subcategories: ['Basic Info', 'Contact'],
    defaultValues: {}
  },
  visual: {
    subcategories: ['Colors', 'Finishes'],
    defaultValues: {}
  },
  sizing: {
    subcategories: ['Measurements', 'Adjustments'],
    defaultValues: {}
  },
  material: {
    subcategories: ['Type', 'Finish'],
    defaultValues: {}
  },
  other: {
    subcategories: [],
    defaultValues: {}
  }
}; 