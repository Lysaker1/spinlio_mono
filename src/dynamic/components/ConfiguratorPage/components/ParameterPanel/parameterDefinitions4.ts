import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [{
    id: '7088e5a1-f07f-49c3-b1f6-98e74ae3734c',
    name: 'Show Dimensions',
    category: 'geometry',
    type: 'checkbox',
    value: 'false',
  },
  {
    id: 'beff3154-f6bd-494e-998b-13f9660e9506',
    name: 'Seat tube length',
    category: 'geometry',
    type: 'slider',
    value: '589',
    min: 450,
    max: 620,
    unit: 'mm',
  },
  {
    id: '64ecfdab-39bb-4d5c-a11d-b98690404bf9',
    name: 'Effective Top tube length',
    category: 'geometry',
    type: 'slider',
    value: '601',
    min: 530,
    max: 610,
    unit: 'mm',
  },
  {
    id: '09aa3a63-8d46-4b67-b87b-b4b869e5befd',
    name: 'Seat tube angle',
    category: 'geometry',
    type: 'slider',
    value: '75.0',
    min: 70,
    max: 75,
    unit: '°',
  },
  {
    id: 'd1f726c0-fb21-4f15-8f11-06ba73e0f3a9',
    name: 'BB Drop',
    category: 'geometry',
    type: 'slider',
    value: '25',
    min: 20,
    max: 75,
    unit: 'mm',
  },
  {
    id: '33ab6af5-42db-494e-834e-0f652a911a85',
    name: 'Rear Wheel Spacing',
    category: 'geometry',
    type: 'dropdown',
    value: '0',
    options: [
      { label: '130mm', value: '0' },
      { label: '142mm', value: '1' },
    ],
  },
  {
    id: '6eac979f-e146-4021-8439-0cf495cf0431',
    name: 'Tire Diameter',
    category: 'accessories',
    type: 'dropdown',
    tag: 'man',
    value: '1',
    options: [
      { label: '600', value: '0' },
      { label: '700', value: '1' },
    ],
  },
  {
    id: '815b0eaf-cd38-4638-8bde-5f6ac27739d0',
    name: 'Chain stay length',
    category: 'geometry',
    type: 'slider',
    value: '450',
    min: 450,
    max: 480,
    unit: 'mm',
  },
  {
    id: '98f0a457-b4e5-44ea-8e55-8577941d49ad',
    name: 'Head tube angle',
    category: 'geometry',
    type: 'slider',
    value: '72.0',
    min: 65,
    max: 72,
    unit: '°',
  },
  {
    id: 'a610804a-e676-49d0-8504-8e9466079e63',
    name: 'HEAD TUBE - Parameter ????',
    category: 'geometry',
    type: 'slider',
    value: '5',
    min: 0,
    max: 100,
  },
  {
    id: '9c9a4e2d-cf1b-4474-b97d-aa76db26aafb',
    name: 'HEAD TUBE - Parameter ????',
    category: 'geometry',
    type: 'slider',
    value: '10',
    min: 0,
    max: 100,
  },
  {
    id: 'eea4374e-a513-4f61-924a-f8175351fa8b',
    name: 'Stack Height',
    category: 'geometry',
    type: 'slider',
    value: '570',
    min: 570,
    max: 650,
    unit: 'mm',
  },
  {
    id: '84702365-8cf8-4a43-afea-ab8e973d0f31',
    name: 'Tube Diameter',
    category: 'tubing',
    type: 'slider',
    value: '53',
    min: 30,
    max: 60,
    unit: 'mm',
  },
  // Surface Panel Parameters
  {
    id: '39881cea-9d0d-4879-99ee-6ed1d4c0574d',
    name: 'HandleBar color',
    category: 'tubing',
    type: 'color',
    value: '0x363636ff',
  },
  {
    id: 'ea2fe86c-71b3-459e-8bd3-e056db0b5e8d',
    name: 'Seat color',
    category: 'tubing',
    type: 'color',
    value: '0x262626ff',
  },
  {
    id: '34db677e-094f-4ca3-ba28-1ffa0c21c9c0',
    name: 'Crank color',
    category: 'tubing',
    type: 'color',
    value: '0x2b2b2bff',
  },{
    id: '56fa370a-8b83-4bd6-9797-f1e0897faac3',
    name: 'Frame color',
    category: 'tubing',
    type: 'color',
    value: '0x000000ff',
  },
  {
    id: '62738150-ac17-418d-81ab-2876c45a413e',
    name: 'Down tube shape',
    category: 'tubing',
    type: 'dropdown',
    value: '5',
    options: [
      { label: 'Oval', value: '0' },
      { label: 'Capsule', value: '1' },
      { label: 'Hexagon', value: '2' },
      { label: 'Circle', value: '3' },
      { label: 'Triangle', value: '4' },
      { label: 'Square', value: '5' },
    ],
  },
  {
    id: '9e898618-6cce-4a45-bc4d-ea7bbd9af54f ',
    name: 'Top tube shape',
    category: 'tubing',
    type: 'dropdown',
    value: '5',
    options: [
      { label: 'Oval', value: '0' },
      { label: 'Capsule', value: '1' },
      { label: 'Hexagon', value: '2' },
      { label: 'Circle', value: '3' },
      { label: 'Triangle', value: '4' },
      { label: 'Square', value: '5' },
    ],
  },
  {
    id: '84702365-8cf8-4a43-afea-ab8e973d0f31',
    name: 'Pipe Diameter',
    category: 'tubing',
    type: 'slider',
    value: '53',
    min: 30,
    max: 60,
    unit: 'mm',
  },
 
  {
    id: '9e546ccd-7767-458c-80f9-9d17be0fc957',
    name: 'Frame Metallic Factor',
    category: 'surface',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  {
    id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
    name: 'Show Only Frame',
    category: 'accessories',
    type: 'checkbox',
    value: 'false',
  },
  {
    id: '0442b7b5-8dac-4cce-95e4-dddf8b934171',
    name: 'Frame Roughness Factor',
    category: 'surface',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  // Hardware Panel Parameters
  {
    id: '5422df73-826b-4478-88d3-016cf74499f6',
    name: 'Rear Drop Out',
    category: 'accessories',
    type: 'grid',
    value: '0',
    options: [
      { label: 'Quick Release', value: '0' },
      { label: 'Bolt Through', value: '1' },
    ],
  },
  {
    id: '972de871-83ed-4243-9510-f4c2ab3228a3',
    name: 'Front Wheel Spacing',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      { label: '100mm', value: '0' },
      { label: '110mm', value: '1' },
    ],
  },

  {
    id: '972de871-83ed-4243-9510-f4c2ab3228a3',
    name: 'Front bracket width',
    category: 'geometry',
    type: 'dropdown',
    value: '1',
    options: [
      { label: '100mm', value: '0' },
      { label: '110mm', value: '1' },
    ],
  },
  {
    id: '33ab6af5-42db-494e-834e-0f652a911a85',
    name: 'Rear bracket width',
    category: 'geometry',
    type: 'dropdown',
    value: '0',
    options: [
      { label: '130mm', value: '0' },
      { label: '142mm', value: '1' },
    ],
  },
  {
    id: '03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1',
    name: 'Seat Tube Water Bottle Mount',
    category: 'accessories', 
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Yes', value: '0' },
      { label: 'No', value: '1' },
    ],
  },
  {
    id: '44d398e1-f057-4d3f-8446-2f8e38703b86',
    name: 'Down Tube Water Bottle Mount',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      { label: 'Yes', value: '0' },
      { label: 'No', value: '1' },
    ],
  },
  {
    id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
    name: 'Show Components',
    category: 'accessories',
    type: 'checkbox',
    value: 'false',
  },
  {
    id: '9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d',
    name: 'Seat Tube Bottle Placement',
    category: 'accessories',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  {
    id: '99897423-82ba-44b0-adb0-c81f0ca3dccd',
    name: 'Radius ????',
    category: 'accessories',
    type: 'slider',
    value: '5',
    min: 0,
    max: 10,
  },
  {
    id: 'fb34be77-f67f-4ee9-989e-c8baf24eacf1',
    name: 'DiskBrake Mount Type',
    category: 'accessories',
    type: 'grid',
    value: '0',
    options: [
      { label: 'Post Mount', value: '0' },
      { label: 'Flat Mount', value: '1' },
    ],
  },
  // Additional Parameters
  {
    id: '7dc55512-0324-4e59-8686-2c97488645ca',
    name: 'Dimension Color',
    category: 'accessories',
    type: 'color',
    value: '#000000',
  },

  {
    id: '7935dece-7133-4678-a77e-a3dd54c8e114',
    name: 'Tire Rim Thickness',
    category: 'accessories',
    type: 'slider',
    value: '16',
    min: 8,
    max: 30,
    tag: 'man',
    unit: 'mm',
  },
  {
    id: '8620773c-238b-4627-ba8e-2d1c0995b089',
    name: 'Save As',
    category: 'client information',
    type: 'text',
    value: 'Bike Design',
  },

  {
    id: '7920797e-f807-4b15-b964-d97d9a9d58a2',
    name: 'Rim Width',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      { label: '23C', value: '0' },
      { label: '28C', value: '1' },
    ],
    tag: 'man',
  },
];