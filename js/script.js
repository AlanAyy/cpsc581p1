// Define the structure of the story using a linked list
class Page {
    constructor(texts = [], nextPage = null) {
        this.texts = texts; // Array of text for each div
        this.nextPage = nextPage;
    }
}

class DecisionPage {
    constructor(pageTexts = [], nextPages = []) {
        this.pageTexts = pageTexts; // Array of choices text
        this.nextPages = nextPages; // Array of next pages corresponding to each choice
    }
}

// Create pages
const pages = [
    // Introduction
    new Page([
        "You wake up on a cold, storm-battered beach. The salty air stings your skin, and debris from a shipwreck surrounds you.",
        "You don't remember how you got here, but you know one thing—you must survive.",
        "Your clothes are soaked, and the roar of waves crashes behind you. What will you do first?"
    ]),

    // Explore or Search for Items
    new DecisionPage([
        "Search the wreckage for supplies.",
        "Explore the dense forest ahead.",
        "Walk along the beach."
    ]),

    // Searching the Wreckage
    new Page([
        "You scour the debris. The shattered remains of a ship lie scattered across the shore.",
        "Amidst the wreckage, you find a length of rope, a rusty dagger, and a torn piece of a map.",
        "These items could prove useful on your journey."
    ]),

    // Exploring the Forest
    new Page([
        "You step into the dense forest. The trees loom overhead, and the underbrush rustles with hidden creatures.",
        "A faint sound catches your attention from the right—a low, guttural growl.",
        "Suddenly, you're aware that you are not alone."
    ]),

    // Walking Along the Beach
    new Page([
        "You walk along the shoreline, keeping the forest to your right and the endless ocean to your left.",
        "A large wooden crate lies partially buried in the sand, likely washed ashore like yourself."
    ]),

    // Decision to Fight, Flee, or Investigate the Sound (in the forest)
    new DecisionPage([
        "Investigate the growling sound.",
        "Sneak away and avoid the danger.",
        "Charge into the forest, ready to fight."
    ]),

    // Investigate the Growl (Bear encounter)
    new Page([
        "You carefully approach the source of the sound. A bear, larger than any you've seen, stands over a fallen human body.",
        "The bear growls deeply, sensing your presence. What will you do?"
    ]),

    // Decision to Fight or Flee from the Bear
    new DecisionPage([
        "Fight the bear head-on.", 
        "Try to sneak up on the bear from behind.", 
        "Flee deeper into the forest."
    ]),

    // Fight the Bear Outcome (Random chance: failure)
    new Page([
        "You attempt to sneak behind the bear, but a sharp snap of a branch gives you away!",
        "The bear turns and charges. You barely have time to react!"
    ]),

    // Flee Deeper into the Forest (Cliff encounter)
    new Page([
        "You dash through the trees, the bear hot on your heels. The ground beneath you slopes sharply, leading to a sheer cliff.",
        "Ahead, you have two choices: leap down the cliff, or fight the bear at the edge."
    ]),

    // Climbing Down the Cliff (Rope check required)
    new Page([
        "You throw your rope around a sturdy rock and begin your descent down the steep cliff. It's a dangerous climb, but you manage to make it halfway.",
        "Below you, the entrance to a dark cave beckons. Will you explore it?"
    ]),

    // Decision to Enter the Cave or Continue
    new DecisionPage([
        "Enter the cave.",
        "Continue down the cliff to the forest floor."
    ]),

    // Enter the Cave (Find Dwarven City)
    new Page([
        "You step into the cave, and to your surprise, the darkness gives way to the flickering light of torches.",
        "The deeper you go, the more you realize this is no ordinary cave. You stumble into an underground city, bustling with gnomes and dwarves.",
        "Before you, the Iron Shield Guild, a powerful faction, seems to be recruiting."
    ]),

    // Beach Path - Explore the Crate
    new Page([
        "You open the large crate to find dried rations, a length of chain, and a leather pouch filled with gold coins.",
        "Just as you collect the items, the sound of approaching voices from behind startles you."
    ]),

    // Decision to Hide, Fight, or Flee (Pirate encounter on the beach)
    new DecisionPage([
        "Hide behind the crate.", 
        "Prepare to fight the approaching figures.", 
        "Run toward the forest."
    ]),

    // Joining the Dwarves' Guild
    new Page([
        "The leader of the Iron Shield Guild greets you warmly. 'A traveler, eh? You’ve arrived at an opportune time.'",
        "'We have a job for someone of your skills. A rival faction, the Black Dwarves, are planning an attack. Will you help us disrupt them?'"
    ]),

    // Decision to Help the Guild or Investigate Black Dwarves
    new DecisionPage([
        "Agree to help the Iron Shield Guild.", 
        "Decline the offer and explore the city.", 
        "Secretly investigate the Black Dwarves."
    ]),

    // Secret Investigation of the Black Dwarves (requires stealth check)
    new Page([
        "You decide to secretly investigate the Black Dwarves. Their hidden camp is heavily guarded, but you manage to sneak past their sentries.",
        "As you eavesdrop, you hear talk of a dangerous alliance forming. But suddenly, a figure in the shadows approaches."
    ]),

    // Finding the Dagger (Brother's clue)
    new Page([
        "While searching the city, you come across a merchant selling a dagger. Something about it feels familiar.",
        "As you inspect it, you notice the name 'Sam' engraved on the hilt—your brother’s name.",
        "This dagger once belonged to him. It’s a clue, but what could it mean?"
    ]),

    // Final Decision - Search for Brother in the Enchanted Forest or Mercenary Camp
    new DecisionPage([
        "Follow the clue to the Enchanted Forest.",
        "Head to the distant Mercenary Camp."
    ]),

    // Enchanted Forest Path (Random chance - survive magical dangers)
    new Page([
        "You venture into the Enchanted Forest, where the trees whisper and the air shimmers with magic.",
        "Strange, twisting paths lie ahead, and without guidance, you could become hopelessly lost."
    ]),

    // Mercenary Camp Path (Brother encounter)
    new Page([
        "You arrive at the mercenary camp, where you find your brother Sam among a group of hardened fighters.",
        "'Nazareth?' he says, his eyes widening in surprise. 'What are you doing here?'",
        "You have a choice to make: convince him to return with you or join him in his new life."
    ]),

    // Decision to Convince Brother or Join Mercenaries
    new DecisionPage([
        "Convince your brother to return home with you.",
        "Join him and become a mercenary yourself."
    ]),

    // Multiple Endings
    new Page([
        "After a long and perilous journey, you and your brother make it back home, your bond stronger than ever.",
        "You’ve both learned much on this adventure, but the world is vast, and your journeys are far from over."
    ]),

    new Page([
        "You decide to stay with your brother in the mercenary camp. Together, you rise to prominence as a powerful force, leaving your past life behind.",
        "But at what cost?"
    ])
];

