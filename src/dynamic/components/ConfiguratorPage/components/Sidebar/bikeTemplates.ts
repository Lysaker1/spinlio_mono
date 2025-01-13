export interface BikeTemplate {
    id: string;
    image?: string;
    name: string;
    modelStateId: string;
    parameters: Record<string, string>;
    type: 'vulz' | 'default';
  }
  
  // The model ID from your parameters
  export const MODEL_ID = '9d6043a1-538e-4c70-8ff7-977224ec7928';

  // New Vulz parameters based on parameter definition v6
export const VulzParameters = {
  // Frame Geometry
  "eea4374e-a513-4f61-924a-f8175351fa8b": "560",  // Stack
  "815b0eaf-cd38-4638-8bde-5f6ac27739d0": "444",  // Chainstay
  "beff3154-f6bd-494e-998b-13f9660e9506": "597",  // Reach
  "64ecfdab-39bb-4d5c-a11d-b98690404bf9": "548",  // Seat tube length
  "09aa3a63-8d46-4b67-b87b-b4b869e5befd": "74.3", // Seat tube angle
  "98f0a457-b4e5-44ea-8e55-8577941d49ad": "72.0", // Head tube angle
  
  // Frame Details
  "c4d4c978-5b58-49ce-a567-739894dc5d36": "40",   // Bottom bracket drop
  "4ec438ea-a490-434b-82ea-88f84f67f6b7": "38",   // Fork offset
  "fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1": "25.91", // Fork length
  
  
  
  // Component Selection
  "03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1": "1",    // Handlebar type
  "62738150-ac17-418d-81ab-2876c45a413e": "2",    // Wheel type
  "ac762528-d92e-4d5a-8c48-e364432e61e9": "41",   // Tire width
  
  // Visual Effects
  "74a9482f-e1bb-4b5e-9dff-a182a2b738b4": "1.0",  // Metallic finish
  "251d59ff-4c5d-4a33-94bb-31fafb7df894": "0.8",  // Gloss level
  
  // Default settings
  "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false", // Show measurements
  "c01258ac-67a5-4ab2-968e-e368f3391b63": "true",  // Show bike
  
  // Additional Vulz-specific parameters
  "8620773c-238b-4627-ba8e-2d1c0995b089": "VULZ Custom", // Bike name
};

  export const CanyonParameters = {
    "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false",
    "eea4374e-a513-4f61-924a-f8175351fa8b": "560",
    "15c239d7-8130-41d2-8470-342335fcfb5f": "12",
    "d1f726c0-fb21-4f15-8f11-06ba73e0f3a9": "65",
    "c4d4c978-5b58-49ce-a567-739894dc5d36": "37",
    "972de871-83ed-4243-9510-f4c2ab3228a3": "0",
    "6eac979f-e146-4021-8439-0cf495cf0431": "1",
    "815b0eaf-cd38-4638-8bde-5f6ac27739d0": "444",
    "beff3154-f6bd-494e-998b-13f9660e9506": "597",
    "98f0a457-b4e5-44ea-8e55-8577941d49ad": "72.0",
    "64ecfdab-39bb-4d5c-a11d-b98690404bf9": "548",
    "09aa3a63-8d46-4b67-b87b-b4b869e5befd": "74.3",
    "3902e965-6a81-4d91-a8c0-e65209a882a3": "16",
    "4ec438ea-a490-434b-82ea-88f84f67f6b7": "38",
    "7dc55512-0324-4e59-8686-2c97488645ca": "0x000000ff",
    "fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1": "25.91",
    "a250e630-2572-402a-af6e-e36136793a42": "9.0",
    "748ef0ef-9e2c-493e-ad09-d908404f289c": "0x76808285",
    "b5bf6f12-a078-4417-a4ae-d2049807178c": "false",
    "ac947279-5f74-46ec-93c6-a3fdac0a9eb0": "false",
    "9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d": "0.5",
    "03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1": "1",
    "44d398e1-f057-4d3f-8446-2f8e38703b86": "0",
    "00d82c20-556f-4710-bff6-84e43117f680": "31",
    "f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720": "0,0;0.1,0.5;0.5,0.9;1,1",
    "62738150-ac17-418d-81ab-2876c45a413e": "4",
    "ac762528-d92e-4d5a-8c48-e364432e61e9": "41",
    "cc667ffa-3487-46e8-8b36-48ae1cd78efa": "0",
    "39881cea-9d0d-4879-99ee-6ed1d4c0574d": "0x161515ff",
    "74a9482f-e1bb-4b5e-9dff-a182a2b738b4": "1.0",
    "ea2fe86c-71b3-459e-8bd3-e056db0b5e8d": "0x1d1b1bff",
    "34db677e-094f-4ca3-ba28-1ffa0c21c9c0": "0x111111ff",
    "251d59ff-4c5d-4a33-94bb-31fafb7df894": "1.0",
    "c0a88d51-ae73-40f8-bc5d-97ccb3e605d0": "0.0",
    "50033fab-4882-439f-8413-a68a99314ed2": "1",
    "5422df73-826b-4478-88d3-016cf74499f6": "0",
    "33ab6af5-42db-494e-834e-0f652a911a85": "1",
    "fb34be77-f67f-4ee9-989e-c8baf24eacf1": "1",
    "f0f25a06-82aa-4584-b4ab-2f39c4e71651": "30",
    "7920797e-f807-4b15-b964-d97d9a9d58a2": "0",
    "734e8f5c-4006-47e6-b84f-61df7fb0dde2": "0,0;0.1,0.4;0.4,0.8;1,1",
    "cb15151e-0bb2-4895-b40d-3184fe772fe1": "0x6e6969ff",
    "94f3a489-2284-42b9-875d-554a28bfd7c2": "0.0",
    "7b5d938d-b964-4f31-bd97-e36008869962": "0x131312ff",
    "a4fa915b-bbc1-47d4-8f55-5b4d71e12400": "0.0",
    "7935dece-7133-4678-a77e-a3dd54c8e114": "19",
    "cbdf47f8-4e69-45ce-bc08-dda011276a06": "0",
    "0c908c83-7337-42f5-896a-005f9b10f33c": "0",
    "8620773c-238b-4627-ba8e-2d1c0995b089": "your name",
    "9e898618-6cce-4a45-bc4d-ea7bbd9af54f": "5",
    "7a55821d-3981-4eb8-9a4c-26b7e275e56c": "0,0;1,1",
    "3afee937-c9ca-487d-b912-165b4be705be": "2",
    "ef670dec-8b9c-4f01-8dec-072095cceb5a": "2",
    "56fa370a-8b83-4bd6-9797-f1e0897faac3": "12",
    "6bebc909-bc55-448c-b316-4d9acb7e1c9a": "0",
    "c01258ac-67a5-4ab2-968e-e368f3391b63": "true",
    "55f308a4-1f48-4319-93c2-19fc11f04865": "0x000000ff",
    "c1ed3412-a8ca-4b21-ba9d-cd16ac8a7021": "0x000000ff",
    "2c1f868d-5b6f-4eb0-8e59-4ef5e52e2f8c": "1.0",
    "95dcfa93-c88e-4804-a541-3e441d4f4d63": "yourname@email.com"
  };
  
  export const ClassicroadbikejsonParameters = {
    "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false",
    "eea4374e-a513-4f61-924a-f8175351fa8b": "548",
    "15c239d7-8130-41d2-8470-342335fcfb5f": "12",
    "d1f726c0-fb21-4f15-8f11-06ba73e0f3a9": "65",
    "c4d4c978-5b58-49ce-a567-739894dc5d36": "40",
    "972de871-83ed-4243-9510-f4c2ab3228a3": "0",
    "6eac979f-e146-4021-8439-0cf495cf0431": "1",
    "815b0eaf-cd38-4638-8bde-5f6ac27739d0": "444",
    "beff3154-f6bd-494e-998b-13f9660e9506": "545",
    "98f0a457-b4e5-44ea-8e55-8577941d49ad": "72.0",
    "64ecfdab-39bb-4d5c-a11d-b98690404bf9": "542",
    "09aa3a63-8d46-4b67-b87b-b4b869e5befd": "74.3",
    "3902e965-6a81-4d91-a8c0-e65209a882a3": "16",
    "4ec438ea-a490-434b-82ea-88f84f67f6b7": "38",
    "7dc55512-0324-4e59-8686-2c97488645ca": "0x000000ff",
    "fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1": "25.91",
    "a250e630-2572-402a-af6e-e36136793a42": "9.0",
    "748ef0ef-9e2c-493e-ad09-d908404f289c": "0x76808285",
    "b5bf6f12-a078-4417-a4ae-d2049807178c": "false",
    "ac947279-5f74-46ec-93c6-a3fdac0a9eb0": "false",
    "9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d": "0.5",
    "03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1": "1",
    "44d398e1-f057-4d3f-8446-2f8e38703b86": "1",
    "00d82c20-556f-4710-bff6-84e43117f680": "31",
    "f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720": "0,0;0.1,0.5;0.5,0.9;1,1",
    "62738150-ac17-418d-81ab-2876c45a413e": "2",
    "ac762528-d92e-4d5a-8c48-e364432e61e9": "41",
    "cc667ffa-3487-46e8-8b36-48ae1cd78efa": "0",
    "39881cea-9d0d-4879-99ee-6ed1d4c0574d": "0x161515ff",
    "74a9482f-e1bb-4b5e-9dff-a182a2b738b4": "1.0",
    "ea2fe86c-71b3-459e-8bd3-e056db0b5e8d": "0x1d1b1bff",
    "34db677e-094f-4ca3-ba28-1ffa0c21c9c0": "0x111111ff",
    "251d59ff-4c5d-4a33-94bb-31fafb7df894": "1.0",
    "c0a88d51-ae73-40f8-bc5d-97ccb3e605d0": "0.0",
    "50033fab-4882-439f-8413-a68a99314ed2": "0",
    "5422df73-826b-4478-88d3-016cf74499f6": "0",
    "33ab6af5-42db-494e-834e-0f652a911a85": "1",
    "fb34be77-f67f-4ee9-989e-c8baf24eacf1": "1",
    "f0f25a06-82aa-4584-b4ab-2f39c4e71651": "30",
    "7920797e-f807-4b15-b964-d97d9a9d58a2": "0",
    "734e8f5c-4006-47e6-b84f-61df7fb0dde2": "0,0;0.1,0.4;0.4,0.8;1,1",
    "cb15151e-0bb2-4895-b40d-3184fe772fe1": "0x6e6969ff",
    "94f3a489-2284-42b9-875d-554a28bfd7c2": "0.0",
    "7b5d938d-b964-4f31-bd97-e36008869962": "0xd7d8d4ff",
    "a4fa915b-bbc1-47d4-8f55-5b4d71e12400": "0.0",
    "7935dece-7133-4678-a77e-a3dd54c8e114": "36",
    "cbdf47f8-4e69-45ce-bc08-dda011276a06": "0",
    "0c908c83-7337-42f5-896a-005f9b10f33c": "0",
    "8620773c-238b-4627-ba8e-2d1c0995b089": "your name",
    "9e898618-6cce-4a45-bc4d-ea7bbd9af54f": "4",
    "7a55821d-3981-4eb8-9a4c-26b7e275e56c": "0,0;1,1",
    "3afee937-c9ca-487d-b912-165b4be705be": "2",
    "ef670dec-8b9c-4f01-8dec-072095cceb5a": "2",
    "56fa370a-8b83-4bd6-9797-f1e0897faac3": "3",
    "6bebc909-bc55-448c-b316-4d9acb7e1c9a": "0",
    "c01258ac-67a5-4ab2-968e-e368f3391b63": "true",
    "55f308a4-1f48-4319-93c2-19fc11f04865": "0x000000ff",
    "c1ed3412-a8ca-4b21-ba9d-cd16ac8a7021": "0x918484ff",
    "2c1f868d-5b6f-4eb0-8e59-4ef5e52e2f8c": "1.0",
    "95dcfa93-c88e-4804-a541-3e441d4f4d63": "yourname@email.com",
  };
  export const girlsbikejsonParameters = {
    "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false",
    "eea4374e-a513-4f61-924a-f8175351fa8b": "540",
    "15c239d7-8130-41d2-8470-342335fcfb5f": "12",
    "d1f726c0-fb21-4f15-8f11-06ba73e0f3a9": "65",
    "c4d4c978-5b58-49ce-a567-739894dc5d36": "31",
    "972de871-83ed-4243-9510-f4c2ab3228a3": "0",
    "6eac979f-e146-4021-8439-0cf495cf0431": "1",
    "815b0eaf-cd38-4638-8bde-5f6ac27739d0": "429",
    "beff3154-f6bd-494e-998b-13f9660e9506": "500",
    "98f0a457-b4e5-44ea-8e55-8577941d49ad": "72.0",
    "64ecfdab-39bb-4d5c-a11d-b98690404bf9": "535",
    "09aa3a63-8d46-4b67-b87b-b4b869e5befd": "74.3",
    "3902e965-6a81-4d91-a8c0-e65209a882a3": "16",
    "4ec438ea-a490-434b-82ea-88f84f67f6b7": "38",
    "7dc55512-0324-4e59-8686-2c97488645ca": "0x000000ff",
    "fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1": "20.00",
    "a250e630-2572-402a-af6e-e36136793a42": "8.0",
    "748ef0ef-9e2c-493e-ad09-d908404f289c": "0x76808285",
    "b5bf6f12-a078-4417-a4ae-d2049807178c": "false",
    "ac947279-5f74-46ec-93c6-a3fdac0a9eb0": "false",
    "9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d": "0.5",
    "03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1": "0",
    "44d398e1-f057-4d3f-8446-2f8e38703b86": "0",
    "00d82c20-556f-4710-bff6-84e43117f680": "31",
    "f4a8c8c8-5f5d-4995-8d5c-fc6a89baa720": "0,0;0.1,0.5;0.5,0.9;1,1",
    "62738150-ac17-418d-81ab-2876c45a413e": "4",
    "ac762528-d92e-4d5a-8c48-e364432e61e9": "48",
    "cc667ffa-3487-46e8-8b36-48ae1cd78efa": "1",
    "39881cea-9d0d-4879-99ee-6ed1d4c0574d": "0x161515ff",
    "74a9482f-e1bb-4b5e-9dff-a182a2b738b4": "1.0",
    "ea2fe86c-71b3-459e-8bd3-e056db0b5e8d": "0x917f7fff",
    "34db677e-094f-4ca3-ba28-1ffa0c21c9c0": "0x111111ff",
    "251d59ff-4c5d-4a33-94bb-31fafb7df894": "1.0",
    "c0a88d51-ae73-40f8-bc5d-97ccb3e605d0": "0.0",
    "50033fab-4882-439f-8413-a68a99314ed2": "1",
    "5422df73-826b-4478-88d3-016cf74499f6": "0",
    "33ab6af5-42db-494e-834e-0f652a911a85": "1",
    "fb34be77-f67f-4ee9-989e-c8baf24eacf1": "1",
    "f0f25a06-82aa-4584-b4ab-2f39c4e71651": "30",
    "7920797e-f807-4b15-b964-d97d9a9d58a2": "0",
    "734e8f5c-4006-47e6-b84f-61df7fb0dde2": "0,0;0.1,0.4;0.4,0.8;1,1",
    "cb15151e-0bb2-4895-b40d-3184fe772fe1": "0x6e6969ff",
    "94f3a489-2284-42b9-875d-554a28bfd7c2": "0.0",
    "7b5d938d-b964-4f31-bd97-e36008869962": "0x0a0a0aff",
    "a4fa915b-bbc1-47d4-8f55-5b4d71e12400": "0.8",
    "7935dece-7133-4678-a77e-a3dd54c8e114": "19",
    "cbdf47f8-4e69-45ce-bc08-dda011276a06": "1",
    "0c908c83-7337-42f5-896a-005f9b10f33c": "0",
    "8620773c-238b-4627-ba8e-2d1c0995b089": "your name",
    "9e898618-6cce-4a45-bc4d-ea7bbd9af54f": "2",
    "7a55821d-3981-4eb8-9a4c-26b7e275e56c": "0,0;1,1",
    "3afee937-c9ca-487d-b912-165b4be705be": "2",
    "ef670dec-8b9c-4f01-8dec-072095cceb5a": "2",
    "56fa370a-8b83-4bd6-9797-f1e0897faac3": "2",
    "6bebc909-bc55-448c-b316-4d9acb7e1c9a": "2",
    "c01258ac-67a5-4ab2-968e-e368f3391b63": "true",
    "55f308a4-1f48-4319-93c2-19fc11f04865": "0x000000ff",
    "c1ed3412-a8ca-4b21-ba9d-cd16ac8a7021": "0xfef8f8ff",
    "2c1f868d-5b6f-4eb0-8e59-4ef5e52e2f8c": "1.0",
    "95dcfa93-c88e-4804-a541-3e441d4f4d63": "yourname@email.com",
  };

  export const canyonendurance7jsonParameters = {
    "7088e5a1-f07f-49c3-b1f6-98e74ae3734c": "false",
    "eea4374e-a513-4f61-924a-f8175351fa8b": "543",
    "15c239d7-8130-41d2-8470-342335fcfb5f": "15",
    "d1f726c0-fb21-4f15-8f11-06ba73e0f3a9": "73",
    "c4d4c978-5b58-49ce-a567-739894dc5d36": "48",
    "972de871-83ed-4243-9510-f4c2ab3228a3": "0",
    "6eac979f-e146-4021-8439-0cf495cf0431": "1",
    "815b0eaf-cd38-4638-8bde-5f6ac27739d0": "421",
    "beff3154-f6bd-494e-998b-13f9660e9506": "522",
    "98f0a457-b4e5-44ea-8e55-8577941d49ad": "73.0",
    "64ecfdab-39bb-4d5c-a11d-b98690404bf9": "546",
    "09aa3a63-8d46-4b67-b87b-b4b869e5befd": "73.5",
    "3902e965-6a81-4d91-a8c0-e65209a882a3": "15",
    "4ec438ea-a490-434b-82ea-88f84f67f6b7": "43",
    "fbb5d1c5-9ede-49e3-8d68-5b5a7d390ce1": "26.00",
    "a250e630-2572-402a-af6e-e36136793a42": "9.0",
    "748ef0ef-9e2c-493e-ad09-d908404f289c": "0x76808285",
    "b5bf6f12-a078-4417-a4ae-d2049807178c": "false",
    "9c43fdf1-d21d-4c8f-b8a3-b7d9602bfe1d": "0.5",
    "03c193b3-bbc9-491b-b4d5-1a2b48a4e0d1": "0",
    "44d398e1-f057-4d3f-8446-2f8e38703b86": "0",
    "00d82c20-556f-4710-bff6-84e43117f680": "31",
    "62738150-ac17-418d-81ab-2876c45a413e": "5",
    "ac762528-d92e-4d5a-8c48-e364432e61e9": "48",
    "cc667ffa-3487-46e8-8b36-48ae1cd78efa": "0",
    "39881cea-9d0d-4879-99ee-6ed1d4c0574d": "0x141313ff",
    "ea2fe86c-71b3-459e-8bd3-e056db0b5e8d": "0x0e0e0eff",
    "34db677e-094f-4ca3-ba28-1ffa0c21c9c0": "0x0e0e0eff",
    "50033fab-4882-439f-8413-a68a99314ed2": "1",
    "5422df73-826b-4478-88d3-016cf74499f6": "0",
    "33ab6af5-42db-494e-834e-0f652a911a85": "1",
    "fb34be77-f67f-4ee9-989e-c8baf24eacf1": "1",
    "f0f25a06-82aa-4584-b4ab-2f39c4e71651": "30",
    "7920797e-f807-4b15-b964-d97d9a9d58a2": "0",
    "cb15151e-0bb2-4895-b40d-3184fe772fe1": "0x6e6969ff",
    "7b5d938d-b964-4f31-bd97-e36008869962": "0x131312ff",
    "7935dece-7133-4678-a77e-a3dd54c8e114": "18",
    "cbdf47f8-4e69-45ce-bc08-dda011276a06": "0",
    "0c908c83-7337-42f5-896a-005f9b10f33c": "0",
    "8620773c-238b-4627-ba8e-2d1c0995b089": "your name",
    "9e898618-6cce-4a45-bc4d-ea7bbd9af54f": "1",
    "7a55821d-3981-4eb8-9a4c-26b7e275e56c": "0,0;1,1",
    "3afee937-c9ca-487d-b912-165b4be705be": "2",
    "ef670dec-8b9c-4f01-8dec-072095cceb5a": "2",
    "56fa370a-8b83-4bd6-9797-f1e0897faac3": "7",
    "6bebc909-bc55-448c-b316-4d9acb7e1c9a": "2",
    "95dcfa93-c88e-4804-a541-3e441d4f4d63": "yourname@email.com"
  };
  
  export const bikeTemplates: BikeTemplate[] = [
    {
      id: 'vulz_road',
      image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Screenshot_2025-01-13_at_20.33.05_adrmtv.png',
      name: 'VULZ Road',
      modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
      parameters: VulzParameters,
      type: 'vulz'
    },
    { 
        id: 'Canyon Bike',
        image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Canyon-bike_zitfqq.png',
        name: 'Canyon Bike',
        modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
        parameters: CanyonParameters,
        type: 'default'
      },
      {
        id: 'Classic road bike',
        image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/classic-road-bike_zmqq8b.png',
        name: 'Classic road bike',
        modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
        parameters: ClassicroadbikejsonParameters,
        type: 'default'
      },
      {
        id: 'Girls bike',
        image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/girls-bike_j3kyi2.png',
        name: 'Girls bike',
        modelStateId: '9d74c500-e310-45bc-8c63-6dd2ee132cc6',
        parameters: girlsbikejsonParameters,
        type: 'default'
      },
      {
        id: 'Canyon Endurance 7',
        image: 'https://res.cloudinary.com/da8qnqmmh/image/upload/Canyon-bike_zitfqq.png',
        name: 'Canyon Endurance 7',
        modelStateId: '9d74e8ca-fbd2-4fae-8b88-91dd3132e316',
        parameters: canyonendurance7jsonParameters,
        type: 'default'
      }



  ];