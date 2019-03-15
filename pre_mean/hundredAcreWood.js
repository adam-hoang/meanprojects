var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var owl = { character: "Owl" };
var christopher = { character: "Christopher" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };

tigger.north = pooh;
pooh.south = tigger;
pooh.west = piglet;
pooh.north = christopher;
pooh.east = bees;
piglet.north = owl;
piglet.east = pooh;
bees.west = pooh;
bees.north = rabbit;
owl.south = piglet;
owl.east = christopher;
christopher.south = pooh;
christopher.west = owl;
christopher.north = kanga;
christopher.east = rabbit;
rabbit.south = bees; 
rabbit.west = christopher;
rabbit.east = gopher;
gopher.west = rabbit;
kanga.south = christopher;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

var player = { location: tigger };

function move(str) {
    if(str == "north" && player.location.north != null){
        player.location = player.location.north
        if (player.location.character == "Bees" || player.location.character == "Heffalumps"){
            console.log("You are now at " + player.location.character + "' house.")
        }
        else {
        console.log("You are now at " + player.location.character + "'s house.")
        }
    } 
    else if(str == "east" && player.location.east != null){
        player.location = player.location.east
        if (player.location.character == "Bees" || player.location.character == "Heffalumps"){
            console.log("You are now at " + player.location.character + "' house.")
        }
        else {
        console.log("You are now at " + player.location.character + "'s house.")
        }
    } 
    else if(str == "south" && player.location.south != null){
        player.location = player.location.south
        if (player.location.character == "Bees" || player.location.character == "Heffalumps"){
            console.log("You are now at " + player.location.character + "' house.")
        }
        else {
        console.log("You are now at " + player.location.character + "'s house.")
        }
    } 
    else if(str == "west" && player.location.west != null){
        player.location = player.location.west
        if (player.location.character == "Bees" || player.location.character == "Heffalumps"){
            console.log("You are now at " + player.location.character + "' house.")
        }
        else {
        console.log("You are now at " + player.location.character + "'s house.")
        }
    } 
    else {
        console.log("You may not go that way!")
    }
}

// document.onkeydown = function(e){
//     if(e.keyCode == 37){
//         move("west");
//     }
//     else if(e.keyCode == 38){
//         move("north");
//     }
//     else if(e.keyCode == 39){
//         move("east");
//     }
//     else if(e.keyCode == 40){
//         move("south");
//     }
// }
