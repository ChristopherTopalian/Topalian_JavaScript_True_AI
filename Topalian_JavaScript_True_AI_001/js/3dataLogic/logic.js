// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// logic.js

let logic =
[
    {
        name: "And",
        imgSrcOffline: 'media/textures/topalianDiagrams/and.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/and_orig.png',
        function: "gateAnd(a, b)",
        formula: "if (a == 1 && b == 1)",
        opposite: "Nand",
        truthTable: "0001",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  0
        1  0  =  0
        1  1  =  1
        `
    },

    {
        name: "Nand",
        imgSrcOffline: 'media/textures/topalianDiagrams/nand.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/nand_orig.png',
        function: "gateNand(a, b)",
        formula: "if (a == 0 || b == 0)",
        opposite: "And",
        truthTable: "1110",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  1
        1  0  =  1
        1  1  =  0
        `
    },

    {
        name: "Or",
        imgSrcOffline: 'media/textures/topalianDiagrams/or.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/or_orig.png',
        function: "gateOr(a, b)",
        formula: "if (a == 1 || b == 1)",
        opposite: "Nor",
        truthTable: "0111",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  1
        1  0  =  1
        1  1  =  1
        `
    },

    {
        name: "Nor",
        imgSrcOffline: 'media/textures/topalianDiagrams/nor.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/nor_orig.png',
        function: "gateNor(a, b)",
        formula: "if (a == 0 && b == 0)",
        opposite: "Or",
        truthTable: "1000",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  0
        1  0  =  0
        1  1  =  0
        `
    },

    {
        name: "Xor",
        imgSrcOffline: 'media/textures/topalianDiagrams/xor.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/xor_orig.png',
        function: "gateXor(a, b)",
        formula: "if ((a == 1 && b == 0) || (a == 0 && b == 1))",
        opposite: "Xnor",
        truthTable: "0110",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  1
        1  0  =  1
        1  1  =  0
        `
    },

    {
        name: "Xnor",
        imgSrcOffline: 'media/textures/topalianDiagrams/xnor.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/xnor_orig.png',
        function: "gateXnor(a, b)",
        formula: "if ((a == 0 && b == 0) || (a == 1 && b == 1))",
        opposite: "Xor",
        truthTable: "1001",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  0
        1  0  =  0
        1  1  =  1
        `
    },

    {
        name: "Converse Implication",
        imgSrcOffline: 'media/textures/topalianDiagrams/converse_implication.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/converse-implication_orig.png',
        function: "gateCi(a, b)",
        formula: "if (a == 1 || b == 0)",
        opposite: "Converse NonImplication",
        truthTable: "1011",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  0
        1  0  =  1
        1  1  =  1
        `
    },

    {
        name: "Converse NonImplication",
        imgSrcOffline: 'media/textures/topalianDiagrams/converse_non_implication.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/converse-non-implication_orig.png',
        function: "gateCni(a, b)",
        formula: "if (a == 0 && b == 1)",
        opposite: "Converse Implication",
        truthTable: "0100",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  1
        1  0  =  0
        1  1  =  0
        `
    },

    {
        name: "Material Implication",
        imgSrcOffline: 'media/textures/topalianDiagrams/material_implication.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/material-implication_orig.png',
        function: "gateMi(a, b)",
        formula: "if (a == 0 || b == 1)",
        opposite: "Material NonImplication",
        truthTable: "1101",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  1
        1  0  =  0
        1  1  =  1
        `
    },

    {
        name: "Material NonImplication",
        imgSrcOffline: 'media/textures/topalianDiagrams/material_non_implication.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/material-non-implication_orig.png',
        function: "gateMni(a, b)",
        formula: "if (a == 1 && b == 0)",
        opposite: "Material Implication",
        truthTable: "0010",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  0
        1  0  =  1
        1  1  =  0
        `
    },

    {
        name: "Right Projection",
        imgSrcOffline: 'media/textures/topalianDiagrams/right_projection.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/right-projection_orig.png',
        function: "gateRp(a, b)",
        formula: "if ((a == 0 && b == 1) || (a == 1 && b == 1))",
        opposite: "Right Complementation",
        truthTable: "0101",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  1
        1  0  =  0
        1  1  =  1
        `
    },

    {
        name: "Right Complementation",
        imgSrcOffline: 'media/textures/topalianDiagrams/right_complementation.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/right-complementation_orig.png',
        function: "gateRc(a, b)",
        formula: "if ((a == 0 && b == 0) || (a == 1 && b == 0))",
        opposite: "Right Projection",
        truthTable: "1010",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  0
        1  0  =  1
        1  1  =  0
        `
    },

    {
        name: "Left Projection",
        imgSrcOffline: 'media/textures/topalianDiagrams/left_projection.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/left-projection_orig.png',
        function: "gateLp(a, b)",
        formula: "if (a == 1)",
        opposite: "Left Complementation",
        truthTable: "0011",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  0
        1  0  =  1
        1  1  =  1
        `
    },

    {
        name: "Left Complementation",
        imgSrcOffline: 'media/textures/topalianDiagrams/left_complementation.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/left-complementation_orig.png',
        function: "gateLc(a, b)",
        formula: "if (a == 0)",
        opposite: "Left Projection",
        truthTable: "1100",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  1
        1  0  =  0
        1  1  =  0
        `
    },

    {
        name: "Tautology",
        imgSrcOffline: 'media/textures/topalianDiagrams/tautology.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/tautology_orig.png',
        function: "gateTautology(a, b)",
        formula: "if ((a == 0 && b == 0) || (a == 0 && b == 1) || (a == 1 && b == 0) || (a == 1 && b == 1))",
        opposite: "Contradiction",
        truthTable: "1111",
        truthTableFormatted: `
        A  B
        0  0  =  1
        0  1  =  1
        1  0  =  1
        1  1  =  1
        `
    },

    {
        name: "Contradiction",
        imgSrcOffline: 'media/textures/topalianDiagrams/contradiction.png',
        imgSrcOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/contradiction_orig.png',
        function: "gateContradiction(a, b)",
        formula: "if ((a == 0 && b == 0) ||  (a == 0 && b == 1) || (a == 1 && b == 0) || (a == 1 && b == 1))",
        opposite: "Tautology",
        truthTable: "0000",
        truthTableFormatted: `
        A  B
        0  0  =  0
        0  1  =  0
        1  0  =  0
        1  1  =  0
        `
    }
];

