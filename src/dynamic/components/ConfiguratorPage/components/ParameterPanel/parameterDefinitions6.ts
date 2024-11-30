import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [
  // {
  //   id: '7088e5a1-f07f-49c3-b1f6-98e74ae3734c',
  //   name: 'Show Dimensions',
  //   category: 'geometry',
  //   type: 'checkbox',
  //   value: 'false'
  // },
  {
    id: 'eea4374e-a513-4f61-924a-f8175351fa8b',
    name: 'Stack height',
    category: 'geometry',
    type: 'slider',
    value: '560',
    min: 540,
    max: 580,
    unit: 'mm'
  },
  {
    id: '15c239d7-8130-41d2-8470-342335fcfb5f',
    name: 'Fork crown height',
    value: '12',
    category: 'geometry',
    type: 'slider',
    min: 12,
    max: 15,
    unit: 'mm'
  },
  {
    id: 'd1f726c0-fb21-4f15-8f11-06ba73e0f3a9',
    name: 'Bottom bracket drop',
    category: 'geometry',
    type: 'slider',
    value: '65',
    min: 65,
    max: 75,
    unit: 'mm'
  },
  {
    id: 'c4d4c978-5b58-49ce-a567-739894dc5d36',
    name: 'Top Tube Rear Width',
    value: '37',
    category: 'tubing',
    type: 'slider',
    min: 30,
    max: 48,
    unit: 'mm'
  },
  {
    id: '6bebc909-bc55-448c-b316-4d9acb7e1c9a',
    name: 'Frame finish',
    category: 'tubing',
    type: 'grid',
    value: '0',
    options: [
      {
        label: 'Matte',
        value: '0'
      },
      {
        label: 'Glossy',
        value: '1'
      },
      {
        label: 'Metallic',
        value: '2'
      }
    ]
  },
  {
    id: '972de871-83ed-4243-9510-f4c2ab3228a3',
    name: 'Front wheel spacing',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      {
        label: '100mm',
        value: '0'
      },
      {
        label: '110mm',
        value: '1'
      }
    ]
  },
  {
    id: '6eac979f-e146-4021-8439-0cf495cf0431',
    name: 'Tire diameter',
    category: 'accessories',
    type: 'dropdown',
    tag: 'man',
    value: '1',
    options: [
      {
        label: '600',
        value: '0'
      },
      {
        label: '700',
        value: '1'
      }
    ]
  },
  {
    id: '815b0eaf-cd38-4638-8bde-5f6ac27739d0',
    name: 'Chain stay length',
    category: 'geometry',
    type: 'slider',
    value: '444',
    min: 420,
    max: 450,
    unit: 'mm'
  },
  {
    id: 'beff3154-f6bd-494e-998b-13f9660e9506',
    name: 'Seat tube length',
    category: 'geometry',
    type: 'slider',
    value: '597',
    min: 500,
    max: 620,
    unit: 'mm'
  },
  {
    id: '98f0a457-b4e5-44ea-8e55-8577941d49ad',
    name: 'Head tube angle',
    category: 'geometry',
    type: 'slider',
    value: '72.1',
    min: 72.0,
    max: 73.0,
    unit: '°',
    configuratorTypes: ['default']

  },
  {
    id: '98f0a457-b4e5-44ea-8e55-8577941d49ad',
    name: 'Head tube angle',
    category: 'geometry',
    type: 'slider',
    value: '70.0',
    min: 70.0,
    max: 74.0,
    unit: '°',
    configuratorTypes: ['vulz']

  },
  {
    id: '64ecfdab-39bb-4d5c-a11d-b98690404bf9',
    name: 'Top tube length',
    category: 'geometry',
    type: 'slider',
    value: '548',
    min: 535,
    max: 555,
    unit: 'mm',
    configuratorTypes: ['default']
  },
  {
    id: '64ecfdab-39bb-4d5c-a11d-b98690404bf9',
    name: 'Effective top tube length',
    category: 'geometry',
    type: 'slider',
    value: '620',
    min: 535,
    max: 620,
    unit: 'mm',
    configuratorTypes: ['vulz']
  },
  {
    id: '09aa3a63-8d46-4b67-b87b-b4b869e5befd',
    name: 'Seat tube angle',
    category: 'geometry',
    type: 'slider',
    value: '74.3',
    min: 72.5,
    max: 75,
    unit: '°'
  },
  {
    id: '3902e965-6a81-4d91-a8c0-e65209a882a3',
    name: 'Rear-Triangle Tubing Diameter',
    value: '16',
    category: 'geometry',
    type: 'slider',
    min: 15,
    max: 40,
    unit: 'mm'
  },
  {
    id: '4ec438ea-a490-434b-82ea-88f84f67f6b7',
    name: 'Down Tube Front Width',
    value: '38',
    category: 'tubing',
    type: 'slider',
    min: 30,
    max: 50,
    unit: 'mm',
    configuratorTypes: ['default']
  },
  // {
  //   id: '7dc55512-0324-4e59-8686-2c97488645ca',
  //   name: 'Dimension color',
  //   category: 'accessories',
  //   type: 'color',
  //   value: '0xdb663bff'
  // },
  {
    id: 'fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1',
    name: 'Fork crown width',
    value: '25.91',
    category: 'geometry',
    type: 'slider',
    min: 20,
    max: 35,
    unit: 'mm'
  },
  {
    id: 'a250e630-2572-402a-af6e-e36136793a42',
    name: 'Fork width at axel',
    value: '9.0',
    category: 'geometry',
    type: 'slider',
    min: 8,
    max: 20,
    unit: 'mm'
  },
  {
    id: '748ef0ef-9e2c-493e-ad09-d908404f289c',
    name: 'Bottle color',
    category: 'accessories',
    type: 'color',
    value: '0x76808285',
    configuratorTypes: ['default']
  },
  {
    id: 'b5bf6f12-a078-4417-a4ae-d2049807178c',
    name: 'Show only frame',
    category: 'geometry',
    type: 'checkbox',
    value: 'false'
  },
  // {
  //   id: 'ac947279-5f74-46ec-93c6-a3fdac0a9eb0',
  //   name: 'Show Only Fork',
  //   value: 'false',
  //   category: 'accessories',
  //   type: 'checkbox'
  // },
  {
    id: '9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d',
    name: 'Seat tube bottle placement',
    category: 'accessories',
    type: 'slider',
    value: '0.5',
    min: 0.0,
    max: 1.0
  },
  {
    id: '03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1',
    name: 'Seat tube water bottle',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      {
        label: 'Yes',
        value: '0'
      },
      {
        label: 'No',
        value: '1'
      }
    ]
  },
  {
    id: '44d398e1-f057-4d3f-8446-2f8e38703b86',
    name: 'Down tube water bottle',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      {
        label: 'Yes',
        value: '0'
      },
      {
        label: 'No',
        value: '1'
      }
    ],
    configuratorTypes: ['default']
  },
  {
    id: '00d82c20-556f-4710-bff6-84e43117f680',
    name: 'Seat tube diameter',
    value: '31',
    category: 'geometry',
    type: 'slider',
    min: 28,
    max: 40,
    unit: 'mm',
    configuratorTypes: ['default']
  },
  {
    id: '00d82c20-556f-4710-bff6-84e43117f680',
    name: 'Seat tube diameter',
    value: '51',
    category: 'geometry',
    type: 'slider',
    min: 28,
    max: 55,
    unit: 'mm',
    configuratorTypes: ['vulz']
  },
  // {
  //   id: 'f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720',
  //   name: 'Down tube diameter',
  //   value: '0,0;0.1,0.5;0.5,0.9;1,1',
  //   category: 'geometry',
  //   type: 'graphmapper'
  // },
  {
    id: '62738150-ac17-418d-81ab-2876c45a413e',
    name: 'Down tube shape',
    category: 'tubing',
    type: 'grid',
    value: '4',
    options: [
      {
        label: 'Oval',
        value: '0'
      },
      {
        label: 'Capsule',
        value: '1'
      },
      {
        label: 'Hexagon',
        value: '2'
      },
      {
        label: 'Circle',
        value: '3'
      },
      {
        label: 'Triangle',
        value: '4'
      },
      {
        label: 'Square',
        value: '5'
      }
    ],
    configuratorTypes: ['default']
  },
  {
    id: 'ac762528-d92e-4d5a-8c48-e364432e61e9',
    name: 'Down Tube Rear Width',
    value: '41',
    category: 'tubing',
    type: 'slider',
    min: 30,
    max: 48,
    unit: 'mm',
    configuratorTypes: ['default']

  },
  // {
  //   id: 'ac762528-d92e-4d5a-8c48-e364432e61e9',
  //   name: 'Down tube thickness',
  //   value: '74',
  //   category: 'tubing',
  //   type: 'slider',
  //   min: 30,
  //   max: 78,
  //   unit: 'mm',
  //   configuratorTypes: ['vulz']
  // },
  {
    id: 'cc667ffa-3487-46e8-8b36-48ae1cd78efa',
    name: 'Head tube Diameter',
    value: '0',
    category: 'tubing',
    type: 'dropdown',
    options: [
      {
        label: '1 1/2"',
        value: '0'
      },
      {
        label: '1 1/8"',
        value: '1'
      }
    ]
  },
  // {
  //   id: '39881cea-9d0d-4879-99ee-6ed1d4c0574d',
  //   name: 'Handlebar color',
  //   category: 'accessories',
  //   type: 'color',
  //   value: '0x161515ff'
  // },
  // {
  //   id: '74a9482f-e1bb-4b5e-9dff-a182a2b738b4',
  //   name: 'HandleBar Metallic Factor',
  //   value: '0.5',
  //   category: 'accessories',
  //   type: 'slider',
  //   min: 0,
  //   max: 1
  // },
  /*{
    id: 'ea2fe86c-71b3-459e-8bd3-e056db0b5e8d',
    name: 'Seat color',
    category: 'accessories',
    type: 'color',
    value: '0x1d1b1bff'
  },*/
  // {
  //   id: '34db677e-094f-4ca3-ba28-1ffa0c21c9c0',
  //   name: 'Crank color',
  //   value: '0x111111ff',
  //   category: 'accessories',
  //   type: 'color'
  // },
  // {
  //   id: '251d59ff-4c5d-4a33-94bb-31fafb7df894',
  //   name: 'Crank Metallic Factor',
  //   value: '0.3',
  //   category: 'accessories',
  //   type: 'slider',
  //   min: 0,
  //   max: 1
  // },
  // {
  //   id: 'c0a88d51-ae73-40f8-bc5d-97ccb3e605d0',
  //   name: 'Crank Roughness Factor',
  //   value: '0.5',
  //   category: 'accessories',
  //   type: 'slider',
  //   min: 0,
  //   max: 1
  // },
  {
    id: '5422df73-826b-4478-88d3-016cf74499f6',
    name: 'Rear drop out type',
    category: 'accessories',
    type: 'grid',
    value: '0',
    options: [
      {
        label: 'Quick Release',
        value: '0'
      },
      {
        label: 'Bolt Through',
        value: '1'
      }
    ]
  },
  {
    id: '33ab6af5-42db-494e-834e-0f652a911a85',
    name: 'Rear wheel spacing',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      {
        label: '130mm',
        value: '0'
      },
      {
        label: '142mm',
        value: '1'
      }
    ]
  },
  {
    id: 'f0f25a06-82aa-4584-b4ab-2f39c4e71651',
    name: 'Top Tube Front Width',
    value: '30',
    category: 'tubing',
    type: 'slider',
    min: 30,
    max: 40,
    unit: 'mm'
  },
  {
    id: '7920797e-f807-4b15-b964-d97d9a9d58a2',
    name: 'Rim width',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      {
        label: '23C',
        value: '0'
      },
      {
        label: '28C',
        value: '1'
      }
    ],
    tag: 'man'
  },
  // {
  //   id: 'cb15151e-0bb2-4895-b40d-3184fe772fe1',
  //   name: 'Derailleur color',
  //   category: 'accessories',
  //   type: 'color',
  //   value: '0x6e6969ff'
  // },
  // {
  //   id: '94f3a489-2284-42b9-875d-554a28bfd7c2',
  //   name: 'Rim Roughness Factor',
  //   category: 'accessories',
  //   type: 'dropdown',
  //   value: '0',
  //   options: [
  //     {
  //       label: 'matte',
  //       value: '0'
  //     },
  //     {
  //       label: 'glossy',
  //       value: '1'
  //     }
  //   ]
  // },
  {
    id: 'fb34be77-f67f-4ee9-989e-c8baf24eacf1',
    name: 'Disc brake mount type',
    category: 'accessories',
    type: 'grid',
    value: '1',
    options: [
      {
        label: 'Post Mount',
        value: '0'
      },
      {
        label: 'Flat Mount',
        value: '1'
      }
    ]
  },
  {
    id: '7b5d938d-b964-4f31-bd97-e36008869962',
    name: 'Rim color',
    value: '0x131312ff',
    category: 'accessories',
    type: 'color'
  },
  // {
  //   id: 'a4fa915b-bbc1-47d4-8f55-5b4d71e12400',
  //   name: 'Rim Roughness Factor',
  //   value: '0.0',
  //   category: 'accessories',
  //   type: 'slider',
  //   min: 0,
  //   max: 1,
  //   tag: 'man'
  // },
  {
    id: '7935dece-7133-4678-a77e-a3dd54c8e114',
    name: 'Rim depth',
    category: 'accessories',
    type: 'slider',
    value: '19',
    min: 10,
    max: 50,
    tag: 'man',
    unit: 'mm'
  },
  {
    id: 'cbdf47f8-4e69-45ce-bc08-dda011276a06',
    name: 'Spoke holes',
    category: 'accessories',
    type: 'dropdown',
    value: '0',
    options: [
      {
        label: '32',
        value: '0'
      },
      {
        label: '36',
        value: '1'
      }
    ]
  },
  {
    id: '50033fab-4882-439f-8413-a68a99314ed2',
    name: 'Brake type',
    category: 'accessories',
    type: 'dropdown',
    value: '1',
    options: [
      {
        label: 'V-brake',
        value: '0'
      },
      {
        label: 'Disc-brake',
        value: '1'
      }
    ]
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
    id: '9e898618-6cce-4a45-bc4d-ea7bbd9af54f',
    name: 'Top tube shape',
    category: 'tubing',
    type: 'grid',
    value: '5',
    options: [
      {
        label: 'Oval',
        value: '0'
      },
      {
        label: 'Capsule',
        value: '1'
      },
      {
        label: 'Hexagon',
        value: '2'
      },
      {
        label: 'Circle',
        value: '3'
      },
      {
        label: 'Triangle',
        value: '4'
      },
      {
        label: 'Square',
        value: '5'
      }
    ]
  },
  {
    id: '7a55821d-3981-4eb8-9a4c-26b7e275e56c',
    name: 'Top tube diameter points',
    value: '0,0;1,1',
    category: 'tubing',
    type: 'graphmapper',
    configuratorTypes: ['vulz']
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
    value: '2',
    category: 'other',
    type: 'text'
  },
  {
    id: 'ef670dec-8b9c-4f01-8dec-072095cceb5a',
    name: 'Export Rhino Object names',
    value: '2',
    category: 'other',
    type: 'text'
  },
  {
    id: '56fa370a-8b83-4bd6-9797-f1e0897faac3',
    name: 'Frame color',
    category: 'tubing',
    type: 'color',
    value: '10'
  },
  /*{
    id: '9e546ccd-7767-458c-80f9-9d17be0fc957',
    name: 'Paint Finish',
    category: 'tubing',
    type: 'dropdown',
    value: '0.5',
    options: [
      {
        label: 'matte',
        value: '0'
      },
      {
        label: 'mid',
        value: '0.5'
      },
      {
        label: 'glossy',
        value: '1'
      }
    ]
  },*/
  /*{
    id: '0442b7b5-8dac-4cce-95e4-dddf8b934171',
    name: 'Frame Roughness Factor',
    category: 'accessories',
    type: 'grid',
    value: '0.5',
    options: [
      {
        label: 'matte',
        value: '0'
      },
      {
        label: 'mid',
        value: '0.5'
      },
      {
        label: 'glossy',
        value: '1'
      }
    ]
  },*/
  /*{
    id: 'c01258ac-67a5-4ab2-968e-e368f3391b63',
    name: 'Show Pedestal',
    value: 'true',
    category: 'accessories',
    type: 'checkbox'
  },*/
  /*{
    id: '55f308a4-1f48-4319-93c2-19fc11f04865',
    name: 'Pedestal color',
    value: '0x424141ff',
    category: 'accessories',
    type: 'color'
  },*/
  /*{
    id: 'c1ed3412-a8ca-4b21-ba9d-cd16ac8a7021',
    name: 'Handlebar color',
    value: '0x918484ff',
    category: 'accessories',
    type: 'color'
  },*/
  // {
  //   id: '2c1f868d-5b6f-4eb0-8e59-4ef5e52e2f8c',
  //   name: 'HandleGrip Roughness Factor',
  //   value: '1.0',
  //   category: 'accessories',
  //   type: 'slider',
  //   min: 0,
  //   max: 1
  // },
  {
    id: '95dcfa93-c88e-4804-a541-3e441d4f4d63',
    name: 'Client Email',
    value: 'yourname@email.com',
    category: 'other',
    type: 'text'
  },
  {
    id: '48c92029-20cb-4a4a-a92d-4e367075d8bf',
    name: 'Email Body for Client',
    value: 'Hey,\n\nThanks for using Spinlio! We\'ve attached the 3D file of your custom bike, she\'s a beauty! \n\nIf you have any thoughts on how we can improve Spinlio or features you\'d love to see, please reach out—we\'d love to hear from you. Your feedback helps us make Spinlio better for everyone.\n\nAll the best,\nJack & Markus\nThe Spinlio Team',
    category: 'other',
    type: 'text'
  },
  // New VULZ-specific parameters
  // {
  //   id: '3902e965-6a81-4d91-a8c0-e65209a882a3',
  //     name: 'Tube End Offset',
  //     category: 'tubing',
  //     type: 'slider',
  //     value: '8',
  //     min: 6,
  //     max: 20,
  //     unit: 'mm',
  //     configuratorTypes: ['vulz']
  //   },
    {
      id: 'f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720',
      name: 'DownTube DiameterPoints',
      category: 'tubing',
      type: 'graphmapper',
      value: '0,0;0.1,0.5;0.5,0.9;1,1',
      configuratorTypes: ['vulz']
    },
    {
      id: 'b81e6aa3-43d2-4f12-9670-b563802985dd',
      name: 'Upload DownTube curve Shape',
      category: 'tubing',
      type: 'fileinput',
      value: '',
      configuratorTypes: ['vulz']
    },
    {
      id: '6c895932-e37c-4815-88ef-9bc7ef8520b0',
      name: 'Match Seatstay & Top tube',
      category: 'accessories',
      type: 'checkbox',
      value: 'false'
      // No configuratorTypes means it appears in all configurators
    },
    {
      id: 'da8f6e1f-fe0a-43f1-a8c7-f7c2d27c5a4d',
      name: 'Seat stay angle',
      category: 'geometry',
      type: 'slider',
      value: '46.2',
      min: 45,
      max: 75,
      unit: '°',
      configuratorTypes: ['vulz']
    },
    {
      id: '734e8f5c-4006-47e6-b84f-61df7fb0dde2',
      name: 'TopTube CurvePoints',
      category: 'tubing',
      type: 'graphmapper',
      value: '0,0;0.1,0.4;0.4,0.8;1,1',
      configuratorTypes: ['vulz']
    },
    // {
    //   id: '67a48467-5e1f-4a63-8246-d78fc5cac650',
    //   name: 'Domain start', 
    //   category: 'tubing',
    //   type: 'slider',
    //   value: '1.0',
    //   min: 0,
    //   max: 1,
    //   configuratorTypes: ['vulz']
    // },
    {
      id: 'b4a6298a-e0d9-4d7d-bdf8-51db53a813f1',
      name: 'Seatstay seatside Diameter',
      category: 'geometry',
      type: 'slider',
      value: '24',
      min: 15,
      max: 40,
      unit: 'mm',
      configuratorTypes: ['vulz']
    },
    {
      id: '93d72eca-25cc-4eb1-8a95-16ee449dd01d',
      name: 'Seatstay thickness',
      category: 'geometry',
      type: 'slider',
      value: '12',
      min: 12,
      max: 24,
      unit: 'mm',
      configuratorTypes: ['vulz']
    },
    {
      id: '278842f7-3407-4521-bc20-ee46abf7a298',
      name: 'Chainstay Crankside Diameter',
      category: 'geometry',
      type: 'slider',
      value: '24',
      min: 15,
      max: 40,
      unit: 'mm',
      configuratorTypes: ['vulz']
    },
    {
      id: '3672f35e-3592-4a50-bd73-14ab6def8e96',
      name: 'Chainstay thickness',
      category: 'geometry',
      type: 'slider',
      value: '16',
      min: 15,
      max: 40,
      unit: 'mm',
      configuratorTypes: ['vulz']
    },
    // {
    //   id: 'c01258ac-67a5-4ab2-968e-e368f3391b63',
    //   name: 'Show Pedestal',
    //   category: 'accessories',
    //   type: 'checkbox',
    //   value: 'true',
    //   configuratorTypes: ['vulz']
    // },
    // {
    //   id: '0ed98865-6bd9-4d34-9c2a-6281adb138c3',
    //   name: 'a',
    //   category: 'accessories',
    //   type: 'slider',
    //   value: '40',
    //   min: 0,
    //   max: 100,
    //   configuratorTypes: ['vulz']
    // },
    // {
    //   id: '167d6ee2-a2c7-4bab-87c6-576ca7886fc7',
    //   name: 't',
    //   category: 'accessories',
    //   type: 'slider',
    //   value: '20',
    //   min: 0,
    //   max: 100,
    //   configuratorTypes: ['vulz']
    // }
];
