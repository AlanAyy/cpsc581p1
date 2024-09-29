class Page {
    constructor(leftText, rightText) {
        this.leftText = leftText;
        this.rightText = rightText;
        this.nextPage = null;
    }
}

class DecisionPage extends Page {
    constructor(leftText, rightText, option1, option2, option3, option4) {
        super(leftText, rightText);
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }
}
// Create pages (same as provided)
const pages = [
    new Page("In the small town of Kalgri, there lived a brave warrior named Mars. He wasn't the strongest, nor the smartest, but he possessed...", "A heart of gold, incorruptible by evil. \nA spirit of courage, rallying friends by his side."),
    new DecisionPage("Choose a quality:", "A heart of gold, incorruptible by evil.", "A spirit of courage, rallying friends by his side."),
    new Page("Mars was known for his unwavering kindness. He helped the elderly carry their groceries, rescued lost animals, and always had a kind word for everyone. His heart shone bright, a beacon of hope for the people of Kalgri.", "Mars was a natural leader. In times of trouble, he inspired the villagers to stand together. His courage was infectious, and with him leading the charge, the people of Kalgri felt invincible."),
    new Page("Those who tried to harm the villagers were soon met by Mars, who fought fiercely to protect those he loved. As the years went by, the town continued to celebrate his victories. Bards traveled across the land, spreading word of his legend.", "One night, Mars was awakened by a hushed wind. His candlelight flickered back and forth for a moment..."),
    new DecisionPage("What does Mars do?", "He looks out his window.", "He goes back to sleep."),
    new Page("As he looks out into the night sky, he spots a streak of red, glowing like a distant ember. It was an unusual sight, and his heart filled with a sense of foreboding.", "As he closes his eyes once more, the unsettling feeling lingers, and he spots a streak of red in the sky. He dismisses it, but sleep evades him as his thoughts swirl with worry."),
    new DecisionPage("Curious and concerned, Mars decides to...", "Check his almanac of beasts.", "Ask the city patrol what they saw."),
    new Page("As he opens his book of monsters, the wind picks up, turning the pages forcefully. The pages fly until the wind abruptly stops, revealing an illustration of a fearsome dragon. The book describes Malacron, The Raging Flame, a dragon painted in streaks of red and black. He flies by at night, once every full moon, cursing those who spot him.", "He rushes out of bed and asks the nearby city guard if they saw it too. The guard, a young woman named Elara, laughs nervously and says 'no...' and in a half-mocking tone, adds 'unless you mean...' Elara’s eyes widen with fear as she realizes Mars is serious. She whispers, 'Malacron, The Raging Flame.'"),
    new DecisionPage("Mars is faced with two thoughts:", "Whoever's doing this thinks they're funny.", "These guards think they're funny."),
    new Page("Mars can't shake the feeling that someone is playing a cruel prank. But the description of Malacron in his almanac is too vivid, too real.", "Mars feels a surge of frustration. The guards' dismissive attitudes do little to quell his fears. He knows he must take action."),
    new Page("'Your light has burned too bright,' Elara says, her voice trembling.", "Determined to protect his village, Mars rallies a group of trusted friends and warriors. They gather their weapons and armor, ready to face the impending threat."),
    new Page("The next day, Mars and his comrades set out to find Malacron. They journey through dense forests, treacherous mountains, and ancient ruins, facing numerous challenges along the way.", "They encounter wild beasts, navigate perilous paths, and solve ancient riddles left by long-forgotten civilizations."),
    new Page("As they near the dragon's lair, the air grows thick with smoke and the ground trembles beneath their feet. The sky darkens, and the faint glow of red can be seen in the distance.", "Mars and his friends steel themselves for the battle ahead."),
    new DecisionPage("Mars then faces a crucial decision:", "Set on fire.", "Fight the dragon."),
    new Page("In the heart of the dragon's lair, Mars confronts Malacron. He sets everything on fire.", "The battle is fierce. Flames engulf the cavern, and the clash of steel echoes through the mountains. Mars and his friends fight valiantly, but the dragon's power is overwhelming."),
    new Page("Just as all hope seems lost, Mars remembers the words of the ancient almanac: 'A heart of gold is not lost. It is shared between all who protect those in need.' With a final, desperate effort, Mars plunges his sword into the heart of Malacron.", "As Malacron lets out a deafening roar, he collapses in a burst of flames. The End."),
    new Page("No matter the choice...", "Grab the candle."),
    new DecisionPage("Because...", "A heart of gold is not lost. It is shared between all who protect those in need.", "A voice of courage is never quiet. It resonates between those who hear it and echoes in the souls of the living."),
    new Page("Light the candle.", "")
];

