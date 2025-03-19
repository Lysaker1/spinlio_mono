// Define types for prefab components
export interface PrefabComponent {
  component: string;
  manufacturer: string;
  model: string;
  productionTime: string;
  country: string;
  price: string;
  productionTimeDays?: string;
}

// Define mapping of prefab IDs to their components
export interface PrefabComponentsMap {
  [prefabId: string]: PrefabComponent[];
}

// Step-Thru E-Gravel Bike components (Vulz E-Bike / 700c)
export const STEP_THRU_COMPONENTS: PrefabComponent[] = [
  { component: 'frame', manufacturer: 'SML', model: 'FRA-958', productionTime: '60', country: 'China', price: '106.42', productionTimeDays: '75' },
  { component: 'fork', manufacturer: 'MM', model: 'FOR-325', productionTime: '45', country: 'China', price: '70.95', productionTimeDays: '70' },
  { component: 'headset', manufacturer: 'XH', model: 'HEA-372', productionTime: '20', country: 'China', price: '17.74', productionTimeDays: '30' },
  { component: 'handlebar', manufacturer: 'JSH', model: 'HAN-806', productionTime: '65', country: 'Taiwan', price: '22.17', productionTimeDays: '64' },
  { component: 'stem', manufacturer: 'JSH', model: 'STE-138', productionTime: '35', country: 'China', price: '17.74', productionTimeDays: '49' },
  { component: 'grip', manufacturer: 'JUNTAI', model: 'GRI-813', productionTime: '70', country: 'China', price: '8.87', productionTimeDays: '30' },
  { component: 'disc brake', manufacturer: 'RPT', model: 'DIS-510', productionTime: '60', country: 'China', price: '31.04', productionTimeDays: '78' },
  { component: 'cassette', manufacturer: 'KANGYUA', model: 'FRE-480', productionTime: '65', country: 'China', price: '26.61', productionTimeDays: '62' },
  { component: 'shifter', manufacturer: 'SHIMANO', model: 'THU-811', productionTime: '60', country: 'Japan', price: '22.17', productionTimeDays: '64' },
  { component: 'rear derailleur', manufacturer: 'SHIMANO', model: 'REA-784', productionTime: '60', country: 'Japan', price: '35.47', productionTimeDays: '31' },
  { component: 'pedal', manufacturer: 'MXR', model: 'PED-289', productionTime: '70', country: 'Taiwan', price: '13.3', productionTimeDays: '38' },
  { component: 'brake cable', manufacturer: 'LONGY', model: 'BRA-484', productionTime: '30', country: 'Taiwan', price: '8.87', productionTimeDays: '85' },
  { component: 'chain', manufacturer: 'TEC', model: 'CHA-909', productionTime: '40', country: 'Taiwan', price: '17.74', productionTimeDays: '30' },
  { component: 'front hub', manufacturer: 'SF', model: 'FRO-990', productionTime: '45', country: 'China', price: '26.61', productionTimeDays: '52' },
  { component: 'rim', manufacturer: 'SH', model: 'ROM-406', productionTime: '45', country: 'Taiwan', price: '17.74', productionTimeDays: '58' },
  { component: 'spoke', manufacturer: 'HX', model: 'SPO-681', productionTime: '35', country: 'China', price: '8.87', productionTimeDays: '33' },
  { component: 'tyre', manufacturer: 'JLR', model: 'TYR-476', productionTime: '60', country: 'China', price: '44.34', productionTimeDays: '48' },
  { component: 'rim tap', manufacturer: 'WD', model: 'RIM-719', productionTime: '60', country: 'China', price: '4.43', productionTimeDays: '89' },
  { component: 'seat clamp', manufacturer: 'RA', model: 'SEA-366', productionTime: '45', country: 'China', price: '8.87', productionTimeDays: '64' },
  { component: 'saddle', manufacturer: 'LT', model: 'SAD-757', productionTime: '50', country: 'Taiwan', price: '31.04', productionTimeDays: '55' },
  { component: 'seatpost', manufacturer: 'JSH', model: 'SEA-272', productionTime: '50', country: 'China', price: '22.17', productionTimeDays: '82' },
  { component: 'cable', manufacturer: 'Ningo', model: 'WRA-201', productionTime: '40', country: 'China', price: '17.74', productionTimeDays: '60' },
  { component: 'kickstand', manufacturer: 'RJ', model: 'KIC-758', productionTime: '45', country: 'China', price: '13.3', productionTimeDays: '89' },
  { component: 'front light', manufacturer: 'SZFJ', model: 'FRO-385', productionTime: '65', country: 'China', price: '17.74', productionTimeDays: '54' },
  { component: 'charger', manufacturer: 'FYD', model: 'CHA-941', productionTime: '65', country: 'China', price: '44.34', productionTimeDays: '66' },
  { component: 'motor', manufacturer: 'Vulz', model: 'MOT-812', productionTime: '50', country: 'China', price: '310.4', productionTimeDays: '31' },
  { component: 'battery', manufacturer: 'Samsung', model: 'BAT-823', productionTime: '80', country: 'South Korea', price: '354.74', productionTimeDays: '51' },
  { component: 'carton box', manufacturer: 'Cardboarder', model: 'CAR-515', productionTime: '15', country: 'China', price: '46.61', productionTimeDays: '74' },
  { component: 'assembly', manufacturer: 'Vulz', model: 'ASS-980', productionTime: '5', country: 'China', price: '88.69', productionTimeDays: '85' }
];

