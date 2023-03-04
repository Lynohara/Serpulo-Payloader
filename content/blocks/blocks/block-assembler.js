const blockAssembler = extend(Constructor, "Block Assembler", {
    size:3,
    health: 600,
    description: "Constructs blocks up to 2x2 in size. Ideal for Payload Mass Drivers with Copper Deconstructors",
    minBlockSize: 1,
    maxBlockSize: 2,
    hasPower: true,
    consumePower: 100,
    buildVisibility: shown,
    category: unit,
});
