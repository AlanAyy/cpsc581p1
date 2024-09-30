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
    // 0. Introduction -> Explore or Search for Items
    new Page([
        "You wake up on a cold, storm-battered beach. The salty air stings your skin, and debris from a shipwreck surrounds you.",
        "You don't remember how you got here, but you know one thing—you must survive.",
    ]),
    new Page([
        "Your clothes are soaked, and the roar of waves crashes behind you.",
        "What will you do first?"
    ]),

    // 1. Explore or Search for Items -> 3 choices
    new DecisionPage([
        "Search the wreckage for supplies.", // Searching the Wreckage
        "Explore the dense forest ahead.", // Exploring the Forest
        "Walk along the beach." // Walking Along the Beach
    ]),

    // 2. Searching the Wreckage -> Explore or Search for Items
    new Page([
        "You scour the debris. The shattered remains of a ship lie scattered across the shore.",
        "Amidst the wreckage, you find a length of rope, a rusty dagger, and a torn piece of a map. These items could prove useful on your journey.",
    ]),
    // ITEM: Rope, Dagger, Map

    // 3. Exploring the Forest
    new Page([
        "You step into the dense forest. The trees loom overhead, and the underbrush rustles with hidden creatures.",
        "A faint sound catches your attention from the right — a low, guttural growl."
    ]),
    new Page([
        "Suddenly, you're aware that you are not alone.", ""
    ]),

    // 4. Walking Along the Beach
    new Page([
        "You walk along the shoreline, keeping the forest to your right and the endless ocean to your left.",
        "A large wooden crate lies partially buried in the sand, likely washed ashore like yourself."
    ]),

    // 5. Decision to Fight, Flee, or Investigate the Sound (in the forest)
    new DecisionPage([
        "Investigate the growling sound.", // Investigate the Growl
        "Sneak away and avoid the danger.", // Sneak Behind the Bear
        "Charge into the forest, ready to fight." // Charge into the Forest
    ]),

    // 6. Investigate the Growl -> Bear Encounter Decision
    new Page([
        "You carefully approach the source of the sound. A bear, larger than any you've seen, stands over a fallen human body.",
        "The bear growls deeply, sensing your presence. What will you do?"
    ]),

    // 7. Bear Encounter Decision
    new DecisionPage([
        "Fight the bear head-on.", // Fight the Bear
        "Try to sneak up on the bear from behind.", // Sneak Behind the Bear
        "Flee deeper into the forest." // Flee Deeper into the Forest
    ]),

    // 8. Sneak Behind the Bear -> Fight the Bear
    new Page([
        "You attempt to sneak behind the bear, but a sharp snap of a branch gives you away!",
        "The bear turns and charges. You barely have time to react!"
    ]),

    // Charge into the Forest -> Fight the Bear
    new Page([
        "You charge at the sound, ready to face whatever danger lies ahead.",
        "As you push through the underbrush, you come face to face with a massive bear!"
    ]),

    // Fight the Bear -> Bear Final Decision
    new Page([
        "The bear's massive paw swipes at you, knocking you to the ground. You struggle to your feet, but the bear is relentless.",
        "You must make a choice: fight back or run for your life."
    ]),

    // Bear Final Decision -> 2 choices
    new DecisionPage([
        "Fight the bear with all your might.", // Die in the Bear Encounter
        "Run for your life." // Flee Deeper into the Forest
    ]),

    // Die in the Bear Encounter -> JOURNEY ENDS
    new Page([
        "You fight with all your strength, but the bear is too powerful. With a final roar, it strikes you down, and darkness envelops you.",
        "Your journey ends here."
    ]),

    // 9. Flee Deeper into the Forest
    new Page([
        "You dash through the trees, the bear hot on your heels. The ground beneath you slopes sharply, leading to a sheer cliff.",
        "Ahead, you have two choices: leap down the cliff, or fight the bear at the edge."
    ]),

    // Cliff Decision
    new DecisionPage([
        "Leap down the cliff.", // Leap Down the Cliff
        "Try to push the bear off the cliff." // Fight the Bear at the
    ]),

    // 10. Climbing Down the Cliff (Rope check successful) -> Cave Exploration
    new Page([
        "You throw your rope around a sturdy rock and begin your descent down the steep cliff. It's a dangerous climb, but you manage to make it halfway.",
        "Below you, the entrance to a dark cave beckons. Will you explore it?"
    ]),

    // Climbing Down the Cliff (Rope check failed) -> JOURNEY ENDS
    new Page([
        "You attempt to climb down the cliff, but without a rope, the sheer drop proves too treacherous.",
        "You fall, crashing through branches and rocks, until you hit the forest floor with a bone-jarring thud."
    ]),
    new Page([
        "You lie there, battered and bruised. Your vision blurs, and the world fades to black.",
        "Your journey ends here."
    ]),

    // 11. Decision to Enter the Cave or Continue
    new DecisionPage([
        "Enter the cave.", // Enter the Cave
        "Continue down the cliff to the forest floor."
    ]),

    // Forest Exploration
    new Page([
        "You step into the dense forest. The air grows colder, and the trees seem to whisper with every gust of wind.",
        "The deeper you go, the more the forest feels alive, with rustling leaves and strange sounds surrounding you.",
        "Suddenly, you come across a split in the path ahead."
    ]),

    // Decision: Follow Strange Lights or Deeper into the Forest
    new DecisionPage([
        "Follow the strange flickering lights in the distance.",
        "Continue deeper into the thick of the forest."
    ]),

    // Follow the Strange Lights
    new Page([
        "You cautiously follow the flickering lights. They lead you through a narrow trail that winds between massive, twisted trees.",
        "Soon, you arrive at a small glade where a group of figures stands silently. They seem to be ghostly beings of lost children, their big eyes glowing in the dark.",
        "They seem to beckon you closer. What will you do?"
    ]),

    // Decision: Approach the Ghostly Figures or Flee
    new DecisionPage([
        "Approach the ghostly figures.",
        "Flee back the way you came."
    ]),

    // Approach Ghostly Figures (Random Chance)
    new Page([
        "\"We know why you're here,\" the ghostly figures whisper. \"You want to find your brother, don't you?\"",
        "\"Come! We'll show you the way!\" says the youngest one. \"But you have to trust us.\" says the taller one."
    ]),

    // Decision: Enter the Dark Cave or Refuse
    new DecisionPage([
        "Follow the ghostly figures and enter the cave.",
        "Refuse their offer and continue your journey alone."
    ]),

    // Enter the Cave (Connects to Dwarven City)
    new Page([
        "You follow the ghostly figures into the cave. The darkness swallows you, and the path ahead grows narrow and treacherous.",
        "The ghosts vanish as you descend deeper, leaving you alone in the cave's depths.",
        "After a long walk, the cave opens up into a massive underground city. The flickering lights of torches reveal a bustling world of gnomes and dwarves.",
        "The Iron Shield Guild stands before you, its banners flying high."
        // Connect to the previously created Dwarven City page.
    ]),

    // Flee Back to the Forest (Avoiding Ghosts)
    new Page([
        "Deciding that the figures cannot be trusted, you turn and flee back into the forest. The ghostly figures do not follow, but the eerie feeling lingers as you go deeper into the woods.",
        "After some time, you come across a river. The water is swift, and on the other side, you see a wooden raft moored at the bank."
    ]),

    // Deeper into the Forest
    new Page([
        "You ignore the lights and push further into the heart of the forest. The trees grow denser, their branches forming a canopy so thick that only faint beams of light filter through.",
        "You begin to feel lost, but soon you hear the sound of rushing water. You push through the undergrowth to find a river cutting through the forest."
    ]),

    // Decision: Cross the River or Follow It
    new DecisionPage([
        "Cross the river using a fallen log.",
        "Follow the river downstream."
    ]),

    // Crossing the River (Random Chance)
    new Page([
        "You carefully step onto the fallen log that spans the river. The current below is swift, and a single misstep could send you tumbling into the water.",
        "Roll for Dexterity: Success means you cross safely. Failure means you fall into the river, getting swept downstream."
    ]),

    // Fall into the River (Swept Away - Sailing Path)
    new Page([
        "Your foot slips, and you plunge into the icy water. The river sweeps you downstream with terrifying speed, the currents pulling you further from the forest.",
        "After what feels like hours, you are thrown onto a riverbank, drenched and exhausted.",
        "In the distance, you see a small harbor town. Sailboats are moored along the docks, and the sea stretches out beyond them."
    ]),

    // Decision: Investigate the Harbor Town or Rest
    new DecisionPage([
        "Investigate the harbor town.",
        "Rest by the river and recover your strength."
    ]),

    // Investigating the Harbor Town
    new Page([
        "You walk into the harbor town, feeling the eyes of the locals on you. It's a small, quiet place, but the air is thick with the scent of salt and the sound of waves crashing against the shore.",
        "A grizzled sailor approaches you, offering passage on his ship in exchange for help on the journey. He promises that the ship will take you to lands far beyond this forest."
    ]),

    // Decision: Sail to Another Land or Stay in the Forest
    new DecisionPage([
        "Sail with the sailor to new lands.",
        "Stay in the forest and continue your journey."
    ]),

    // Sailing to Another Land (New Path)
    new Page([
        "You accept the sailor's offer, and soon you're aboard the ship, sailing out into the open sea.",
        "The wind fills the sails, and the distant lands of the forest fade behind you. Your journey has only just begun, but where it will take you is uncertain."
        // This could lead to new lands and adventures in future expansions.
    ]),

    // Continuing Journey in the Forest (Leads to Dark Cave)
    new Page([
        "You decide to stay in the forest and continue your journey. The sailor watches you walk away, shaking his head in quiet disbelief.",
        "As you walk deeper into the forest, the terrain becomes rocky and uneven. You notice a cave entrance hidden beneath a large boulder.",
        "The air around the cave feels heavy with magic. Will you enter?"
    ]),

    // 12. Enter the Cave (Find Dwarven City)
    new Page([
        "You step into the cave, and to your surprise, the darkness gives way to the flickering light of torches.",
        "The deeper you go, the more you realize this is no ordinary cave. You stumble into an underground city, bustling with gnomes and dwarves.",
        "Before you, the Iron Shield Guild, a powerful faction, seems to be recruiting."
    ]),

    // 13. Beach Path - Explore the Crate
    new Page([
        "You open the large crate to find dried rations, a length of chain, and a leather pouch filled with gold coins.",
        "Just as you collect the items, the sound of approaching voices from behind startles you."
    ]),

    // 14. Decision to Hide, Fight, or Flee (Pirate encounter on the beach)
    new DecisionPage([
        "Hide behind the crate.", 
        "Prepare to fight the approaching figures.", 
        "Run toward the forest."
    ]),

    // 15. Joining the Dwarves' Guild
    new Page([
        "The leader of the Iron Shield Guild greets you warmly. 'A traveler, eh? You’ve arrived at an opportune time.'",
        "'We have a job for someone of your skills. A rival faction, the Black Dwarves, are planning an attack. Will you help us disrupt them?'"
    ]),

    // 16. Decision to Help the Guild or Investigate Black Dwarves
    new DecisionPage([
        "Agree to help the Iron Shield Guild.", 
        "Decline the offer and explore the city.", 
        "Secretly investigate the Black Dwarves."
    ]),

    // 17. Secret Investigation of the Black Dwarves (requires stealth check)
    new Page([
        "You decide to secretly investigate the Black Dwarves. Their hidden camp is heavily guarded, but you manage to sneak past their sentries.",
        "As you eavesdrop, you hear talk of a dangerous alliance forming. But suddenly, a figure in the shadows approaches."
    ]),

    // 18. Finding the Dagger (Brother's clue)
    new Page([
        "While searching the city, you come across a merchant selling a dagger. Something about it feels familiar.",
        "As you inspect it, you notice the name 'Sam' engraved on the hilt—your brother’s name.",
        "This dagger once belonged to him. It’s a clue, but what could it mean?"
    ]),

    // 19. Final Decision - Search for Brother in the Enchanted Forest or Mercenary Camp
    new DecisionPage([
        "Follow the clue to the Enchanted Forest.",
        "Head to the distant Mercenary Camp."
    ]),

    // 20. Enchanted Forest Path (Random chance - survive magical dangers)
    new Page([
        "You venture into the Enchanted Forest, where the trees whisper and the air shimmers with magic.",
        "Strange, twisting paths lie ahead, and without guidance, you could become hopelessly lost."
    ]),

    // 21. Mercenary Camp Path (Brother encounter)
    new Page([
        "You arrive at the mercenary camp, where you find your brother Sam among a group of hardened fighters.",
        "'Nazareth?' he says, his eyes widening in surprise. 'What are you doing here?'",
        "You have a choice to make: convince him to return with you or join him in his new life."
    ]),

    // 22. Decision to Convince Brother or Join Mercenaries
    new DecisionPage([
        "Convince your brother to return home with you.",
        "Join him and become a mercenary yourself."
    ]),

    // 23. Multiple Endings
    new Page([
        "After a long and perilous journey, you and your brother make it back home, your bond stronger than ever.",
        "You’ve both learned much on this adventure, but the world is vast, and your journeys are far from over."
    ]),

    // 24. Mercenary Camp Ending
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
pages[20].nextPage = pages[24]; // Stay as mercenary ending


