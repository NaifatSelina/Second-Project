const question = document.getElementById('#question');
const answers = document.getElementsByClassName('.question-btns');

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions = [];

let questions = [
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'Which year was Spider-Man released?', 
        answer1: '2004', 
        answer2: '2000',
        answer3: '2002',
        answer4: '1999',
        answer: 3,
    },
    {
        question: 'Who played Spider-Man in the Amazing Spider-man movies?', 
        answer1: 'Tom Holland', 
        answer2: 'Andrew Garfield',
        answer3: 'Toby Maguire',
        answer4: 'Timothee Chalament',
        answer: 2,
    },
    {
        question: 'Which part of New York does Spider-Man reside in?', 
        answer1: 'The Bronx', 
        answer2: 'Queens',
        answer3: 'Manhattan',
        answer4: 'Brooklyn',
        answer: 2,
    },
    {
        question: 'What villian killed Uncle Ben in the first Spider-Man movie?', 
        answer1: 'Green Goblin', 
        answer2: 'The Lizard',
        answer3: 'Venom',
        answer4: 'Sandman',
        answer: 4,
    },
    {
        question: 'What is the name of the company Norman Osborn is head of?', 
        answer1: 'OSCORP', 
        answer2: 'OSWARP',
        answer3: 'OSWALD',
        answer4: 'OSBOURNES',
        answer: 1,
    },
    {
        question: 'Who stated the famous quote, "With great power comes great responsibility."?', 
        answer1: 'May Parker', 
        answer2: 'Norman Osbourn',
        answer3: 'Ben Parker',
        answer4: 'Mary Jane Watson',
        answer: 3,
    },
    {
        question: 'In the Spider-Man movies based in the MCU, who makes Spider-Mans suit?', 
        answer1: 'Peter Parker', 
        answer2: 'Tony Stark',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 2,
    },
    {
        question: 'How did Octavius lose his wife in Spider-Man 2?', 
        answer1: 'Spider-Man accidently killed her', 
        answer2: 'Fell off a building during an attack',
        answer3: "Radiation from Octavius's experiment",
        answer4: "Glass shards from Octavius' sun experiment",
        answer: 4,
    },
    {
        question: 'Who wrote the original Spider-Man comics?', 
        answer1: 'J.K Rowling', 
        answer2: 'Walt Disney',
        answer3: 'Stan Lee',
        answer4: 'Matt Groening',
        answer: 3,
    },
];

const max_questions = 10;

startGame = () => {
    availableQuestions = [...questions]
    getNewQuestion()
}
