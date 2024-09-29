class Page {
    constructor(leftText, rightText) {
        this.leftText = leftText;
        this.rightText = rightText;
        this.nextPage = null;
        this.prevPage = null; // Track the previous page
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

// Create pages
const pages = [
    new Page("In the small town of Kalgri, there lived a brave warrior named Mars...", "A heart of gold..."),
    new Page("Mars was known for his unwavering kindness...", "His courage was infectious..."),
    new Page("Those who tried to harm the villagers were met by Mars...", "Bards traveled across the land..."),
    new Page("As he looks out into the night sky...", "As he closes his eyes..."),
    new Page("As he opens his book of monsters...", "He rushes out of bed...")
];

// Connect pages
for (let i = 0; i < pages.length; i++) {
    if (i < pages.length - 1) {
        pages[i].nextPage = pages[i + 1]; // Connect next page
        pages[i + 1].prevPage = pages[i]; // Connect previous page
    }
}

// Start at the first page
let currentPage = pages[0];

// DOM elements
const leftPage = document.getElementById('left-page');
const rightPage = document.getElementById('right-page');
const compass = document.getElementById('compass');
const arrow = document.querySelector('.main-arrow');

// Function to display the current page
function displayPage(page) {
    if (page) {
        leftPage.innerText = page.leftText;
        rightPage.innerText = page.rightText;
    }
}

// Function to handle single click on the compass (next scenario)
function nextScenario() {
    console.log("Next scenario clicked!"); // Debugging line
    const rightPageElement = document.getElementById("right-page");

    // Check if there is a next page
    if (currentPage.nextPage) {
        rightPageElement.classList.toggle("flipped");

        setTimeout(() => {
            // Move to the next page and display it
            currentPage = currentPage.nextPage;
            displayPage(currentPage);

            // Reset the right page's flipped state after displaying the new page
            rightPageElement.classList.remove("flipped");
        }, 500); // Duration of the animation
    }
}

// Function to handle double click on the compass (choose option)
function chooseOption() {
    console.log("Choose option double-clicked!"); // Debugging line
    // Implement your logic here
}

// Reset highlights (if needed)
function resetHighlights() {
    leftPage.classList.remove('highlight');
    rightPage.classList.remove('highlight');
    compass.classList.remove('highlight');
    arrow.classList.add('hidden');
}

// Flip right page function
function flipRightPage() {
    const rightPageElement = document.getElementById("right-page");

    // Flip the right page if there is a next page
    if (currentPage.nextPage) {
        rightPageElement.classList.toggle("flipped");

        setTimeout(() => {
            // Move to the next page and display it
            currentPage = currentPage.nextPage;
            displayPage(currentPage);

            // Reset the right page's flipped state after displaying new page
            rightPageElement.classList.remove("flipped");
        }, 500); // Duration of the animation
    }
}

let isMoving = false; 

function moveLeftPage() {
    if (isMoving) return; 

    const leftPageElement = document.getElementById("left-page");
    
    if (currentPage.prevPage) {
        console.log("Moving to previous page:", currentPage.prevPage.leftText); // Log the left text of the previous page
        isMoving = true; 
        leftPageElement.classList.add("flipped");

        setTimeout(() => {
            currentPage = currentPage.prevPage; 
            displayPage(currentPage); 
            leftPageElement.classList.remove("flipped");
            isMoving = false; 
        }, 500); 
    } else {
        console.log("No previous page to go back to."); 
    }
}

// Initialize and display the first page
displayPage(currentPage);

// Add event listeners for the compass
compass.onclick = nextScenario; // Single click for next scenario
compass.ondblclick = chooseOption; // Double click for choosing option
