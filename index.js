let lastIndex = null
let index = null

function getDateIdea() {

    do {
        index = Math.floor(Math.random() * dateIdeas.length);
    }while (index === lastIndex);
    lastIndex = index;

    document.getElementById('output1').innerHTML = "Dippy says,";
    document.getElementById('output2').innerHTML = "\t" + dateIdeas[index];

}

dateIdeas = [
    "Go bowling at Arsenal Lanes",
    "Play overcooked co-op",
    "Play pickleball",
    "Go to bird on the run",
    "Go to disco night at belvederes",
    "Go play mini golf",
    "Go to hammock in Schenley park",
    "Go to a farmers market",
    "Watch a Studio Ghibli movie",
    "Go to noodle head",
    "Make a recipe from the SIMPLE cookbook",
    "Make a recipe from the Spanish cookbook",
    "Hey :)",
    "Make Audrey's sushi bowl recipe",
    "Make Marzetti",
    "Go to first food and friends",
    "Noodle and noodles",
    "Go to the library",
    "Plant heist",
    "Have a charcuterie night",
    "Go to bicycle heaven",
    "Go to a penguins game",
    "Go to the aviary", 
    "Take salsa lessons",
    "Go to oliver's Donuts",
    "Go to the duolingo taqueria",
    "Go to the Heinz museum",
    "Go ice skating",
]