// Bike templates constants
export interface BikeTemplate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
}

export const bikeTemplates: BikeTemplate[] = [
  {
    id: '1',
    name: 'Mountain Bike',
    description: 'A rugged bike for off-road cycling',
    imageUrl: '/assets/bikes/mountain.jpg',
    price: 1299,
    category: 'mountain'
  },
  {
    id: '2',
    name: 'Road Bike',
    description: 'A lightweight bike for speed on paved roads',
    imageUrl: '/assets/bikes/road.jpg',
    price: 1499,
    category: 'road'
  },
  {
    id: '3',
    name: 'Hybrid Bike',
    description: 'Versatile bike for both city and light trails',
    imageUrl: '/assets/bikes/hybrid.jpg',
    price: 899,
    category: 'hybrid'
  }
];

export default bikeTemplates; 