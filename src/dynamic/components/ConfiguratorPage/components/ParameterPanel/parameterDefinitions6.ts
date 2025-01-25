import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [
  {
    "id": "7088e5a1-f07f-49c3-b1f6-98e74ae3734c",
    "name": "Show Dimensions",
    "value": "false",
    "category": "other",
    "type": "text"
  },
  {
    "id": "83912dec-4ac3-4813-84a9-e9f8316536d8",
    "name": "X axis for front TIRE",
    "value": "58",
    "category": "other",
    "type": "text"
  },
  {
    "id": "3577beb2-7946-4e3f-9549-9d43be77f27c",
    "name": "Boolean Toggle",
    "value": "true",
    "category": "other",
    "type": "text"
  },
  {
    "id": "eea4374e-a513-4f61-924a-f8175351fa8b",
    "name": "Stack Height",
    "category": "geometry",
    "subCategory": "Head Tube",
    "type": "slider",
    "value": "595",
    "min": 540,
    "max": 600,
    "unit": "mm"
  },
  {
    "id": "15c239d7-8130-41d2-8470-342335fcfb5f",
    "name": "X-Fork Crown Height",
    "value": "20",
    "category": "other",
    "type": "text"
  },
  {
    "id": "d1f726c0-fb21-4f15-8f11-06ba73e0f3a9",
    "name": "Bottom Bracket Drop",
    "subCategory": "Rear Triangle",
    "category": "geometry",
    "type": "slider",
    "value": "65",
    "min": 65,
    "max": 75,
    "unit": "mm"
  },
  {
    "id": "c4d4c978-5b58-49ce-a567-739894dc5d36",
    "name": "Rear Width",
    "value": "48",
    "category": "other",
    "type": "text"
  },
  {
    "id": "972de871-83ed-4243-9510-f4c2ab3228a3",
    "name": "Wheel Spacing",
    "category": "accessories",
    "type": "dropdown",
    "subCategory": "Fork",
    "value": "1",
    "options": [
      {
        "label": "100mm",
        "value": "0"
      },
      {
        "label": "110mm",
        "value": "1"
      }
    ]
  },
  {
    "id": "815b0eaf-cd38-4638-8bde-5f6ac27739d0",
    "name": "Chain Stay Length",
    "subCategory": "Rear Triangle",
    "category": "geometry",
    "type": "slider",
    "value": "460",
    "min": 420,
    "max": 450,
    "unit": "mm"
  },
  {
    "id": "beff3154-f6bd-494e-998b-13f9660e9506",
    "name": "Length",
    "category": "geometry",
    "subCategory": "Seat Tube",
    "type": "slider",
    "value": "483",
    "min": 500,
    "max": 620,
    "unit": "mm"
  },
  {
    "id": "6eac979f-e146-4021-8439-0cf495cf0431",
    "name": "Size",
    "category": "accessories",
    "type": "dropdown",
    "subCategory": "Wheels",
    "value": "1",
    "options": [
      {
        "label": "600",
        "value": "0"
      },
      {
        "label": "700",
        "value": "1"
      }
    ]
  },
  {
    "id": "64ecfdab-39bb-4d5c-a11d-b98690404bf9",
    "name": "Length",
    "category": "geometry",
    "subCategory": "Top Tube",
    "type": "slider",
    "value": "555",
    "min": 535,
    "max": 620,
    "unit": "mm",
    "configuratorTypes": [
      "default"
    ]
  },
  {
    "id": "64ecfdab-39bb-4d5c-a11d-b98690404bf9",
    "name": "Length",
    "category": "geometry",
    "subCategory": "Top Tube",
    "type": "slider",
    "value": "555",
    "min": 535,
    "max": 555,
    "unit": "mm",
    "configuratorTypes": [
      "vulz"
    ]
  },
  {
    "id": "98f0a457-b4e5-44ea-8e55-8577941d49ad",
    "name": "Angle",
    "category": "geometry",
    "subCategory": "Head Tube",
    "type": "slider",
    "value": "70.0",
    "min": 72,
    "max": 74,
    "unit": "°",
    "configuratorTypes": [
      "vulz",
      "stepthru"
    
    ]
  },
  {
    "id": "09aa3a63-8d46-4b67-b87b-b4b869e5befd",
    "name": "Angle",
    "category": "geometry",
    "subCategory": "Seat Tube",
    "type": "slider",
    "value": "72.5",
    "min": 72.5,
    "max": 75,
    "unit": "°"
  },
  {
    "id": "d4c506b0-01e8-4958-883f-d7dac161eebe",
    "name": "Bike type",
    "subCategory": "Other",
    "category": "other",
    "type": "dropdown",
    "value": "1",
    "options": [
      {
        "label": "Road Bike",
        "value": "0"
      },
      {
        "label": "Electrical Male",
        "value": "1"
      },
      {
        "label": "Electrical Female",
        "value": "2"
      }
    ],
    "configuratorTypes": [
      "vulz"
    ]
  },
  {
    "id": "157fa431-42e2-42cb-bbf6-229cad9c78b9",
    "name": "DownTube thickness",
    "value": "99",
    "category": "other",
    "type": "text"
  },
  {
    "id": "ac762528-d92e-4d5a-8c48-e364432e61e9",
    "name": "Rear Width",
    "category": "tubing",
    "subCategory": "Down Tube",
    "type": "slider",
    "value": "50",
    "min": 30,
    "max": 48,
    "unit": "mm",
    "configuratorTypes": [
      "default"
    ]
  },
  {
    "id": "3902e965-6a81-4d91-a8c0-e65209a882a3",
    "name": "Height",
    "category": "tubing",
    "subCategory": "Top Tube",
    "type": "slider",
    "value": "-6",
    "min": 0,
    "max": 60,
    "configuratorTypes": [
      "vulz"
    ]
  },
  {
    "id": "7dc55512-0324-4e59-8686-2c97488645ca",
    "name": "Dimension_color",
    "value": "0x000000ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "748ef0ef-9e2c-493e-ad09-d908404f289c",
    "name": "Bottle Colour",
    "value": "0x76808285",
    "category": "other",
    "type": "text"
  },
  {
    "id": "b5bf6f12-a078-4417-a4ae-d2049807178c",
    "name": "Show Only Frame",
    "category": "geometry",
    "type": "checkbox",
    "value": "false"
  },
  {
    "id": "ac947279-5f74-46ec-93c6-a3fdac0a9eb0",
    "name": "Show Only Fork",
    "value": "false",
    "category": "other",
    "type": "text"
  },
  {
    "id": "9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d",
    "name": "Placement",
    "category": "accessories",
    "subCategory": "Water Bottle",
    "type": "slider",
    "value": "0.73",
    "min": 0,
    "max": 1
  },
  {
    "id": "03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1",
    "name": "Seat Tube",
    "subCategory": "Water Bottle",
    "category": "accessories",
    "type": "dropdown",
    "value": "1",
    "options": [
      {
        "label": "Yes",
        "value": "0"
      },
      {
        "label": "No",
        "value": "1"
      }
    ]
  },
  {
    "id": "44d398e1-f057-4d3f-8446-2f8e38703b86",
    "name": "Down Tube",
    "subCategory": "Water Bottle",
    "category": "accessories",
    "type": "dropdown",
    "value": "1",
    "options": [
      {
        "label": "Yes",
        "value": "0"
      },
      {
        "label": "No",
        "value": "1"
      }
    ],
    "configuratorTypes": [
      "default"
    ]
  },
  {
    "id": "00d82c20-556f-4710-bff6-84e43117f680",
    "name": "Width",
    "subCategory": "Seat Tube",
    "category": "geometry",
    "type": "slider",
    "value": "35",
    "min": 28,
    "max": 40,
    "unit": "mm",
    "configuratorTypes": [
      "vulz",
      "stepthru"
    ]
  },
  {
    "id": "f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720",
    "name": "DownTube DiameterPoints",
    "value": "0,0;0.1,0.5;0.5,0.9;1,1",
    "category": "other",
    "type": "text"
  },
  {
    "id": "4ec438ea-a490-434b-82ea-88f84f67f6b7",
    "name": "Front Width",
    "subCategory": "Down Tube",
    "category": "tubing",
    "type": "slider",
    "value": "38",
    "min": 30,
    "max": 50,
    "unit": "mm",
    "configuratorTypes": [
      "default"
    ]
  },
  {
    "id": "62738150-ac17-418d-81ab-2876c45a413e",
    "name": "Shape",
    "subCategory": "Down Tube",
    "category": "tubing",
    "type": "grid",
    "value": "5",
    "options": [
      {
        "label": "Oval",
        "value": "0"
      },
      {
        "label": "Capsule",
        "value": "1"
      },
      {
        "label": "Hexagon",
        "value": "2"
      },
      {
        "label": "Circle",
        "value": "3"
      },
      {
        "label": "Triangle",
        "value": "4"
      },
      {
        "label": "Square",
        "value": "5"
      }
    ],
    "configuratorTypes": [
      "default"
    ]
  },
  {
    "id": "cc667ffa-3487-46e8-8b36-48ae1cd78efa",
    "name": "Width",
    "value": "0",
    "category": "other",
    "type": "text"
  },
  {
    "id": "39881cea-9d0d-4879-99ee-6ed1d4c0574d",
    "name": "HandleBar Colour",
    "value": "0x292424ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "2c3b8027-a4d7-42e2-afb8-264417ee9655",
    "name": "Number Slider",
    "value": "0.9",
    "category": "other",
    "type": "text"
  },
  {
    "id": "ea2fe86c-71b3-459e-8bd3-e056db0b5e8d",
    "name": "Seat Colour",
    "value": "0x262626ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "50033fab-4882-439f-8413-a68a99314ed2",
    "name": "Brake type",
    "category": "accessories",
    "subCategory": "Fittings",
    "type": "dropdown",
    "value": "1",
    "options": [
      {
        "label": "V-brake",
        "value": "0"
      },
      {
        "label": "Disc-brake",
        "value": "1"
      }
    ]
  },
  {
    "id": "34db677e-094f-4ca3-ba28-1ffa0c21c9c0",
    "name": "Crank Colour",
    "value": "0x3d3d3dff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "28506066-d464-4837-8f7c-99d6147df434",
    "name": "Pipe Reinforcement radius",
    "value": "12.5",
    "category": "other",
    "type": "text"
  },
  {
    "id": "cf01eb63-7d21-4c67-b27e-23f658b7140a",
    "name": "Battery Cover Location",
    "value": "0.406",
    "category": "other",
    "type": "text"
  },
  {
    "id": "b6860af0-0da7-4c0e-9a4c-4e15dc378537",
    "name": "Battery Cover Length",
    "value": "0.352",
    "category": "other",
    "type": "text"
  },
  {
    "id": "15f903e5-2943-4bd9-8f50-581e26f9b7fb",
    "name": "DownTube/HeadTube",
    "value": "0.55",
    "category": "other",
    "type": "text"
  },
  {
    "id": "c67853c5-b724-4bfb-bb0a-f12a58aa34ee",
    "name": "y axis scale FORK",
    "value": "0.800",
    "category": "other",
    "type": "text"
  },
  {
    "id": "fb34be77-f67f-4ee9-989e-c8baf24eacf1",
    "name": "Disc Brake Mount",
    "subCategory": "Fittings",
    "category": "accessories",
    "type": "grid",
    "value": "0",
    "options": [
      {
        "label": "Post Mount",
        "value": "0"
      },
      {
        "label": "Flat Mount",
        "value": "1"
      }
    ]
  },
  {
    "id": "593f670d-a770-4d37-84e8-f34aabdecb17",
    "name": "Number Slider",
    "value": "22",
    "category": "other",
    "type": "text"
  },
  {
    "id": "33ab6af5-42db-494e-834e-0f652a911a85",
    "name": "Rear Wheel Spacing",
    "category": "accessories",
    "subCategory": "Wheels",
    "type": "dropdown",
    "value": "1",
    "options": [
      {
        "label": "130mm",
        "value": "0"
      },
      {
        "label": "142mm",
        "value": "1"
      }
    ]
  },
  {
    "id": "6c895932-e37c-4815-88ef-9bc7ef8520b0",
    "name": "X-MatchSeatStay&TopTube",
    "value": "false",
    "category": "other",
    "type": "text"
  },
  {
    "id": "da8f6e1f-fe0a-43f1-a8c7-f7c2d27c5a4d",
    "name": "Seat Stay Angle",
    "subCategory": "Rear Triangle",
    "category": "geometry",
    "type": "slider",
    "value": "46.4",
    "min": 45,
    "max": 75,
    "unit": "°",
    "configuratorTypes": [
      "vulz",
      "stepthru"
    ]
  },
  {
    "id": "a25bcbe9-c9d0-4411-b856-93f2ba18b928",
    "name": "Number Slider",
    "value": "-29",
    "category": "other",
    "type": "text"
  },
  {
    "id": "fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1",
    "name": "Crown Width",
    "subCategory": "Fork",
    "category": "accessories",
    "type": "slider",
    "value": "24.00",
    "min": 20,
    "max": 35,
    "unit": "mm"
  },
  {
    "id": "a250e630-2572-402a-af6e-e36136793a42",
    "name": "X-Fork width at axel",
    "value": "9.7",
    "category": "other",
    "type": "text"
  },
  {
    "id": "f0f25a06-82aa-4584-b4ab-2f39c4e71651",
    "name": "Front Width",
    "subCategory": "Top Tube",
    "category": "tubing",
    "type": "slider",
    "value": "30",
    "min": 30,
    "max": 40,
    "unit": "mm"
  },
  {
    "id": "7920797e-f807-4b15-b964-d97d9a9d58a2",
    "name": "Width",
    "subCategory": "Wheels",
    "category": "accessories",
    "type": "dropdown",
    "value": "7",
    "options": [
      {
        "label": "23C",
        "value": "0"
      },
      {
        "label": "28C",
        "value": "1"
      }
    ],
  },
  {
    "id": "734e8f5c-4006-47e6-b84f-61df7fb0dde2",
    "name": "TopTube CurvePoints",
    "value": "0,0;0.1,0.4;0.4,0.8;1,1",
    "category": "other",
    "type": "text"
  },
  {
    "id": "b41d6573-f719-446b-b463-67046c93097f",
    "name": "Colour Swatch",
    "value": "0x333333ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "cb15151e-0bb2-4895-b40d-3184fe772fe1",
    "name": "Derailer Color",
    "value": "0xe0e0e0ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "5422df73-826b-4478-88d3-016cf74499f6",
    "name": "Rear Drop Out",
    "subCategory": "Fittings",
    "category": "accessories",
    "type": "grid",
    "value": "0",
    "options": [
      {
        "label": "Quick Release",
        "value": "0"
      },
      {
        "label": "Bolt Through",
        "value": "1"
      }
    ]
  },
  {
    "id": "214ed92c-846b-4f8a-a12e-1fb437e58d5c",
    "name": "Number Slider",
    "value": "10",
    "category": "other",
    "type": "text"
  },
  {
    "id": "7b5d938d-b964-4f31-bd97-e36008869962",
    "name": "Color",
    "subCategory": "Wheels",
    "value": "0x262626ff",
    "category": "accessories",
    "type": "colorWithPalette"
  },
  {
    "id": "7935dece-7133-4678-a77e-a3dd54c8e114",
    "name": "Depth",
    "subCategory": "Wheels",
    "category": "accessories",
    "type": "slider",
    "value": "21",
    "min": 10,
    "max": 50,
    "unit": "mm"
  },
  {
    "id": "cbdf47f8-4e69-45ce-bc08-dda011276a06",
    "name": "Spoke Holes",
    "subCategory": "Wheels",
    "category": "accessories",
    "type": "dropdown",
    "value": "0",
    "options": [
      {
        "label": "32",
        "value": "0"
      },
      {
        "label": "36",
        "value": "1"
      }
    ]
  },
  {
    "id": "0c908c83-7337-42f5-896a-005f9b10f33c",
    "name": "File Format",
    "value": "0",
    "category": "other",
    "type": "text"
  },
  {
    "id": "8620773c-238b-4627-ba8e-2d1c0995b089",
    "name": "Client name",
    "category": "client information",
    "type": "text",
    "value": "your name"
  },
  {
    "id": "97090b76-9451-44de-b9d8-1dc6056ee751",
    "name": "Number Slider",
    "value": "1.26",
    "category": "other",
    "type": "text"
  },
  {
    "id": "3412035c-c0e0-4a92-9ab8-e8085c434195",
    "name": "X-Frame texture Size",
    "value": "806",
    "category": "other",
    "type": "text"
  },
  {
    "id": "e593174a-549d-468a-92ab-28029f9b4ad0",
    "name": "Number Slider",
    "value": "15",
    "category": "other",
    "type": "text"
  },
  {
    "id": "b4a6298a-e0d9-4d7d-bdf8-51db53a813f1",
    "name": "SeatStay seatside Diameter",
    "value": "24",
    "category": "other",
    "type": "text"
  },
  {
    "id": "93d72eca-25cc-4eb1-8a95-16ee449dd01d",
    "name": "SeatStay thickness",
    "value": "12",
    "category": "other",
    "type": "text"
  },
  {
    "id": "9e898618-6cce-4a45-bc4d-ea7bbd9af54f",
    "name": "Shape",
    "subCategory": "Top Tube",
    "category": "tubing",
    "type": "grid",
    "value": "5",
    "options": [
      {
        "label": "Oval",
        "value": "0"
      },
      {
        "label": "Capsule",
        "value": "1"
      },
      {
        "label": "Hexagon",
        "value": "2"
      },
      {
        "label": "Circle",
        "value": "3"
      },
      {
        "label": "Triangle",
        "value": "4"
      },
      {
        "label": "Square",
        "value": "5"
      }
    ]
  },
  {
    "id": "7a55821d-3981-4eb8-9a4c-26b7e275e56c",
    "name": "TopTube DiameterPoints",
    "value": "0,0;1,1",
    "category": "other",
    "type": "text"
  },
  {
    "id": "3afee937-c9ca-487d-b912-165b4be705be",
    "name": "End Of Line",
    "value": "2",
    "category": "other",
    "type": "text"
  },
  {
    "id": "ef670dec-8b9c-4f01-8dec-072095cceb5a",
    "name": "Export Rhino Object names",
    "value": "2",
    "category": "other",
    "type": "text"
  },
  {
    "id": "56fa370a-8b83-4bd6-9797-f1e0897faac3",
    "name": "Frame Color",
    "subCategory": "Frame",
    "category": "tubing",
    "type": "color",
    "value": "3"
  },
  {
    "id": "206889f8-8ef2-4f95-ac06-34486923c73e",
    "name": "Tube color texture",
    "value": "https://thumbs.dreamstime.com/b/diagonal-stripes-pattern-vector-seamless-striped-texture-abstract-monochrome-geometric-background-thin-slanted-lines-black-104236907.jpg",
    "category": "other",
    "type": "text"
  },
  {
    "id": "6bebc909-bc55-448c-b316-4d9acb7e1c9a",
    "name": "Paint Finish",
    "subCategory": "Frame",
    "category": "tubing",
    "type": "grid",
    "value": "0",
    "options": [
      {
        "label": "Matte",
        "value": "0"
      },
      {
        "label": "Glossy",
        "value": "1"
      }
    ]
  },
  {
    "id": "c01258ac-67a5-4ab2-968e-e368f3391b63",
    "name": "Show Pedestal",
    "value": "true",
    "category": "other",
    "type": "text"
  },
  {
    "id": "55f308a4-1f48-4319-93c2-19fc11f04865",
    "name": "Pedestal_color",
    "value": "0x101110ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "c1ed3412-a8ca-4b21-ba9d-cd16ac8a7021",
    "name": "HandleBar Colour",
    "value": "0x000000ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "95dcfa93-c88e-4804-a541-3e441d4f4d63",
    "name": "Client Email",
    "value": "yourname@email.com",
    "category": "other",
    "type": "text"
  },
  {
    "id": "48c92029-20cb-4a4a-a92d-4e367075d8bf",
    "name": "Email Body for Client",
    "value": "Hey,\n\nThanks for using Spinlio! We’ve attached the 3D file of your custom bike, she’s a beaut! \n\nIf you have any thoughts on how we can improve Spinlio or features you’d love to see, please reach out—we’d love to hear from you. Your feedback helps us make Spinlio better for everyone.\n\nAll the best,\nJack & Markus\nThe Spinlio Team",
    "category": "other",
    "type": "text"
  },
  {
    "id": "3127f0e5-32f3-4977-bb79-aa81476912f8",
    "name": "Top Tube Logo Size",
    "value": "1.0",
    "category": "other",
    "type": "text"
  },
  {
    "id": "bf8489bb-a14c-46be-b41c-54f4951e838b",
    "name": "Import TopTube logo(png)",
    "value": "",
    "category": "other",
    "type": "text"
  },
  {
    "id": "5e5d90ef-320f-44d0-a24a-a73b12cb7bc4",
    "name": "Top Tube Logo Position",
    "value": "0.6",
    "category": "other",
    "type": "text"
  },
  {
    "id": "10019dde-35c8-4c62-a58b-5cc224ac1b6e",
    "name": "Show HeadTube Logo",
    "value": "false",
    "category": "other",
    "type": "text"
  },
  {
    "id": "1bd1f334-5a33-43d5-bae5-fe44fae61cda",
    "name": "Import DownTube logo(png)",
    "subCategory": "Frame",
    "category": "tubing",
    "value": "",
    "type": "logoUpload",
    "configuratorTypes": [
      "vulz",
      "stepthru"
    ]
  },
  {
    "id": "373e9914-d7dd-40c2-9965-f296790dd30c",
    "name": "Colour Swatch",
    "value": "0x171717ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "702dac9d-29a0-4ca4-b8ea-05286896fe23",
    "name": "Colour Swatch",
    "value": "0x333333ff",
    "category": "other",
    "type": "text"
  },
  {
    "id": "83912dec-4ac3-4813-84a9-e9f8316536d8",
    "name": "X axis for front TIRE",
    "value": "0.8",
    "category": "accessories",
    "subCategory": "Fork",
    "type": "slider",
    "min": 0,
    "max": 1,
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "cf01eb63-7d21-4c67-b27e-23f658b7140a",
    "name": "Battery Cover Location",
    "category": "accessories",
    "subCategory": "Battery",
    "type": "slider",
    "value": "0.4",
    "min": 0.1,
    "max": 0.5,
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "b6860af0-0da7-4c0e-9a4c-4e15dc378537", 
    "name": "Battery Cover Length",
    "category": "accessories",
    "subCategory": "Battery",
    "type": "slider",
    "value": "0.35",
    "min": 0.1,
    "max": 0.4,
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "15f903e5-2943-4bd9-8f50-581e26f9b7fb",
    "name": "DownTube/HeadTube",
    "category": "accessories", 
    "subCategory": "Battery",
    "type": "slider",
    "value": "0.5",
    "min": 0,
    "max": 1,
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "c67853c5-b724-4bfb-bb0a-f12a58aa34ee",
    "name": "y axis scale FORK",
    "category": "accessories",
    "subCategory": "Fork",
    "type": "slider", 
    "value": "0.8",
    "min": 0,
    "max": 1,
    "configuratorTypes": ["stepthru"]
  }

];
