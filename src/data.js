export const rules = {
    terrain: [
        // mountains, grasslands, coast, forrest, dungeon
        // name, materials array, 
        {
            name:"mountains",
            materials:["earth","stone","ice"],
            // materials:[{name:"earth",percent:60},{name:"stone",percent:25},{name:"ice",percent:15}],
        },
        {
            name:"grasslands",
            materials:["plant","wood","water"],
        },
        {
            name:"forest",
            materials:["wood","plant","earth"],
        },
        {
            name:"coast",
            materials:["sand","water","stone"],
        },
        {
            name:"dungeon",
            materials:["stone","earth","trap"],
        },
    ],
    materialsColor:{
        earth:'brown',
        stone:'grey',
        ice:'lightblue',
        plant:'green',
        wood:'sandybrown',
        water:'blue',
        sand:'tan',
        trap:'red',
    }
    //     {
    //         name:"earth",
    //         color:"brown",
    //     },
    //     {
    //         name:"stone",
    //         color:"grey",
    //     },
    //     {
    //         name:"ice",
    //         color:"lightblue",
    //     },
    //     {
    //         name:"plant",
    //         color:"green",
    //     },
    //     {
    //         name:"wood",
    //         color:"light brown",
    //     },
    //     {
    //         name:"water",
    //         color:"blue",
    //     },
    //     {
    //         name:"sand",
    //         color:"tan",
    //     },
    //     {
    //         name:"trap",
    //         color:"black",
    //     },
    // ],
}