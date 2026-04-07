
const userNumber = document.querySelector('#userNumber')
const checkBtn = document.querySelector('#checkBtn')
const display = document.querySelector('#display-all')
const playAgain = document.querySelector('#playAgain')
const newGame = document.querySelector('#newGame')



const aiNumberDisplay = document.querySelector('#aiNumberDisplay')
aiNumberDisplay.innerHTML = `AI Thinking`




// AI NUMBER HERE
let aiNumber = Math.floor(Math.random() * 21);



// Luck here
const luck = document.querySelector('#luck')

luckNumber = 5;
luck.innerHTML = `Luck ${luckNumber}`;

const luckFunction = () => {
    luckNumber --;
    luck.innerHTML = `Luck ${luckNumber}`;

    if(luckNumber == 0) {
        display.innerHTML = 'AI is winner!'
        display.style.color = 'green'
        checkBtn.style.display = 'none'
    }
}



// Score Count
const score = document.querySelector('#score')

let scoreNumber = 0
score.innerHTML = `Score : ${scoreNumber}`

const scoreCount = () => {
    scoreNumber ++;
    score.innerHTML = `Score ${scoreNumber}`;
}


// highScore
let highScore = localStorage.getItem('highScore') || 0;

const highScoreDisplay = document.querySelector('#highScoreDisplay')
highScoreDisplay.innerHTML = `High Score: ${highScore}`;




checkBtn.addEventListener('click', () => {
    
    
    
    const value = Number(userNumber.value)

    if(!value) {
        display.innerHTML = 'Your number is empty'
        display.style.color = 'red'
    } else if (value >= 21) {
        display.innerHTML = 'Your number is too high'
        display.style.color = 'red'
    } else if (value < 0) {
        display.innerHTML = 'Your number is too low'
        display.style.color = 'red'
    } else {
        console.log(aiNumber);

        luckFunction();

        if(value > aiNumber) {
            display.innerHTML = 'Guess is too high'
            display.style.color = 'gold'
        } else if (value < aiNumber){
            display.innerHTML = 'Guess is too low'
            display.style.color = 'gold'
        } else {
            
            display.innerHTML = 'Congratulation You are win!'
            display.style.color = 'green'

            scoreCount();

            if(scoreNumber > highScore) {
                localStorage.setItem("highScore", scoreNumber)
                highScoreDisplay.innerHTML = `High Score: ${scoreNumber}`;
            }
            

            checkBtn.style.display = 'none'
            aiNumberDisplay.innerHTML = `${aiNumber}`
        }
        
    }
    
})



playAgain.addEventListener('click', () => {

    // reset all
    userNumber.value = ''
    display.innerHTML = 'Start Again'

    luckNumber = 5
    luck.innerHTML = `Luck ${luckNumber}`

    aiNumberDisplay.innerHTML = "AI Thinking"
    checkBtn.style.display = 'block'

    aiNumber = Math.floor(Math.random() * 21)

})

newGame.addEventListener('click', () => {
    // reset all
    userNumber.value = ''
    display.innerHTML = 'Start Guessing'

    luckNumber = 5
    luck.innerHTML = `Luck ${luckNumber}`

    aiNumberDisplay.innerHTML = "AI Thinking"
    checkBtn.style.display = 'block'

    aiNumber = Math.floor(Math.random() * 21)

    // highScore = localStorage.setItem("highScore", 0)
    highScore = localStorage.removeItem("highScore")
    highScoreDisplay.innerHTML = `High Score: 0`;
    let scoreNumber = 0
    score.innerHTML = `Score : ${scoreNumber}`
})