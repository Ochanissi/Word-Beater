window.addEventListener('load', init);
// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'runaway',
    'joke',
    'developer',
    'javascript'
];


// Initialize Game
function init() {
 // Load word from array
 showWord(words);
 
 //Call countdown every second
 setInterval(countdown, 1000);
 // Check game status
 setInterval(checkStatus, 50);
}

// Pick & Show Random Word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown() {
    // Make sure time is not run out
    if(time > 0) {
            //Decremenet
            time--;
    } else if(time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check Game Status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
    }
}