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
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
    {
        question: 'What is Spider-Mans real name?', 
        answer1: 'Peter Parker', 
        answer2: 'Harry Osbourn',
        answer3: 'Steven Strange',
        answer4: 'Steve Rogers',
        answer: 1,
    },
];
