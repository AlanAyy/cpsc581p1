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
pages[2].nextPages = [pages[3], pages[4], pages[5], pages[7]];
pages[3].nextPage = pages[6];  
pages[4].nextPage = pages[6];  
pages[5].nextPage = pages[6];  
pages[6].nextPage = pages[7];  

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


// Handle confirming the choice with double click
choiceBtn.addEventListener('dblclick', () => {
    if (currentPage instanceof DecisionPage) {
        makeChoice(selectedChoiceIndex);  // Make the choice based on the selected box
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
