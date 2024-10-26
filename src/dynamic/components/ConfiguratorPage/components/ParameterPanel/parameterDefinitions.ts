import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [
    // Geometry Panel Parameters
    {
      id: 'f108eb45-6305-4ee7-8840-328004938ac6',
      name: 'Seat tube angle',
      type: 'slider',
      value: '71.5',
      min: 69,
      max: 75,
      unit: '°'
    },
    {
      id: '28dbd19d-3f39-48a4-b143-9d357b413ce0',
      name: 'Angle',
      type: 'slider',
      value: '11',
      min: 8,
      max: 20,
      unit: '°'
    },
    {
      id: 'ac5a259d-c2b7-45c0-af16-4a5782b21f1c',
      name: 'Head tube angle',
      type: 'slider',
      value: '74.0',
      min: 69,
      max: 75,
      unit: '°'
    },
    {
      id: 'e42f397c-eb07-434a-9029-d394179bf2f1',
      name: 'Seat tube length',
      type: 'slider',
      value: '462',
      min: 450,
      max: 700,
      unit: 'mm'
    },
    {
      id: '398b031c-826b-481e-9cf8-8628f5d01511',
      name: 'Chain stay length',
      type: 'slider',
      value: '401',
      min: 400,
      max: 420,
      unit: 'mm'
    },
    {
      id: 'e7e25729-2b9e-458a-9bb1-16e0fa675a7c',
      name: 'Top tube length',
      type: 'slider',
      value: '571',
      min: 500,
      max: 600,
      unit: 'mm'
    },
    {
      id: 'e81fe405-a176-41aa-b5f9-7d702e2db52a',
      name: 'Head tube length',
      type: 'slider',
      value: '179',
      min: 160,
      max: 200,
      unit: 'mm'
    },
    {
      id: '38985f41-4db6-448e-b1a0-6689bd26beae',
      name: 'Front bracket width',
      type: 'dropdown',
      value: '0',
      options: [
        { label: '100mm', value: '0' },
        { label: '110mm', value: '1' },
      ],
    },
    {
      id: '33a9c8f9-8ef4-410e-a2c1-36abb60e4e49',
      name: 'Back bracket width',
      type: 'dropdown',
      value: '0',
      options: [
        { label: '130mm', value: '0' },
        { label: '142mm', value: '1' },
      ],
    },
    // Surface Panel Parameters
    {
      id: '3631ea0d-6d4c-49c2-b998-2c01a7797a01',
      name: 'Tube color',
      type: 'dropdown',
      value: '7', // Default to white (7)
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
      id: '45e7e66b-7c42-4ac2-bef7-596dd49d4bd5',
      name: 'Top tube shape',
      type: 'dropdown',
      value: '2',
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
      id: 'e55e2d6f-e34a-4a13-bed3-3ab433635dcc',
      name: 'Front water bottle',
      type: 'dropdown',
      value: '0',
      options: [
        { label: 'Yes', value: '0' },
        { label: 'No', value: '1' },
      ],
    },
    {
      id: 'b26cf10f-9e0f-4dd0-a2eb-387eb3fc7f51',
      name: 'Rear water bottle',
      type: 'dropdown',
      value: '0',
      options: [
        { label: 'Yes', value: '0' },
        { label: 'No', value: '1' },
      ],
    },
    {
      id: 'f63729ec-72df-423c-adbc-7b2a82051f34',
      name: 'Rear dropouts',
      type: 'dropdown',
      value: '1',
      options: [
        { label: 'Quick Release', value: '0' },
        { label: 'Bolt Through', value: '1' },
      ],
    },
  ];
