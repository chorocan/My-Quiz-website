const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
let quizQuestion = document.getElementById('quiz-question');

const quizQuestions = [
    "Which car is made in germanty?",
    "What's the captial of the United States of America?",
    "What was the first Youtube video?",
    "Who is the tallest person in the world?",
    "How much is an iphone 11?"
]

const quizAnswers = [
    ["BMW", "Toyota"],
    ["Washington, D.C.", "New York"],
    ["Me at the zoo", "Charlie bit my finger"],
    ["Robert Wadlow", "Sultan Kösen"],
    ["$699", "$999"]
]

function randomQuestion(){
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    quizQuestion.textContent = quizQuestions[randomIndex];  
    option1.textContent = quizAnswers[randomIndex][0];
    option2.textContent = quizAnswers[randomIndex][1];  
    
    option1.onclick = function(){
        randomQuestion();
    }

    option2.onclick = function(){
        alert("No!");
    }
}

randomQuestion();