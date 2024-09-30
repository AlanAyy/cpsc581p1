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
    new Page(["Once upon a time, in a land far away...", "There was a brave knight on a quest."]),
    new Page(["He ventured into the forest to find a lost artifact.", "The trees were dense, and the air was cold."]),
    new DecisionPage(["He chose the left path.", "He chose the right path.", "He climbed the mountain.", "He crossed the river."]),
    new Page(["He chose the left path.", "It passes by a hidden cave."]),
    new Page(["He chose the right path.", "It passes by a dark forest."]),
    new Page(["He climbed the mountain.", "The view from the top was breathtaking."]),
    new Page(["All paths converged at a river.", "The knight faced many challenges and crossed safely."]),
    new Page(["The knight reached his destination.", "But the journey was far from over..."]),
];

// Set up the linked list with choices
pages[0].nextPage = pages[1];
pages[1].nextPage = pages[2];

pages[2].nextPages = [pages[3], pages[4], pages[5], pages[7]]; // Four choices
pages[3].nextPage = pages[6];  // Left path
pages[4].nextPage = pages[6];  // Right path
pages[5].nextPage = pages[6];  // Mountain
pages[6].nextPage = pages[7];  // River

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