// Set up the linked list with choices
pages[0].nextPage = pages[1];
pages[1].nextPages = [pages[2], pages[3], pages[4]]; // 3 choices: search wreckage, explore forest, walk beach
pages[2].nextPage = pages[6]; // From wreckage, go to beach encounter
pages[3].nextPage = pages[5]; // From forest, go to bear encounter
pages[4].nextPage = pages[9]; // From beach path, go to crate encounter
pages[5].nextPages = [pages[7], pages[8], pages[8]]; // Bear encounter, fight/flee options
pages[7].nextPage = pages[8]; // Fight bear leads to cliffside
pages[8].nextPages = [pages[10], pages[6]]; // Cliff descent, with cave or continue
pages[9].nextPages = [pages[11], pages[5], pages[4]]; // Crate encounter: hide, fight, flee
pages[10].nextPage = pages[12]; // Cave exploration leads to dwarven city
pages[11].nextPage = pages[13]; // Join dwarves, decision to help or investigate
pages[12].nextPage = pages[14]; // Explore city after joining guild
pages[13].nextPage = pages[15]; // Secret investigation of Black Dwarves
pages[14].nextPage = pages[16]; // Discovering the brother’s dagger
pages[15].nextPages = [pages[17], pages[18]]; // Final choice: enchanted forest or mercenary camp
pages[16].nextPage = pages[19]; // Enchanted forest
pages[17].nextPage = pages[20]; // Mercenary camp
pages[18].nextPages = [pages[21], pages[22]]; // Final decision: return home or stay as mercenary
pages[19].nextPage = pages[23]; // Return home ending
pages[20].nextPage = pages[24];

