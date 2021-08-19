let coinFlipButton = document.querySelector('#coinFlip')
let headsCounterElem = document.querySelector('#heads')
let tailsCounterElem = document.querySelector('#tails')
let headsPercentElem = document.querySelector('#heads-percents') 
let tailsPercentElem = document.querySelector('#tails-percents')
let coinImage = document.querySelector("#coinImg");
let headsCount = 0
let tailsCount = 0
let totalFlips = 0
let headsPercent = '0%'
let tailsPercent = '0%'

let headsImage = "./assets/images/penny-heads.jpg"
let tailsImage = "./assets/images/penny-tails.jpg"
let headsOrTails = true;

coinFlipButton.addEventListener('click', function(event){
    //show tailside
    //change to other image
    if (coinImage.src == headsImage){
        coinImage.src = headsImage
    }
    else{
        coinImage.src = tailsImage;
    }
    

    //TODO: calculate this
    let even = true;
    if (even){
        headsCount += 1;
    }
    else {
        tailsCount += 1;
    }
    totalFlips = headsCount + tailsCount;

    headsPercent = totalFlips / headsCount * 100 
    tailsPercent = totalFlips / tailsCount * 100

    // following line 8 run RanNumGen
    // if (ranNumGen = even)
    // adds 1 to scoreBoard and displays img of heads
    // else (ranNUmGen = odd)
    // adds 1 to scoreBoard and displays img of tails
})

// formula for heads percentage 
//1 flip w/ 1 heads and 0 tails = 100%
// 10 flips w/ 5 heads w/ 5 tails = 50%
// 11 flips w/ 5 heads w/ 6 tails = 50%
// heads/totalFlips * 100?

let RandomNumGen = Math.floor(Math.random()*10)

