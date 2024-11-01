import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [
  // Geometry Panel Parameters
  {
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
    value: '532',
    min: 450,
    max: 700,
    unit: 'mm',
  },
  {
    id: '09aa3a63-8d46-4b67-b87b-b4b869e5befd',
    name: 'Seat tube angle',
    category: 'geometry',
    type: 'slider',
    value: '75.0',
    min: 69,
    max: 75,
    unit: '°',
  },
  {
    id: 'd1f726c0-fb21-4f15-8f11-06ba73e0f3a9',
    name: 'BB Drop',
    category: 'geometry',
    type: 'slider',
    value: '70',
    min: 60,
    max: 80,
    unit: 'mm',
  },
  {
    id: '64ecfdab-39bb-4d5c-a11d-b98690404bf9',
    name: 'Effective Top tube length',
    category: 'geometry',
    type: 'slider',
    value: '610',
    min: 500,
    max: 650,
    unit: 'mm',
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
    id: 'eea4374e-a513-4f61-924a-f8175351fa8b',
    name: 'Stack Height',
    category: 'geometry',
    type: 'slider',
    value: '570',
    min: 500,
    max: 650,
    unit: 'mm',
  },
  {
    id: '6eac979f-e146-4021-8439-0cf495cf0431',
    name: 'Tyre Diameter',
    category: 'geometry',
    type: 'dropdown',
    value: '1',
    options: [
      { label: '26 inch', value: '0' },
      { label: '27.5 inch', value: '1' },
      { label: '29 inch', value: '2' },
    ],
  },
  {
    id: '815b0eaf-cd38-4638-8bde-5f6ac27739d0',
    name: 'Chain stay length',
    category: 'geometry',
    type: 'slider',
    value: '450',
    min: 400,
    max: 500,
    unit: 'mm',
  },
  {
    id: '98f0a457-b4e5-44ea-8e55-8577941d49ad',
    name: 'Head tube angle',
    category: 'geometry',
    type: 'slider',
    value: '72.0',
    min: 69,
    max: 75,
    unit: '°',
  },
  {
    id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
    name: 'Show Only Frame',
    category: 'geometry',
    type: 'checkbox',
    value: 'false',
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
    id: '7920797e-f807-4b15-b964-d97d9a9d58a2',
    name: 'Rim Width',
    category: 'geometry',
    type: 'slider',
    value: '1',
    min: 0.5,
    max: 2,
    unit: 'inches',
  },
  {
    id: '84702365-8cf8-4a43-afea-ab8e973d0f31',
    name: 'Pipe Diameter',
    category: 'geometry',
    type: 'slider',
    value: '48',
    min: 30,
    max: 60,
    unit: 'mm',
  },
  {
    id: 'a610804a-e676-49d0-8504-8e9466079e63',
    name: 'HEAD TUBE - Parameter B',
    category: 'geometry',
    type: 'slider',
    value: '5',
    min: 0,
    max: 10,
  },
  {
    id: '9c9a4e2d-cf1b-4474-b97d-aa76db26aafb',
    name: 'HEAD TUBE - Parameter C',
    category: 'geometry',
    type: 'slider',
    value: '10',
    min: 0,
    max: 20,
  },
  // Surface Panel Parameters
  {
    id: '56fa370a-8b83-4bd6-9797-f1e0897faac3',
    name: 'Tube color',
    category: 'surface',
    type: 'dropdown',
    value: '5',
    options: [
      { label: 'Black', value: '0' },
      { label: 'Gunmetal Grey', value: '1' },
      { label: 'Light Grey', value: '2' },
      { label: 'Army Green', value: '3' },
      { label: 'Teal', value: '4' },
      { label: 'Racing Red', value: '5' },
      { label: 'Baby Blue', value: '6' },
      { label: 'White', value: '7' },
      { label: 'Raw Aluminium', value: '8' },
      { label: 'Nutex', value: '9' },
    ],
  },
  {
    id: '62738150-ac17-418d-81ab-2876c45a413e',
    name: 'Top tube shape',
    category: 'surface',
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
    id: '74a9482f-e1bb-4b5e-9dff-a182a2b738b4',
    name: 'HandleBar Metallic Factor',
    category: 'surface',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  {
    id: '748ef0ef-9e2c-493e-ad09-d908404f289c',
    name: 'Bottle Colour',
    category: 'surface',
    type: 'color',
    value: '0x576973ff',
  },
  {
    id: '39881cea-9d0d-4879-99ee-6ed1d4c0574d',
    name: 'HandleBar Colour',
    category: 'surface',
    type: 'color',
    value: '0x363636ff',
  },
  {
    id: '34db677e-094f-4ca3-ba28-1ffa0c21c9c0',
    name: 'Crank Colour',
    category: 'surface',
    type: 'color',
    value: '0x2b2b2bff',
  },
  {
    id: '251d59ff-4c5d-4a33-94bb-31fafb7df894',
    name: 'Crank Metallic Factor',
    category: 'surface',
    type: 'slider',
    value: '0.7',
    min: 0,
    max: 1,
  },
  {
    id: 'ea2fe86c-71b3-459e-8bd3-e056db0b5e8d',
    name: 'Seat Colour',
    category: 'surface',
    type: 'color',
    value: '0x262626ff',
  },
  {
    id: 'c0a88d51-ae73-40f8-bc5d-97ccb3e605d0',
    name: 'Crank Roughness Factor',
    category: 'surface',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  {
    id: 'cb15151e-0bb2-4895-b40d-3184fe772fe1',
    name: 'Swatch',
    category: 'surface',
    type: 'color',
    value: '0x878787ff',
  },
  {
    id: '94f3a489-2284-42b9-875d-554a28bfd7c2',
    name: 'RoughnessFactor',
    category: 'surface',
    type: 'slider',
    value: '0.0',
    min: 0,
    max: 1,
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
    id: '0442b7b5-8dac-4cce-95e4-dddf8b934171',
    name: 'Frame Roughness Factor',
    category: 'surface',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  {
    id: '9e898618-6cce-4a45-bc4d-ea7bbd9af54f',
    name: 'Down tube shape',
    category: 'surface',
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
  // Hardware Panel Parameters
  {
    id: '5422df73-826b-4478-88d3-016cf74499f6',
    name: 'Rear DropOut Type',
    category: 'hardware',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Quick Release', value: '0' },
      { label: 'Bolt Through', value: '1' },
    ],
  },
  {
    id: '03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1',
    name: 'Seat Tube Water Bottle',
    category: 'hardware',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Yes', value: '0' },
      { label: 'No', value: '1' },
    ],
  },
  {
    id: '44d398e1-f057-4d3f-8446-2f8e38703b86',
    name: 'Down Tube Water Bottle',
    category: 'hardware',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Yes', value: '0' },
      { label: 'No', value: '1' },
    ],
  },
  {
    id: '9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d',
    name: 'Seat Tube Bottle Placement',
    category: 'hardware',
    type: 'slider',
    value: '0.5',
    min: 0,
    max: 1,
  },
  {
    id: 'fb34be77-f67f-4ee9-989e-c8baf24eacf1',
    name: 'DiskBrake Mount Type',
    category: 'hardware',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Type A', value: '0' },
      { label: 'Type B', value: '1' },
    ],
  },
  // Other Parameters
  {
    id: '8620773c-238b-4627-ba8e-2d1c0995b089',
    name: 'Client name',
    category: 'other',
    type: 'text',
    value: 'your name',
  },
  {
    id: '2003e7ab-bfba-4449-9e23-93fb09ca9614',
    name: 'Schema',
    category: 'other',
    type: 'dropdown',
    value: '1',
    options: [
      { label: 'Schema A', value: '0' },
      { label: 'Schema B', value: '1' },
    ],
  },
  {
    id: '0c908c83-7337-42f5-896a-005f9b10f33c',
    name: 'File Format',
    category: 'other',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'Format X', value: '0' },
      { label: 'Format Y', value: '1' },
    ],
  },
  {
    id: '3afee937-c9ca-487d-b912-165b4be705be',
    name: 'End Of Line',
    category: 'other',
    type: 'dropdown',
    value: '0',
    options: [
      { label: 'LF', value: '0' },
      { label: 'CRLF', value: '1' },
    ],
  },
  {
    id: 'ef670dec-8b9c-4f01-8dec-072095cceb5a',
    name: 'Export Rhino Object names',
    category: 'other',
    type: 'checkbox',
    value: '0',
  },
  {
    id: '4580fa6a-960b-4fa0-800d-8d08820a72c4',
    name: 'Format',
    category: 'other',
    type: 'dropdown',
    value: '1',
    options: [
      { label: 'Format 1', value: '0' },
      { label: 'Format 2', value: '1' },
    ],
  },
];