let currentPage = pages[0];
let selectedChoiceIndex = 0;  


const bookContainer = document.getElementById('book');
const choiceBtn = document.getElementById('choice-btn');


function generateChoiceBoxes(numChoices) {
    bookContainer.innerHTML = '';
    
    bookContainer.className = 'book';
    if (numChoices === 2) {
        bookContainer.classList.add('grid-2');
    } else if (numChoices === 3) {
        bookContainer.classList.add('grid-3');
    } else if (numChoices === 4) {
        bookContainer.classList.add('grid-4');
    }

    for (let i = 0; i < numChoices; i++) {
        const div = document.createElement('div');
        div.classList.add('choice-box');
        div.id = `choice-${i + 1}`;
        bookContainer.appendChild(div);
    }
}


function displayPage(page) {
    resetHighlights();

    if (page instanceof Page) {
        generateChoiceBoxes(2);  // Regular pages have 2 choices (left and right)
        document.getElementById('choice-1').innerText = page.texts[0];
        document.getElementById('choice-2').innerText = page.texts[1];
    } else if (page instanceof DecisionPage) {
        const numChoices = page.pageTexts.length;
        generateChoiceBoxes(numChoices);  // Dynamically generate choice boxes based on number of choices

        // Display choices dynamically
        page.pageTexts.forEach((text, index) => {
            document.getElementById(`choice-${index + 1}`).innerText = text;
        });

        highlightDecisionState(numChoices);
    }
}

function highlightDecisionState(numChoices) {
    choiceBtn.classList.add('highlight'); 
    highlightChoice(1); 
}

function resetHighlights() {
    choiceBtn.classList.remove('highlight');
    document.querySelectorAll('.choice-box').forEach(box => {
        box.classList.remove('highlight');
    });
    selectedChoiceIndex = 0;  
}


function highlightChoice(choiceIndex) {
    document.querySelectorAll('.choice-box').forEach(box => {
        box.classList.remove('highlight');
    });
    document.getElementById(`choice-${choiceIndex}`).classList.add('highlight');
}

let clickTimeout = null;
const DOUBLE_CLICK_DELAY = 300; 


choiceBtn.addEventListener('click', () => {
    if (currentPage instanceof DecisionPage) {
        if (clickTimeout !== null) {
            clearTimeout(clickTimeout);
            clickTimeout = null;
            makeChoice(selectedChoiceIndex);  
        } else {
            clickTimeout = setTimeout(() => {
                clickTimeout = null;
                const numChoices = currentPage.pageTexts.length;
                selectedChoiceIndex = (selectedChoiceIndex + 1) % numChoices;  
                highlightChoice(selectedChoiceIndex + 1);  
            }, DOUBLE_CLICK_DELAY);
        }
    }
});


choiceBtn.addEventListener('dblclick', () => {
    if (currentPage instanceof DecisionPage) {
        makeChoice(selectedChoiceIndex);  // Make the choice based on the selected box
    }
});



bookContainer.addEventListener('click', () => {
    if (currentPage instanceof DecisionPage) {
        makeChoice(selectedChoiceIndex);  // Make the choice based on the selected box
    } else if (currentPage.nextPage) {
        currentPage = currentPage.nextPage;
        displayPage(currentPage);
    }
});

// Make the choice and move to the next page
function makeChoice(choiceIndex) {
    currentPage = currentPage.nextPages[choiceIndex];  // Move to the selected page
    displayPage(currentPage);
    resetHighlights();
}

// Display the initial page
displayPage(currentPage);
