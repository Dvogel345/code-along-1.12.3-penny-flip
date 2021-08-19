let coinFlipButton = document.querySelector('#coinFlip')
let headsCounter = document.querySelector('#heads')
let tailsCounter = document.querySelector('#tails')
let headsPercent = document.querySelector('#heads-percents') 
let tailsPercent = document.querySelector('#tails-percents')

coinFlipButton.addEventListener('click', function(event){
    alert('it was clicked')
    // following line 8 run RanNumGen
    // if (ranNumGen = even)
    // adds 1 to scoreBoard and displays img of heads
    // else (ranNUmGen = odd)
    // adds 1 to scoreBoard and displays img of tails
})

    // counter for percentage 

let RandomNumGen = Math.floor(Math.random()*10)

