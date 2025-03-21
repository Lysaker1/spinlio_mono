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
    "Battery and Electrical Components": ["Battery", "Motor", "MotorController", "Display", "PAS", "Wiring", "Lights"],
    "Drivetrain": ["Crankset", "BottomBracket", "Chain", "Belt Drive", "Cassette", "Internally Geared Hub", "Derailleur", "Gear shifter"],
    "Brakes": ["Disc Brake", "V-Brake", "Brake Rotor"],
    "Wheels and Tires": ["Tire", "Rim", "Front Hub", "Rear Hub", "Inner Tube", "Rim Tape"],
    "Controls and Accessories": ["Handlebar", "Stem", "Grips", "Grip Tape", "Saddle", "Seat Post", "Pedals", "Kick Stand", "Fenders"]
  };
  
  const subCategories = {
    "Frame": ["Step Thru", "Gravel", "Road", "Mountain", "Enduro", "Cross Country", "Hybrid"],
    "Fork": ["Rigid", "Suspension"],
    "Battery": ["Internal", "External"],
    "Motor": ["Front Hub Motor", "Rear Hub Motor", "Mid-Motor"],
    "Display": ["External", "Top Tube Integrated", "Handlebar Integrated"],
    "PAS": ["Cadence", "Torque"],
    "Lights": ["External", "Integrated Light"],
    "Wiring": ["Internal", "External"],
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
  };
  
  export { componentGroups, components, subCategories };