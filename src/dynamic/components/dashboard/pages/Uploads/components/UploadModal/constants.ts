const componentGroups = [
  "Frame and Fork",
  "Battery and Electrical Components",
  "Drivetrain",
  "Brakes",
  "Wheels and Tires",
  "Controls and Accessories"
];

const components = {
  "Frame and Fork": ["Frame", "Fork"],
  "Battery and Electrical Components": ["Battery", "Motor", "MotorController", "Display", "PAS", "Wiring"],
  "Drivetrain": ["Crankset", "BottomBracket", "Chain", "Belt Drive", "Cassette", "Internally Geared Hub", "Derailleur", "Gear shifter"],
  "Brakes": ["Disc Brake", "V-Brake", "Brake Rotor"],
  "Wheels and Tires": ["Tire", "Rim", "Front Hub", "Rear Hub", "Inner Tube", "Rim Tape"],
  "Controls and Accessories": ["Handlebar", "Stem", "Grips", "Grip Tape", "Saddle", "Seat Post", "Pedals", "Kick Stand", "Fenders", "Lights"]
};

const subCategories = {
  "Frame": ["Step Thru", "Gravel", "Road", "Mountain", "Enduro", "Cross Country", "Hybrid"],
  "Fork": ["Rigid", "Suspension"],
  "Battery": ["Internal", "External"],
  "Motor": ["Front Hub Motor", "Rear Hub Motor", "Mid-Motor"],
  "Display": ["External", "Top Tube Integrated", "Handlebar Integrated"],
  "PAS": ["Cadence", "Torque"],
  "Crankset": ["Square Tapered", "HollowTech"],
  "BottomBracket": ["Square Tapered", "HollowTech", "Octalink"],
  "Derailleur": ["Rear", "Front"],
  "Gear shifter": ["Front Trigger Shift", "Rear Trigger Shift", "Grip Shift"],
  "Disc Brake": ["Lever", "Calliper"],
  "V-Brake": ["Lever", "Calliper"],
  "Brake Rotor": ["Centre Mount", "6 Bolt"],
  "Handlebar": ["Riser Handlebars", "Dropdown Bars", "Bullhorn Bars"],
  "Grips": ["Lock-on", "Push fit"],
  "Saddle": ["Regular", "Suspension"],
  "Seat Post": ["Standard", "Layback", "Integrated Light", "Dropper", "Suspension"],
  "Pedals": ["Platform", "SPD", "Toe Clip"],
  "Lights": ["External", "Integrated Light"],
};

interface Variant {
  name: string;
  type: "string" | "number" | "boolean" | "color" | "select";
  options?: string[];
}

const allVariants: { [key: string]: Variant[] } = {
  "Frame": [
    {
      name: "Type",
      type: "select",
      options: ["Mens", "Womens", "Kids"]
    }
  ],
  "Suspension": [
    {
      name: "Crown",
      type: "select",
      options: ["Single crown", "Triple Crown"]
    },
  ],
  "Internal": [
    {
      name: "Integration",
      type: "select",
      options: ["Fully Integrated", "Semi-Integrated"]
    },
    {
      name: "Voltage",
      type: "number",
    }
  ],
  "PAS": [
    {
      name: "Protocol",
      type: "select",
      options: ["UART", "CANBUS"]
    }
  ],
  "Derailleur": [
    {
      name: "Type",
      type: "select",
      options: ["Electric", "Mechanical"]
    }
  ],
  "Gear shifter": [
    {
      name: "Type",
      type: "select",
      options: ["Mechanical", "Electric"]
    }
  ],
  "Grip Shift": [
    {
      name: "Type",
      type: "select",
      options: ["Front", "Rear"]
    }
  ],
  "Disc Brake": [
    {
      name: "Type",
      type: "select",
      options: ["Mechanical", "Hydraulic"]
    }
  ],
  "Rim": [
    {
      name: "Width",
      type: "number",
    },
    {
      name: "Diameter",
      type: "number",
    },
    {
      name: "Spoke Holes",
      type: "number",
    },
    {
      name: "Tubeless Compatible",
      type: "boolean"
    },
    {
      name: "Valve Type",
      type: "select",
      options: ["Presta", "Schrader"]
    }
  ],
  "Front Hub": [
    {
      name: "Axel Type",
      type: "select",
      options: ["Axel", "Threaded"]
    },
    {
      name: "Diameter",
      type: "number"
    },
    {
      name: "Width",
      type: "number"
    },
    {
      name: "Spoke Holes",
      type: "number"
    },
    {
      name: "Disc Rotor Mounts",
      type: "boolean"
    }
  ],
  "Rear Hub": [
    {
      name: "Axel Type",
      type: "select",
      options: ["Axel", "Threaded"]
    },
    {
      name: "Diameter",
      type: "number"
    },
    {
      name: "Width",
      type: "number"
    },
    {
      name: "Spoke Holes",
      type: "number"
    },
    {
      name: "Disc Rotor Mounts",
      type: "boolean"
    }
  ],
  "Application": [
    {
      name: "Size Options",
      type: "select",
      options: ["Size Options", "Application", "Tubeless Compatible"]
    },
    {
      name: "Application",
      type: "select",
      options: ["Size Options", "Application", "Tubeless Compatible"]
    },
    {
      name: "Tubeless Compatible",
      type: "boolean"
    }
  ],
  "Inner Tube": [
    {
      name: "Size Options",
      type: "select",
    },
    {
      name: "Valve",
      type: "select",
      options: ["Presta", "Schrader"]
    }
  ],
  "Rim Tape": [
    {
      name: "Size Options",
      type: "select",
    },
  ],
  "Handlebar": [
    {
      name: "Clamp Size",
      type: "select",
    },
    {
      name: "Width",
      type: "number",
    }
  ],
  "Stem": [
    {
      name: "Length",
      type: "number",
    },
    {
      name: "Clamp Diameter",
      type: "number",
    }
  ],
  "Grip Tape": [
    {
      name: "Colour",
      type: "color",
    }
  ],
  "Saddle": [
    {
      name: "Diameter",
      type: "number",
    }
  ],
  "Seat Post": [
    {
      name: "Diameter",
      type: "number",
    },
    {
      name: "Length",
      type: "number",
    }
  ],
  "Lights": [
    {
      name: "Integrated power",
      type: "boolean",
    },
    {
      name: "Internal Battery",
      type: "boolean",
    }
  ],
  "Calliper": [
    {
      name: "Type",
      type: "select",
      options: ["Mechanical", "Hydraulic"]
    }
  ],
};

export { componentGroups, components, subCategories, allVariants };
export type { Variant };