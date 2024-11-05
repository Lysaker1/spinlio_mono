import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [
  {
    id: '7088e5a1-f07f-49c3-b1f6-98e74ae3734c',
    name: 'Show Dimensions',
    category: 'geometry',
    type: 'checkbox',
    value: 'false'
  },
  {
    id: 'beff3154-f6bd-494e-998b-13f9660e9506',
    name: 'Seat tube length',
    category: 'geometry',
    type: 'slider',
    value: '620',
    min: 450,
    max: 620,
    unit: 'mm'
  },
  {
    id: '09aa3a63-8d46-4b67-b87b-b4b869e5befd',
    name: 'Seat tube angle',
    category: 'geometry',
    type: 'slider',
    value: '70.0',
    min: 70,
    max: 75,
    unit: '°'
  },
  {
    id: 'd1f726c0-fb21-4f15-8f11-06ba73e0f3a9',
    name: 'BB Drop',
    category: 'geometry',
    type: 'slider',
    value: '75',
    min: 20,
    max: 75,
    unit: 'mm'
  },
  {
    id: '64ecfdab-39bb-4d5c-a11d-b98690404bf9',
    name: 'Effective Top tube length',
    category: 'geometry',
    type: 'slider',
    value: '589',
    min: 530,
    max: 610,
    unit: 'mm'
  },
  {
    id: '33ab6af5-42db-494e-834e-0f652a911a85',
    name: 'Rear Wheel Spacing',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      { label: '130mm', value: '0' },
      { label: '142mm', value: '1' }
    ]
  },
  {
    id: 'eea4374e-a513-4f61-924a-f8175351fa8b',
    name: 'Stack Height',
    category: 'geometry',
    type: 'slider',
    value: '570',
    min: 570,
    max: 650,
    unit: 'mm'
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
      { label: '700', value: '1' }
    ]
  },
  {
    id: '815b0eaf-cd38-4638-8bde-5f6ac27739d0',
    name: 'Chain stay length',
    category: 'geometry',
    type: 'slider',
    value: '467',
    min: 450,
    max: 480,
    unit: 'mm'
  },
  {
    id: '98f0a457-b4e5-44ea-8e55-8577941d49ad',
    name: 'Head tube angle',
    category: 'geometry',
    type: 'slider',
    value: '72.0',
    min: 65,
    max: 72,
    unit: '°'
  },
  {
    id: '7dc55512-0324-4e59-8686-2c97488645ca',
    name: 'Dimension_color',
    category: 'accessories',
    type: 'color',
    value: '0x000000ff'
  },
  {
    id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
    name: 'Show Only Frame',
    category: 'geometry',
    type: 'checkbox',
    value: 'false'
  },
  {
    id: '748ef0ef-9e2c-493e-ad09-d908404f289c',
    name: 'Bottle Colour',
    category: 'accessories',
    type: 'color',
    value: '0x76808285'
  },
  {
    id: '9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d',
    name: 'seatTube_bottlePlacement',
    category: 'accessories',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1
  },
  {
    id: '03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1',
    name: 'Seat Tube Water Bottle',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      { label: 'Yes', value: '0' },
      { label: 'No', value: '1' }
    ]
  },
  {
    id: '44d398e1-f057-4d3f-8446-2f8e38703b86',
    name: 'Down Tube Water Bottle',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Yes', value: '0' },
      { label: 'No', value: '1' }
    ]
  },
  {
    id: 'cc667ffa-3487-46e8-8b36-48ae1cd78efa',
    name: 'Head tube Diameter',
    value: '0',
    category: 'tubing',
    type: 'dropdown',
    options: [
      { label: '1 1/2"', value: '0' },
      { label: '1 1/8"', value: '1' }
    ]
  },
  {
    id: '4ec438ea-a490-434b-82ea-88f84f67f6b7',
    name: 'Down Tube Diameter',
    value: '50',
    category: 'tubing',
    type: 'slider',
    min: 30,
    max: 60,
    unit: 'mm'
  },
  {
    id: '39881cea-9d0d-4879-99ee-6ed1d4c0574d',
    name: 'HandleBar Colour',
    category: 'accessories',
    type: 'color',
    value: '0x363636ff'
  },
  // {
  //   id: '74a9482f-e1bb-4b5e-9dff-a182a2b738b4',
  //   name: 'HandleBar Metallic Factor',
  //   category: 'accessories',
  //   type: 'dropdown',
  //   value: '0.5',
  //   options: [
  //     { label: 'matte', value: '0' },
  //     { label: 'mid', value: '0.5' },
  //     { label: 'glossy', value: '1' }
  //   ]
  // },
  {
    id: 'ea2fe86c-71b3-459e-8bd3-e056db0b5e8d',
    name: 'Seat Colour',
    category: 'accessories',
    type: 'color',
    value: '0x262626ff'
  },
  // {
  //   id: '34db677e-094f-4ca3-ba28-1ffa0c21c9c0',
  //   name: 'Crank Colour',
  //   category: 'accessories',
  //   type: 'color',
  //   value: '0x2b2b2bff'
  // },
  // {
  //   id: '251d59ff-4c5d-4a33-94bb-31fafb7df894',
  //   name: 'Crank Metallic Factor',
  //   category: 'accessories',
  //   type: 'slider',
  //   value: '0.3',
  //   min: 0,
  //   max: 1
  // },
  // {
  //   id: 'c0a88d51-ae73-40f8-bc5d-97ccb3e605d0',
  //   name: 'Crank Roughness Factor',
  //   category: 'accessories',
  //   type: 'slider',
  //   value: '0.5',
  //   min: 0,
  //   max: 1
  // },
  {
    id: '5422df73-826b-4478-88d3-016cf74499f6',
    name: 'Rear DropOut Type',
    category: 'accessories',
    type: 'grid',
    value: '0',
    options: [
      { label: 'Quick Release', value: '0' },
      { label: 'Bolt Through', value: '1' }
    ]
  },
  {
    id: '7920797e-f807-4b15-b964-d97d9a9d58a2',
    name: 'Rim Width',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      { label: '23C', value: '0' },
      { label: '28C', value: '1' }
    ],
    tag: 'man'
  },
  {
    id: 'cb15151e-0bb2-4895-b40d-3184fe772fe1',
    name: 'Swatch',
    category: 'accessories',
    type: 'color',
    value: '0xbababaff'
  },
  {
    id: '94f3a489-2284-42b9-875d-554a28bfd7c2',
    name: 'RoughnessFactor',
    category: 'accessories',
    type: 'dropdown',
    value: '0.0',
    options: [
      { label: 'matte', value: '0' },
      { label: 'glossy', value: '1' }
    ]
  },
  {
    id: 'fb34be77-f67f-4ee9-989e-c8baf24eacf1',
    name: 'DiskBreak Mount Type',
    category: 'accessories',
    type: 'grid',
    value: '0',
    options: [
      { label: 'Post Mount', value: '0' },
      { label: 'Flat Mount', value: '1' }
    ]
  },
  {
    id: '7935dece-7133-4678-a77e-a3dd54c8e114',
    name: 'Rim Depth',
    category: 'accessories',
    type: 'slider',
    value: '30',
    min: 8,
    max: 30,
    tag: 'man',
    unit: 'mm'
  },
  {
    id: '2003e7ab-bfba-4449-9e23-93fb09ca9614',
    name: 'Schema',
    value: '1',
    category: 'other',
    type: 'text'
  },
  {
    id: '8620773c-238b-4627-ba8e-2d1c0995b089',
    name: 'Client name',
    category: 'client information',
    type: 'text',
    value: 'your name'
  },
  {
    id: '62738150-ac17-418d-81ab-2876c45a413e',
    name: 'Down tube shape',
    category: 'tubing',
    type: 'grid',
    value: '5',
    options: [
      { label: 'Oval', value: '0' },
      { label: 'Capsule', value: '1' },
      { label: 'Hexagon', value: '2' },
      { label: 'Circle', value: '3' },
      { label: 'Triangle', value: '4' },
      { label: 'Square', value: '5' }
    ]
  },
  {
    id: '972de871-83ed-4243-9510-f4c2ab3228a3',
    name: 'Front bracket width',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      { label: '100mm', value: '0' },
      { label: '110mm', value: '1' }
    ]
  },
  {
    id: '9e898618-6cce-4a45-bc4d-ea7bbd9af54f',
    name: 'Top tube shape',
    category: 'tubing',
    type: 'grid',
    value: '0',
    options: [
      { label: 'Oval', value: '0' },
      { label: 'Capsule', value: '1' },
      { label: 'Hexagon', value: '2' },
      { label: 'Circle', value: '3' },
      { label: 'Triangle', value: '4' },
      { label: 'Square', value: '5' }
    ]
  },
  {
    id: '84702365-8cf8-4a43-afea-ab8e973d0f31',
    name: 'Top Tube Diameter',
    category: 'tubing',
    type: 'slider',
    value: '30',
    min: 30,
    max: 60,
    unit: 'mm'
  },
  {
    id: '0c908c83-7337-42f5-896a-005f9b10f33c',
    name: 'File Format',
    value: '0',
    category: 'other',
    type: 'text'
  },
  {
    id: '3afee937-c9ca-487d-b912-165b4be705be',
    name: 'End Of Line',
    value: '0',
    category: 'other',
    type: 'text'
  },
  {
    id: 'ef670dec-8b9c-4f01-8dec-072095cceb5a',
    name: 'Export Rhino Object names',
    value: '0',
    category: 'other',
    type: 'text'
  },
  {
    id: '9e546ccd-7767-458c-80f9-9d17be0fc957',
    name: 'Paint Finish',
    category: 'tubing',
    type: 'dropdown',
    value: '0.5',
    options: [
      { label: 'matte', value: '0' },
      { label: 'mid', value: '0.5' },
      { label: 'glossy', value: '1' }
    ]
  },
  {
    id: '0442b7b5-8dac-4cce-95e4-dddf8b934171',
    name: 'Frame Roughness Factor',
    category: 'accessories',
    type: 'grid',
    value: '0.5',
    options: [
      { label: 'matte', value: '0' },
      { label: 'mid', value: '0.5' },
      { label: 'glossy', value: '1' }
    ]
  },
  {
    id: '56fa370a-8b83-4bd6-9797-f1e0897faac3',
    name: 'Tube color',
    category: 'tubing',
    type: 'color',
    value: '5'
  },
  // {
  //   id: '677efb6e-49ff-4e40-9619-01cece75a222',
  //   name: 'Human Height',
  //   category: 'accessories',
  //   type: 'slider',
  //   value: '1800',
  //   min: 0,
  //   max: 2500,
  //   unit: 'mm'
  // },
  // {
  //   id: '93bc5629-83b5-406c-a808-e33522171489',
  //   name: 'silhouette_color',
  //   category: 'accessories',
  //   type: 'color',
  //   value: '0xc6c6c6ff'
  // },
  {
    id: '55f308a4-1f48-4319-93c2-19fc11f04865',
    name: 'Pedestal_color',
    value: '0x000000ff',
    category: 'accessories',
    type: 'color'
  },
  {
    id: 'c1ed3412-a8ca-4b21-ba9d-cd16ac8a7021',
    name: 'HandleBar Colour',
    value: '0x918484ff',
    category: 'accessories',
    type: 'color'
  },
  {
    id: '2c1f868d-5b6f-4eb0-8e59-4ef5e52e2f8c',
    name: 'HandleGrip Roughness Factor',
    value: '1.0',
    category: 'accessories',
    type: 'slider',
    min: 0,
    max: 1
  },
  {
    id: '95dcfa93-c88e-4804-a541-3e441d4f4d63',
    name: 'Client Email',
    value: 'yourname@email.com',
    category: 'other',
    type: 'text'
  }
];
