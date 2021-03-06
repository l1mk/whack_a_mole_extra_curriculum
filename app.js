
document.addEventListener('DOMContentLoaded', () => {

//variables setup    
const square = document.querySelectorAll('.square')
const moleA = document.querySelectorAll('.moleA')
const moleB = document.querySelectorAll('.moleB')
const timeLeft = document.querySelector('#time-left')
const startBttn = document.querySelector('#start-pause')
const resetBttn = document.querySelector('#reset')
const instBtn = document.querySelector('#inst-Btn')
const instruction = document.querySelector('#instructions')
const top = document.querySelector('#top')
let score = document.querySelector('#score')
let topScore = 0
let result = 0;
let currentTime = timeLeft.textContent;
let gameOver = false;

//random mole and square
function randomSquare(){
    square.forEach(element => {
         element.classList.remove('moleA')
         element.classList.remove('moleB')
         element.classList.remove('moleC')
         element.classList.remove('moleD')
         element.classList.remove('moleE')
         element.classList.remove('moleF')
         element.classList.remove('moleG')
         element.classList.remove('moleH')
         element.classList.remove('moleI')
         element.classList.remove('moleJ')
         element.classList.remove('moleK')
         element.classList.remove('moleL')
         element.classList.remove('moleM')
         element.classList.remove('moleN')
         element.addEventListener('click', punch)
    })
    let randomPosition = square[Math.floor(Math.random() *42)]
    let moles = ['moleA', 'moleB', 'moleC', 'moleD', 'moleE', 'moleF', 'moleG', 'moleH', 'moleI', 'moleJ', 'moleK', 'moleL', 'moleM', 'moleN']
    let randomMole = (moles.sort(() => 0.5 - Math.random()))[0]
    randomPosition.classList.add(randomMole)
    hitPosition = randomPosition.id
    hitMole = randomMole
}

//Adding click reaction to every square
square.forEach(element => {
    element.addEventListener('mouseup', () => {
        if (element.id === hitPosition){
            if (hitMole === 'moleA' || hitMole == 'moleB' || hitMole === 'moleE' || hitMole == 'moleF'){
                result = result +4
                score.textContent = result
            }
            result = result +1
            score.textContent = result
        }
    })
})

let timerMove;
let timerId;
//move mole
function moveMole(){
    timerMove = null
    timerMove = setInterval(randomSquare, 1000)
}

//timer
function countDown(){
    currentTime = currentTime - 1
    timeLeft.textContent = currentTime
    if (currentTime === 0){
        clearInterval(timerId)
        clearInterval(timerMove)
        startBttn.textContent = 'Start'
        gameOver = true
        if (topScore < result){
            topScore = result
            top.innerHTML = `${topScore} by Player1`
        }
        alert('Game Over, Final score is ' + result)
    }
}
//punch
function punch(){
    this.classList.add('punch')
    setTimeout(() => this.classList.remove('punch'), 250)
}

//start-pause
function start(){
    console.log('clicked button')
    if (startBttn.textContent === 'Pause'){
        console.log('Pause')
        clearInterval(timerId)
        clearInterval(timerMove)
        startBttn.textContent = 'Start'
    } else if (startBttn.textContent === 'Start'){
        console.log('Start')
        moveMole()
        timerId = setInterval(countDown, 1000)
        startBttn.textContent = 'Pause'
        if (gameOver === true){
            result = 0
            score.textContent = result
            currentTime = 30
            timeLeft.textContent = currentTime
        }
    }

}

//reset
function reset(){
        clearInterval(timerId)
        clearInterval(timerMove)
        result = 0
        score.textContent = result
        currentTime = 30
        timeLeft.textContent = currentTime
        timerId = setInterval(countDown, 1000)
        gameOver = false
        moveMole()
    }

startBttn.addEventListener('click', start)
resetBttn.addEventListener('click', reset)
instBtn.addEventListener('click', () =>{
    if (instBtn.innerHTML === 'Instructions'){
     instBtn.innerHTML = 'Hide'
     instruction.style.display = 'block'
    } else if (instBtn.innerHTML === 'Hide'){
     instBtn.innerHTML = 'Instructions'
     instruction.style.display = 'none'  
    }
 })

})