// Classic Road Bike BOM
export const CLASSIC_ROAD_BIKE_COMPONENTS: PrefabComponent[] = [
  { component: 'Frame', manufacturer: 'Vulz', model: 'GravelX-409', productionTime: '56', country: 'China', price: '29.44' },
  { component: 'Fork', manufacturer: 'Vulz', model: 'TrailFork-119', productionTime: '45', country: 'Korea', price: '19.63' },
  { component: 'Headset', manufacturer: 'Neco', model: 'Component-322', productionTime: '34', country: 'China', price: '4.91' },
  { component: 'Handlebar', manufacturer: 'FSA', model: 'RoadGrip-971', productionTime: '36', country: 'China', price: '6.13' },
  { component: 'Stem', manufacturer: 'FSA', model: 'StiffLink-877', productionTime: '86', country: 'Taiwan', price: '4.91' },
  { component: 'Grip', manufacturer: 'Truvativ', model: 'ComfortPalm-194', productionTime: '52', country: 'Korea', price: '2.45' },
  { component: 'Front Disk Brake', manufacturer: 'Tektro', model: 'Component-748', productionTime: '36', country: 'China', price: '4.91' },
  { component: 'Rear Disk Brake', manufacturer: 'Tektro', model: 'Component-764', productionTime: '89', country: 'China', price: '4.91' },
  { component: 'Shifter, Right', manufacturer: 'Shimano', model: 'Component-505', productionTime: '84', country: 'Korea', price: '4.91' },
  { component: 'Rear Derailleur', manufacturer: 'Shimano', model: 'PrecisionShift-937', productionTime: '32', country: 'Korea', price: '9.81' },
  { component: 'Casette', manufacturer: 'Shimano', model: 'SpeedDrive-354', productionTime: '61', country: 'Taiwan', price: '7.36' },
  { component: 'Chain', manufacturer: 'Shimano', model: 'EnduroLink-400', productionTime: '39', country: 'Korea', price: '4.91' },
  { component: 'Pedal', manufacturer: 'Sunmei', model: 'GripPedal-557', productionTime: '44', country: 'Korea', price: '3.68' },
  { component: 'Cables', manufacturer: 'Shimano', model: 'Component-189', productionTime: '30', country: 'Korea', price: '4.91' },
  { component: 'Front Hub', manufacturer: 'Truvativ', model: 'SpinCore-833', productionTime: '41', country: 'Japan', price: '7.36' },
  { component: 'Rear Hub', manufacturer: 'Sunmei', model: 'TorqueDrive-879', productionTime: '47', country: 'Korea', price: '9.81' },
  { component: 'Rim', manufacturer: 'Giant', model: 'Component-489', productionTime: '59', country: 'Korea', price: '4.91' },
  { component: 'Front Spoke', manufacturer: 'DT Swiss', model: 'Component-115', productionTime: '67', country: 'Taiwan', price: '4.91' },
  { component: 'Rear Spoke', manufacturer: 'DT Swiss', model: 'Component-740', productionTime: '33', country: 'China', price: '4.91' },
  { component: 'Tyre', manufacturer: 'Kenda', model: 'AllTerrain-956', productionTime: '51', country: 'Japan', price: '12.27' },
  { component: 'Rim Tape', manufacturer: 'Kenda', model: 'Component-117', productionTime: '45', country: 'Taiwan', price: '4.91' },
  { component: 'Seatpost', manufacturer: 'SRAM', model: 'RideAdjust-555', productionTime: '51', country: 'China', price: '6.13' },
  { component: 'Kickstand', manufacturer: 'Shimano', model: 'StableStand-667', productionTime: '35', country: 'Korea', price: '3.68' },
  { component: 'Saddle', manufacturer: 'Sunmei', model: 'UltraComfort-354', productionTime: '30', country: 'Korea', price: '8.59' },
  { component: 'LCD Display', manufacturer: 'King Meter', model: 'Component-464', productionTime: '42', country: 'Korea', price: '4.91' },
  { component: 'Motor Set', manufacturer: 'Vulz', model: 'PowerDrive-170', productionTime: '70', country: 'Korea', price: '85.88' },
  { component: 'Charger', manufacturer: 'Chargy', model: 'FastCharge-417', productionTime: '58', country: 'Korea', price: '12.27' },
  { component: 'Batteries Set', manufacturer: 'Samsung', model: 'LongRange-378', productionTime: '59', country: 'Korea', price: '98.15' },
  { component: 'Box, Carton', manufacturer: 'Boxable', model: 'Component-308', productionTime: '59', country: 'Taiwan', price: '4.91' },
  { component: 'Assembly', manufacturer: 'Vulz', model: 'FactoryFit-344', productionTime: '55', country: 'Taiwan', price: '24.54' }
];

