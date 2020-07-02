
document.addEventListener('DOMContentLoaded', () => {

//variables setup    
const square = document.querySelectorAll('.square')
const moleA = document.querySelectorAll('.moleA')
const moleB = document.querySelectorAll('.moleB')
const timeLeft = document.querySelectorAll('#time-left')
let score = document.querySelectorAll('#score')

let result = 0;

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

    })
    let randomPosition = square[Math.floor(Math.random() *42)]
    let moles = ['moleA', 'moleB', 'moleC', 'moleD', 'moleE', 'moleF', 'moleG', 'moleH', 'moleI', 'moleJ', 'moleK', 'moleL', 'moleM', 'moleN']
    let randomMole = (moles.sort(() => 0.5 - Math.random()))[0]
    randomPosition.classList.add(randomMole)
    hitPosition = randomPosition.id
}
//Adding click reaction to every square
square.forEach(element => {
    element.addEventListener('mouseup', () => {
        if (element.id == hitPosition){
            result = result +1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

})