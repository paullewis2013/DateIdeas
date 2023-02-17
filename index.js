// TODO future improvements:
// sort ideas into categories like cooking, outdoors, etc.
// dynamically load ideas from a file

let index = 0

function getDateIdea() {

    document.getElementById('output1').innerHTML = "Dippy says,";
    document.getElementById('output2').innerHTML = "\t" + dateIdeas[index];

    index = (index+1)%dateIdeas.length;
}

// fisher-yates shuffle
function shuffle(){
    for (let i = dateIdeas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dateIdeas[i], dateIdeas[j]] = [dateIdeas[j], dateIdeas[i]];
    }    
}

dateIdeas = [
    "Go bowling at Arsenal Lanes",
    "Play overcooked co-op",
    "Play pickleball",
    "Go to bird on the run",
    "Go to disco night at belvederes",
    "Go play mini golf",
    "Hammock in Schenley park",
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

shuffle()