// Disc Brake Road Bike BOM (Canyon)
export const DISC_BRAKE_ROAD_BIKE_COMPONENTS: PrefabComponent[] = [
  { component: 'Frame', manufacturer: 'Vulz', model: 'GravelX-868', productionTime: '35', country: 'China', price: '82.89' },
  { component: 'Fork', manufacturer: 'Vulz', model: 'TrailFork-586', productionTime: '51', country: 'Korea', price: '55.26' },
  { component: 'Headset', manufacturer: 'FSA', model: 'Component-762', productionTime: '59', country: 'China', price: '13.81' },
  { component: 'Handlebar', manufacturer: 'Sunmei', model: 'RoadGrip-280', productionTime: '55', country: 'China', price: '17.27' },
  { component: 'Stem', manufacturer: 'Shimano', model: 'StiffLink-995', productionTime: '63', country: 'China', price: '13.81' },
  { component: 'Grip', manufacturer: 'FSA', model: 'ComfortPalm-745', productionTime: '50', country: 'Taiwan', price: '6.91' },
  { component: 'Front Disk Brake', manufacturer: 'Tektro', model: 'Component-638', productionTime: '75', country: 'Korea', price: '13.81' },
  { component: 'Rear Disk Brake', manufacturer: 'Tektro', model: 'Component-111', productionTime: '85', country: 'Korea', price: '13.81' },
  { component: 'Shifter, Right', manufacturer: 'Shimano', model: 'Component-418', productionTime: '64', country: 'China', price: '13.81' },
  { component: 'Rear Derailleur', manufacturer: 'Shimano', model: 'PrecisionShift-731', productionTime: '81', country: 'Taiwan', price: '27.63' },
  { component: 'Cassette', manufacturer: 'Shimano', model: 'SpeedDrive-354', productionTime: '76', country: 'Taiwan', price: '20.72' },
  { component: 'Chain', manufacturer: 'Shimano', model: 'EnduroLink-434', productionTime: '65', country: 'China', price: '13.81' },
  { component: 'Pedal', manufacturer: 'FSA', model: 'GripPedal-585', productionTime: '34', country: 'Korea', price: '10.36' },
  { component: 'Cables', manufacturer: 'Shimano', model: 'Component-481', productionTime: '49', country: 'China', price: '13.81' },
  { component: 'Front Hub', manufacturer: 'SRAM', model: 'SpinCore-709', productionTime: '60', country: 'Korea', price: '20.72' },
  { component: 'Rear Hub', manufacturer: 'FSA', model: 'TorqueDrive-430', productionTime: '67', country: 'China', price: '27.63' },
  { component: 'Rim', manufacturer: 'SR Suntour', model: 'Component-432', productionTime: '33', country: 'Korea', price: '13.81' },
  { component: 'Front Spoke', manufacturer: 'DT Swiss', model: 'Component-429', productionTime: '41', country: 'Korea', price: '13.81' },
  { component: 'Rear Spoke', manufacturer: 'DT Swiss', model: 'Component-594', productionTime: '65', country: 'Korea', price: '13.81' },
  { component: 'Tyre', manufacturer: 'Kenda', model: 'AllTerrain-490', productionTime: '36', country: 'Taiwan', price: '34.54' },
  { component: 'Rim Tape', manufacturer: 'Kenda', model: 'Component-636', productionTime: '39', country: 'China', price: '13.81' },
  { component: 'Seatpost', manufacturer: 'FSA', model: 'RideAdjust-724', productionTime: '57', country: 'China', price: '17.27' },
  { component: 'Kickstand', manufacturer: 'Sunmei', model: 'StableStand-759', productionTime: '62', country: 'Taiwan', price: '10.36' },
  { component: 'Saddle', manufacturer: 'DDK', model: 'UltraComfort-647', productionTime: '59', country: 'Taiwan', price: '24.18' },
  { component: 'LCD Display', manufacturer: 'King Meter', model: 'Component-881', productionTime: '38', country: 'Taiwan', price: '13.81' },
  { component: 'Motor Set', manufacturer: 'Vulz', model: 'PowerDrive-557', productionTime: '44', country: 'China', price: '241.76' },
  { component: 'Charger', manufacturer: 'Samsung', model: 'FastCharge-168', productionTime: '84', country: 'Japan', price: '34.54' },
  { component: 'Batteries Set', manufacturer: 'Samsung', model: 'LongRange-940', productionTime: '36', country: 'Korea', price: '276.3' },
  { component: 'Box, Carton', manufacturer: 'Boxable', model: 'Component-153', productionTime: '73', country: 'Japan', price: '13.81' },
  { component: 'Assembly', manufacturer: 'Vulz', model: 'FactoryFit-117', productionTime: '38', country: 'Japan', price: '69.07' }
];

