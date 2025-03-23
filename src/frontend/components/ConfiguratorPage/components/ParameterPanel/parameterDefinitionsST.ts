import { ParameterDefinition } from './types';

export const parameterDefinitions: ParameterDefinition[] = [
  // {
  //   "id": "7088e5a1-f07f-49c3-b1f6-98e74ae3734c",
  //   "name": "Show Dimensions",
  //   "value": "false",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "3577beb2-7946-4e3f-9549-9d43be77f27c", 
  //   "name": "Boolean Toggle",
  //   "value": "true",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  
  {
    "id": "d1f726c0-fb21-4f15-8f11-06ba73e0f3a9",
    "name": "Bottom Bracket Drop",
    "value": "65",
    "category": "geometry",
    "subCategory": "Rear Triangle",
    "type": "slider",
    "min": 65,
    "max": 75,
    "unit": "mm",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "c4d4c978-5b58-49ce-a567-739894dc5d36",
    "name": "Rear Width",
    "value": "48",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "972de871-83ed-4243-9510-f4c2ab3228a3",
  //   "name": "Wheel Spacing",
  //   "category": "accessories", 
  //   "type": "dropdown",
  //   "subCategory": "Fork",
  //   "value": "1",
  //   "options": [
  //     {
  //       "label": "110mm",
  //       "value": "0"
  //     },
  //     {
  //       "label": "100mm", 
  //       "value": "1"
  //     }
  //   ],
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "815b0eaf-cd38-4638-8bde-5f6ac27739d0",
    "name": "Chain Stay Length",
    "value": "460",
    "category": "geometry",
    "subCategory": "Rear Triangle",
    "type": "slider",
    "min": 420,
    "max": 500,
    "unit": "mm",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "beff3154-f6bd-494e-998b-13f9660e9506",
    "name": "Length",
    "category": "geometry",
    "subCategory": "Seat Tube",
    "type": "slider",
    "value": "483",
    "min": 450,
    "max": 620,
    "unit": "mm",
    "configuratorTypes": ["stepthru"]
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
    ],
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "64ecfdab-39bb-4d5c-a11d-b98690404bf9",
    "name": "Length",
    "category": "tubing",
    "subCategory": "Down Tube",
    "type": "slider",
    "value": "621.00",
    "min": 600,
    "max": 700,
    "unit": "mm",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "98f0a457-b4e5-44ea-8e55-8577941d49ad",
    "name": "Angle",
    "category": "geometry",
    "subCategory": "Head Tube",
    "type": "slider",
    "value": "70.0",
    "min": 65,
    "max": 70,
    "unit": "°",
    "configuratorTypes": ["stepthru"]
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
    "unit": "°",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "d4c506b0-01e8-4958-883f-d7dac161eebe",
  //   "name": "Bike type",
  //   "subCategory": "Other",
  //   "category": "other",
  //   "type": "dropdown",
  //   "value": "1",
  //   "options": [
  //     {
  //       "label": "Road Bike",
  //       "value": "0"
  //     },
  //     {
  //       "label": "Electrical Male",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Electrical Female",
  //       "value": "2"
  //     }
  //   ],
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "ac762528-d92e-4d5a-8c48-e364432e61e9",
  //   "name": "Rear Width",
  //   "category": "tubing",
  //   "subCategory": "Down Tube",
  //   "type": "slider",
  //   "value": "50",
  //   "min": 30,
  //   "max": 48,
  //   "unit": "mm",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "3902e965-6a81-4d91-a8c0-e65209a882a3",
  //   "name": "Height",
  //   "category": "tubing",
  //   "subCategory": "Top Tube",
  //   "type": "slider",
  //   "value": "-6",
  //   "min": 0,
  //   "max": 60,
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "7dc55512-0324-4e59-8686-2c97488645ca",
    "name": "Dimension_color",
    "value": "0x000000ff",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "748ef0ef-9e2c-493e-ad09-d908404f289c",
    "name": "Bottle Colour",
    "value": "0x76808285",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "b5bf6f12-a078-4417-a4ae-d2049807178c",
    "name": "Show Only Frame",
    "category": "geometry",
    "type": "checkbox",
    "value": "false",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "ac947279-5f74-46ec-93c6-a3fdac0a9eb0",
  //   "name": "Show Only Fork",
  //   "value": "false",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d",
    "name": "Placement",
    "category": "accessories",
    "subCategory": "Water Bottle",
    "type": "slider",
    "value": "0.70",
    "min": 0.55,
    "max": 0.80,
    "configuratorTypes": ["stepthru"]
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
    ],
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "44d398e1-f057-4d3f-8446-2f8e38703b86",
  //   "name": "Down Tube",
  //   "subCategory": "Water Bottle",
  //   "category": "accessories",
  //   "type": "dropdown",
  //   "value": "1",
  //   "options": [
  //     {
  //       "label": "Yes",
  //       "value": "0"
  //     },
  //     {
  //       "label": "No",
  //       "value": "1"
  //     }
  //   ],
  //   "configuratorTypes": ["stepthru"]
  // },
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
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720",
  //   "name": "DownTube DiameterPoints",
  //   "value": "0,0;0.1,0.5;0.5,0.9;1,1",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "4ec438ea-a490-434b-82ea-88f84f67f6b7",
  //   "name": "Front Width",
  //   "subCategory": "Down Tube",
  //   "category": "tubing",
  //   "type": "slider",
  //   "value": "38",
  //   "min": 30,
  //   "max": 50,
  //   "unit": "mm",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "62738150-ac17-418d-81ab-2876c45a413e",
  //   "name": "Shape",
  //   "subCategory": "Down Tube",
  //   "category": "tubing",
  //   "type": "grid",
  //   "value": "5",
  //   "options": [
  //     {
  //       "label": "Oval",
  //       "value": "0"
  //     },
  //     {
  //       "label": "Capsule",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Hexagon",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Circle",
  //       "value": "3"
  //     },
  //     {
  //       "label": "Triangle",
  //       "value": "4"
  //     },
  //     {
  //       "label": "Square",
  //       "value": "5"
  //     }
  //   ],
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "cc667ffa-3487-46e8-8b36-48ae1cd78efa",
    "name": "Width",
    "value": "0",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "39881cea-9d0d-4879-99ee-6ed1d4c0574d",
  //   "name": "HandleBar Colour",
  //   "value": "0x292424ff",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "ce96f93c-37dc-4584-808f-16d1c67d7c4d",
  //   "name": "Brake Lever Angle",
  //   "value": "20",
  //   "category": "accessories",
  //   "subCategory": "Fittings",
  //   "type": "slider",
  //   "min": -10,
  //   "max": 30,
  //   "unit": "°",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "ea2fe86c-71b3-459e-8bd3-e056db0b5e8d",
  //   "name": "Seat Colour",
  //   "value": "0x262626ff",
  //   "category": "accessories",
  //   "subCategory": "Colors",
  //   "type": "color",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "34db677e-094f-4ca3-ba28-1ffa0c21c9c0",
  //   "name": "Crank Colour",
  //   "value": "0x1b1b1bff",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "ddfb0d82-db25-4cf7-9a76-679506641ed5",
    "name": "Tyre Clearence",
    "value": "20",
    "category": "geometry",
    "subCategory": "Rear Triangle", 
    "type": "slider",
    "min": 0,
    "max": 30,
    "unit": "mm",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "cf01eb63-7d21-4c67-b27e-23f658b7140a",
    "name": "Battery Cover Location",
    "category": "tubing",
    "subCategory": "Battery",
    "type": "slider",
    "value": "0.41",
    "min": 0.30,
    "max": 0.50,
    "step": 0.01,
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "b6860af0-0da7-4c0e-9a4c-4e15dc378537",
  //   "name": "Battery Cover Length",
  //   "category": "accessories",
  //   "subCategory": "Battery",
  //   "type": "slider",
  //   "value": "0.352",
  //   "min": 0.1,
  //   "max": 0.4,
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "15f903e5-2943-4bd9-8f50-581e26f9b7fb",
  //   "name": "DownTube/HeadTube",
  //   "category": "accessories",
  //   "subCategory": "Battery",
  //   "type": "slider",
  //   "value": "0.55",
  //   "min": 0,
  //   "max": 1,
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "33ab6af5-42db-494e-834e-0f652a911a85",
    "name": "Rear Wheel Spacing",
    "value": "1",
    "category": "accessories",
    "subCategory": "Wheels",
    "type": "dropdown",
    "options": [
      {
        "label": "130mm",
        "value": "0"
      },
      {
        "label": "142mm",
        "value": "1"
      }
    ],
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "fb34be77-f67f-4ee9-989e-c8baf24eacf1",
  //   "name": "Disc Brake Mount",
  //   "value": "0",
  //   "category": "accessories",
  //   "subCategory": "Fittings",
  //   "type": "dropdown",
  //   "options": [
  //     {
  //       "label": "Post Mount",
  //       "value": "0"
  //     },
  //     {
  //       "label": "Flat Mount",
  //       "value": "1"
  //     }
  //   ],
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "6c895932-e37c-4815-88ef-9bc7ef8520b0",
  //   "name": "X-MatchSeatStay&TopTube",
  //   "value": "false",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "da8f6e1f-fe0a-43f1-a8c7-f7c2d27c5a4d",
    "name": "Angle",
    "value": "46.4",
    "category": "geometry",
    "subCategory": "Seat Stay",
    "type": "slider",
    "min": 45.0,
    "max": 75.0,
    "unit": "°",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "f0f25a06-82aa-4584-b4ab-2f39c4e71651",
  //   "name": "Front Width",
  //   "subCategory": "Top Tube",
  //   "category": "tubing",
  //   "type": "slider",
  //   "value": "30",
  //   "min": 30,
  //   "max": 40,
  //   "unit": "mm",
  //   "configuratorTypes": ["stepthru"]
  // },
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
      },
      {
        "label": "30C",
        "value": "2"
      },
      {
        "label": "32C",
        "value": "3"
      },
      {
        "label": "35C",
        "value": "4"
      },
      {
        "label": "38C",
        "value": "5"
      },
      {
        "label": "40C",
        "value": "6"
      },
      {
        "label": "42C",
        "value": "7"
      }
    ],
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "734e8f5c-4006-47e6-b84f-61df7fb0dde2",
  //   "name": "TopTube CurvePoints",
  //   "value": "0,0;0.1,0.4;0.4,0.8;1,1",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "b41d6573-f719-446b-b463-67046c93097f",
  //   "name": "Tyre colour",
  //   "value": "0x333333ff",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "cb15151e-0bb2-4895-b40d-3184fe772fe1",
    "name": "Derailer Color",
    "value": "0xe0e0e0ff",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "7b5d938d-b964-4f31-bd97-e36008869962",
    "name": "Color",
    "value": "0x262626ff",
    "category": "accessories",
    "subCategory": "Wheels",
    "type": "colorWithPalette",
    "configuratorTypes": ["stepthru"]
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
    "unit": "mm",
    "configuratorTypes": ["stepthru"]
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
    ],
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "0c908c83-7337-42f5-896a-005f9b10f33c",
    "name": "File Format",
    "value": "0",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "8620773c-238b-4627-ba8e-2d1c0995b089",
    "name": "Client name",
    "value": "your name",
    "category": "client information",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "b4a6298a-e0d9-4d7d-bdf8-51db53a813f1",
  //   "name": "Seatside Diameter",
  //   "value": "24",
  //   "category": "geometry",
  //   "subCategory": "Rear Triangle",
  //   "type": "slider",
  //   "min": 15,
  //   "max": 40,
  //   "unit": "mm",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "5e78e2c0-6da1-4568-b66a-63643ecf7fb5",
    "name": "Colour",
    "value": "0xeb1b1bff",
    "category": "tubing",
    "subCategory": "Frame",
    "type": "color",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "93d72eca-25cc-4eb1-8a95-16ee449dd01d",
    "name": "SeatStay thickness",
    "value": "12",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "9e898618-6cce-4a45-bc4d-ea7bbd9af54f",
  //   "name": "Shape", 
  //   "subCategory": "Top Tube",
  //   "category": "tubing",
  //   "type": "grid",
  //   "value": "5",
  //   "options": [
  //     {
  //       "label": "Oval",
  //       "value": "0"
  //     },
  //     {
  //       "label": "Capsule",
  //       "value": "1"
  //     },
  //     {
  //       "label": "Hexagon",
  //       "value": "2"
  //     },
  //     {
  //       "label": "Circle",
  //       "value": "3"
  //     },
  //     {
  //       "label": "Triangle",
  //       "value": "4"
  //     },
  //     {
  //       "label": "Square",
  //       "value": "5"
  //     }
  //   ],
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "7a55821d-3981-4eb8-9a4c-26b7e275e56c",
  //   "name": "TopTube DiameterPoints",
  //   "value": "0,0;1,1",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "3afee937-c9ca-487d-b912-165b4be705be",
    "name": "End Of Line",
    "value": "2",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "ef670dec-8b9c-4f01-8dec-072095cceb5a",
    "name": "Export Rhino Object names",
    "value": "2",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "56fa370a-8b83-4bd6-9797-f1e0897faac3",
  //   "name": "Frame Color",
  //   "subCategory": "Frame",
  //   "category": "tubing",
  //   "type": "color",
  //   "value": "1",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "206889f8-8ef2-4f95-ac06-34486923c73e",
    "name": "Tube color texture",
    "value": "https://thumbs.dreamstime.com/b/diagonal-stripes-pattern-vector-seamless-striped-texture-abstract-monochrome-geometric-background-thin-slanted-lines-black-104236907.jpg",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
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
    ],
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "c01258ac-67a5-4ab2-968e-e368f3391b63",
  //   "name": "Show Pedestal",
  //   "value": "true",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "55f308a4-1f48-4319-93c2-19fc11f04865",
    "name": "Pedestal_color",
    "value": "0x101110ff",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },

  {
    "id": "95dcfa93-c88e-4804-a541-3e441d4f4d63",
    "name": "Client Email",
    "value": "yourname@email.com",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "48c92029-20cb-4a4a-a92d-4e367075d8bf",
    "name": "Email Body for Client",
    "value": "Hey,\n\nThanks for using Spinlio! We've attached the 3D file of your custom bike, she's a beaut! \n\nIf you have any thoughts on how we can improve Spinlio or features you'd love to see, please reach out—we'd love to hear from you. Your feedback helps us make Spinlio better for everyone.\n\nAll the best,\nJack & Markus\nThe Spinlio Team",
    "category": "other",
    "type": "text",
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "3127f0e5-32f3-4977-bb79-aa81476912f8",
  //   "name": "Top Tube Logo Size", 
  //   "value": "1.0",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "bf8489bb-a14c-46be-b41c-54f4951e838b",
  //   "name": "Import TopTube logo(png)",
  //   "value": "",
  //   "category": "other", 
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "5e5d90ef-320f-44d0-a24a-a73b12cb7bc4",
  //   "name": "Top Tube Logo Position",
  //   "value": "0.6",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "10019dde-35c8-4c62-a58b-5cc224ac1b6e",
  //   "name": "Show HeadTube Logo",
  //   "value": "false",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  {
    "id": "91f05499-a206-4c8e-94f6-963cc7b70d39",
    "name": "Down Tube Logo Size",
    "value": "0.3",
    "subCategory": "Down Tube",
    "category": "tubing",
    "type": "slider",
    "min": 0.10,
    "max": 1.00,
    "step": 0.01,
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "1bd1f334-5a33-43d5-bae5-fe44fae61cda",
    "name": "Import DownTube logo(png)",
    "value": "4f0757c2-032b-4c4b-b04b-62b2d44bda21",
    "subCategory": "Down Tube",
    "category": "tubing",
    "type": "logoUpload",
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "a8423161-efb7-46a8-ab3a-edc8944e8ce3",
    "name": "Position Y",
    "value": "0.1",
    "subCategory": "Down Tube",
    "category": "tubing", 
    "type": "slider",
    "min": 0,
    "max": 1,
    "step": 0.01,
    "configuratorTypes": ["stepthru"]
  },
  {
    "id": "23369373-f2f8-404b-9577-e48a24d39f83",
    "name": "Position X",
    "value": "0.8",
    "subCategory": "Down Tube",
    "category": "tubing",
    "type": "slider",
    "min": 0.1,
    "max": 1.0,
    "configuratorTypes": ["stepthru"]
  },
  // {
  //   "id": "373e9914-d7dd-40c2-9965-f296790dd30c",
  //   "name": "Fork Stanchion color",
  //   "value": "0x171717ff",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // },
  // {
  //   "id": "702dac9d-29a0-4ca4-b8ea-05286896fe23",
  //   "name": "Fork Lowers Color",
  //   "value": "0x0f0f0fff",
  //   "category": "other",
  //   "type": "text",
  //   "configuratorTypes": ["stepthru"]
  // }
];
