document.addEventListener('DOMContentLoaded', () => {
    
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");

    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");

    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    
    const questions = [
        {
            question: "What does CPU stand for?",
            choices: ["Central Program Unit", 
                "Computer Power Unit",
                 "Central Processing Unit",
                  "Central Performance Unit"],
            answer: "Central Processing Unit",
        },
        {
            question: "Who is known as the father of computers?",
            choices: ["Steve Jobs", "Bill Gates", "Charles Babbage","Alan Turing"],
            answer: "Charles Babbage",
        },
        {
            question: "What is the speed of light?",
            choices: [
                "300,000 km/s",
                "3,000,000 km/s",
                "30,000 km/s",
                "3,000 km/s",
            ],
            answer: "300,000 km/s",
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz);

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    });

    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer) {
            score++;
        }
        nextBtn.classList.remove('hidden');
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }
});