// Urban Commuter BOM (kept for reference)
export const URBAN_COMMUTER_COMPONENTS: PrefabComponent[] = [
  { component: 'FRAME', manufacturer: 'CityRide', model: 'URB-101', productionTime: '50', country: 'Taiwan', price: '110.50', productionTimeDays: '65' },
  { component: 'FORK', manufacturer: 'CityRide', model: 'URB-102', productionTime: '40', country: 'Taiwan', price: '65.25', productionTimeDays: '60' },
  { component: 'HEADSET', manufacturer: 'CityTech', model: 'CT-200', productionTime: '25', country: 'Japan', price: '20.15', productionTimeDays: '35' },
  { component: 'HANDLEBAR', manufacturer: 'UrbanGrip', model: 'UG-350', productionTime: '45', country: 'Taiwan', price: '25.75', productionTimeDays: '55' },
  { component: 'STEM', manufacturer: 'UrbanGrip', model: 'UG-351', productionTime: '30', country: 'Taiwan', price: '18.90', productionTimeDays: '45' },
  { component: 'GRIP', manufacturer: 'ComfortGrip', model: 'CG-010', productionTime: '30', country: 'China', price: '9.95', productionTimeDays: '25' },
  { component: 'DISC BRAKE', manufacturer: 'StopFast', model: 'SF-100', productionTime: '55', country: 'Germany', price: '42.50', productionTimeDays: '70' },
  { component: 'SHIFTER', manufacturer: 'SHIMANO', model: 'SH-500', productionTime: '60', country: 'Japan', price: '30.00', productionTimeDays: '60' },
  { component: 'PEDAL', manufacturer: 'PedalPro', model: 'PP-200', productionTime: '40', country: 'Taiwan', price: '15.25', productionTimeDays: '30' },
  { component: 'SADDLE', manufacturer: 'ComfortSit', model: 'CS-101', productionTime: '45', country: 'Italy', price: '35.00', productionTimeDays: '50' },
  { component: 'SEATPOST', manufacturer: 'UrbanGrip', model: 'UG-352', productionTime: '35', country: 'Taiwan', price: '19.50', productionTimeDays: '45' },
  { component: 'MOTOR', manufacturer: 'PowerDrive', model: 'PD-500', productionTime: '65', country: 'Germany', price: '280.00', productionTimeDays: '75' },
  { component: 'BATTERY', manufacturer: 'PowerCell', model: 'PC-400', productionTime: '70', country: 'South Korea', price: '320.00', productionTimeDays: '80' }
];

// Mapping prefab IDs to their component lists
export const PREFAB_COMPONENTS: PrefabComponentsMap = {
  // Fix the ID mappings to match the actual bike template IDs
  'stepthru_e_gravel': STEP_THRU_COMPONENTS,
  'vulz_e_gravel': STEP_THRU_COMPONENTS,  // 700c / Vulz E-Bike
  'Urban Bike': URBAN_COMMUTER_COMPONENTS,
  'Classic road bike': CLASSIC_ROAD_BIKE_COMPONENTS,  // Classic Road Bike
  'Canyon Bike': DISC_BRAKE_ROAD_BIKE_COMPONENTS  // Disc Brake Road Bike / Canyon
};

// Helper function to get components for a prefab by ID
export const getPrefabComponents = (prefabId: string): PrefabComponent[] => {
  return PREFAB_COMPONENTS[prefabId] || [];
}; 