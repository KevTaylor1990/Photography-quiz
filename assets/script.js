const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++,
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hidden'),
    shuffledQuestions = questions.sort(() => Math.random() - .5),
    currentQuestionIndex = 0,
    questionContainerElement.classList.remove('hidden'),
    setNextQuestion()
}

function setNextQuestion() {}