let currentPage = pages[0];
let selectedChoiceIndex = 0;  // Tracks the current choice selection

// DOM elements
const bookContainer = document.getElementById('book');
const choiceBtn = document.getElementById('choice-btn');
const arrow = document.getElementById('arrow');

// Function to clear and generate choice boxes dynamically
function generateChoiceBoxes(numChoices) {
    // Clear existing content
    bookContainer.innerHTML = '';
    
    // Set grid class based on number of choices
    bookContainer.className = 'book';
    if (numChoices === 2) {
        bookContainer.classList.add('grid-2');
    } else if (numChoices === 3) {
        bookContainer.classList.add('grid-3');
    } else if (numChoices === 4) {
        bookContainer.classList.add('grid-4');
    }

    // Create the required number of choice boxes
    for (let i = 0; i < numChoices; i++) {
        const div = document.createElement('div');
        div.classList.add('choice-box');
        div.id = `choice-${i + 1}`;
        bookContainer.appendChild(div);
    }
}

// Function to display the current page
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

// Function to handle page highlights and button states for decision pages
function highlightDecisionState(numChoices) {
    choiceBtn.classList.add('highlight');  // Highlight "Make Choice" button

    // Initialize arrow pointing to the first choice
    arrow.classList.remove('hidden');
    moveArrow(1);  // Start by pointing to the first choice
}

// Reset the page highlights and arrow
function resetHighlights() {
    choiceBtn.classList.remove('highlight');
    arrow.classList.add('hidden');
    selectedChoiceIndex = 0;  // Reset the choice index
}

// Move the arrow to the selected choice
function moveArrow(choiceIndex) {
    const box = document.getElementById(`choice-${choiceIndex}`);
    const rect = box.getBoundingClientRect();
    const containerRect = bookContainer.getBoundingClientRect();
    arrow.style.top = `${rect.top - containerRect.top - 20}px`;
    arrow.style.left = `${rect.left + rect.width / 2 - containerRect.left}px`;
}

// Handle the choice button
choiceBtn.addEventListener('click', () => {
    if (currentPage instanceof DecisionPage) {
        const numChoices = currentPage.pageTexts.length;
        selectedChoiceIndex = (selectedChoiceIndex + 1) % numChoices;  // Cycle through choices
        moveArrow(selectedChoiceIndex + 1);  // Move arrow to the selected choice
    }
});

// Confirm the choice by clicking anywhere on the book
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