// Connect decision pages to outcomes
pages[0].nextPage = pages[1];
pages[1].nextPage = pages[2];
pages[1].leftPage = pages[2];
pages[1].rightPage = pages[3];
pages[2].nextPage = pages[3];
pages[3].nextPage = pages[4];
pages[4].nextPage = pages[5];
pages[5].nextPage = pages[6];
pages[6].nextPage = pages[7];
pages[6].leftPage = pages[8];
pages[6].rightPage = pages[9];
pages[8].nextPage = pages[10];
pages[9].nextPage = pages[10];
pages[10].nextPage = pages[11];
pages[11].nextPage = pages[12];
pages[12].nextPage = pages[13];
pages[13].nextPage = pages[14];
pages[14].nextPage = pages[15];
pages[15].nextPage = pages[16];
pages[16].nextPage = pages[17];
pages[17].nextPage = pages[18];
pages[18].nextPage = pages[19];
// Start at the first page
let currentPage = pages[0];

// DOM elements
const leftPage = document.getElementById('left-page');
const rightPage = document.getElementById('right-page');
const turnPageBtn = document.getElementById('turn-page-btn');
const compass = document.getElementById('compass');
const arrow = document.querySelector('.main-arrow');

// Function to display the current page
function displayPage(page) {
    if (page) {
        leftPage.innerText = page.leftText;
        rightPage.innerText = page.rightText;
    }
}

function resetHighlights() {
    leftPage.classList.remove('highlight');
    rightPage.classList.remove('highlight');
    compass.classList.remove('highlight');
    arrow.classList.add('hidden');
}

// Turn the page (if not making a choice)
turnPageBtn.addEventListener('click', () => {
    if (currentPage.nextPage) {
        // Start the animation
        rightPage.classList.add('flipped');

        setTimeout(() => {
            // Remove the animation class after the animation completes
            rightPage.classList.remove('flipped');

            // Move to the next page and display it
            currentPage = currentPage.nextPage;
            displayPage(currentPage);

            // Handle decision page logic
            if (currentPage instanceof DecisionPage) {
                turnPageBtn.classList.add('disabled');  // Disable "Turn Page" button
                compass.classList.add('highlight');  // Highlight compass

                // Highlight choice
                leftPage.classList.add('highlight');
                rightPage.classList.add('highlight');
            }
        }, 1000); // Duration of the animation (matches CSS transition duration)
    }
});


// Function to display the current page
function displayPage(page) {
    if (page) {
        leftPage.innerText = page.leftText;
        rightPage.innerText = page.rightText;
    }
}

function resetHighlights() {
    leftPage.classList.remove('highlight');
    rightPage.classList.remove('highlight');
    compass.classList.remove('highlight');
    arrow.classList.add('hidden');
}

// Turn the page (if not making a choice)
turnPageBtn.addEventListener('click', () => {
    if (currentPage.nextPage) {
        // Start the animation
        rightPage.classList.add('flipped');

        setTimeout(() => {
            // Remove the animation class after the animation completes
            rightPage.classList.remove('flipped');

            // Move to the next page and display it
            currentPage = currentPage.nextPage;
            displayPage(currentPage);

            // Handle decision page logic
            if (currentPage instanceof DecisionPage) {
                turnPageBtn.classList.add('disabled');  // Disable "Turn Page" button
                compass.classList.add('highlight');  // Highlight compass

                // Highlight choice
                leftPage.classList.add('highlight');
                rightPage.classList.add('highlight');
            }
        }, 1000); // Duration of the animation (matches CSS transition duration)
    }
});

let selectedOption = 0;

// Handle compass clicks
compass.addEventListener('click', () => {
    selectedOption = (selectedOption + 1) % 4;
    let angle;
    switch (selectedOption) {
        case 0:
            angle = 45; // NW
            break;
        case 1:
            angle = 135; // NE
            break;
        case 2:
            angle = 225; // SE
            break;
        case 3:
            angle = 315; // SW
            break;
    }
    arrow.style.transform = `translateY(-50%) rotate(${angle}deg)`;
});

compass.addEventListener('dblclick', () => {
    if (currentPage instanceof DecisionPage) {
        switch (selectedOption) {
            case 0:
                makeChoice('option1'); // NW
                break;
            case 1:
                makeChoice('option2'); // NE
                break;
            case 2:
                makeChoice('option3'); // SE
                break;
            case 3:
                makeChoice('option4'); // SW
                break;
        }
    }
});

function makeChoice(choice) {
    currentPage = currentPage[choice];  // Go to selected option
    displayPage(currentPage);
    resetHighlights();

    turnPageBtn.classList.remove('disabled');
}

// Display the initial page
displayPage(currentPage);

function makeChoice(choice) {
    currentPage = currentPage[choice];  // Go to selected option
    displayPage(currentPage);
    resetHighlights();

    turnPageBtn.classList.remove('disabled');
}

// Display the initial page
displayPage(currentPage);