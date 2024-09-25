// Define the structure of the story using a linked list
class Page {
    constructor(leftText, rightText, nextPage = null) {
        this.leftText = leftText;
        this.rightText = rightText;
        this.nextPage = nextPage;
    }
}

class DecisionPage extends Page {
    constructor(leftText, rightText, leftPage = null, rightPage = null) {
        super(leftText, rightText);
        this.leftPage = leftPage;
        this.rightPage = rightPage;
    }
}

// Create pages
const pages = [
    new Page("Once upon a time, in a land far away...", "There was a brave knight on a quest."),
    new Page("He ventured into the forest to find a lost artifact.", "The trees were dense, and the air was cold."),
    new Page("Suddenly, the path split into two...", "Should he go left or right?"),

    new DecisionPage("He chose the left path.", "He chose the right path."),
    new Page("He chose the left path.", "It led to a hidden cave."),
    new Page("He chose the right path.", "It led to a dark forest."),

    new Page("Both paths converged at a river.", "The knight faced many challenges and crossed safely."),
    new Page("The knight reached his destination.", "But the journey was far from over...")
];

// Set up the linked list with choices
pages[0].nextPage = pages[1];
pages[1].nextPage = pages[2];
pages[2].nextPage = pages[3];

pages[3].nextLeft = pages[4];  // Choice to go left
pages[3].nextRight = pages[5]; // Choice to go right

pages[4].nextPage = pages[6];  // Both paths converge
pages[5].nextPage = pages[6];

pages[6].nextPage = pages[7];
pages[6].nextPage = pages[7];

// Start at the first page
let currentPage = pages[0];
let selectedPage = '';

// DOM elements
const leftPage = document.getElementById('left-page');
const rightPage = document.getElementById('right-page');
const turnPageBtn = document.getElementById('turn-page-btn');
const choiceBtn = document.getElementById('choice-btn');
const arrow = document.getElementById('arrow');

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
    choiceBtn.classList.remove('highlight');
    arrow.classList.add('hidden');
}

// Turn the page (if not making a choice)
turnPageBtn.addEventListener('click', () => {
    if (currentPage.nextPage) {
        currentPage = currentPage.nextPage;  // Default to left if no choice
        displayPage(currentPage);
        if (currentPage instanceof DecisionPage) {
            turnPageBtn.classList.add('disabled');  // Disable "Turn Page" button
            choiceBtn.classList.add('highlight');  // Highlight "Make Choice" button

            // Highlight choice
            leftPage.classList.add('highlight');
            rightPage.classList.add('highlight');
        }
    }
});

// Handle choice button
choiceBtn.addEventListener('click', () => {
    if (currentPage instanceof DecisionPage) {
        if (selectedPage === '') {
            arrow.classList.remove('hidden');
        }

        if (selectedPage === 'left') {
            selectedPage = 'right';
            arrow.classList.remove('left');
            arrow.classList.add('right');
        } else {
            selectedPage = 'left';
            arrow.classList.remove('right');
            arrow.classList.add('left');
        }
    }
});

// Confirm the choice when clicking the selected page
leftPage.addEventListener('click', () => {
    if (selectedPage === 'left') {
        makeChoice('left');
    }
});

rightPage.addEventListener('click', () => {
    if (selectedPage === 'right') {
        makeChoice('right');
    }
});

function makeChoice(choice) {
    if (choice === 'left') {
        currentPage = currentPage.nextLeft;  // Go left
    } else {
        currentPage = currentPage.nextRight;  // Go right
    }

    displayPage(currentPage);
    resetHighlights();

    turnPageBtn.classList.remove('disabled');
}

// Display the initial page
displayPage(currentPage);
