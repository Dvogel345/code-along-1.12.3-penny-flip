// All flips array  tracks a count for each position
let allFlips = [0,0]

// Define a function that updates scoreboard so that both buttons can reuse it
let updateScoreBoard = function () {
    // calculate total num of flips
    let total = allFlips[0] + allFlips[1]

    // Create a variable to track percentages
    let allPercents = [0,0]

    // Before trying to divide, make sure the total is not zero
    if (total > 0) {
        //Calculate percentages and update scoreboard for each flip
        for (let i = 0; i < allFlips.length; i++) {
            // Get percentage for the roll
            allPercents[i] = Math.round((allFlips[i] / total) * 100)
        }
    }

    // Update the values in the scoreboard for each value
    for (let i = 0; i < allFlips.length; i++) {
        document.getElementById(`heads`).textContent = allFlips[1]
        document.getElementById(`tails`).textContent = allFlips[0]
        document.getElementById(`heads-percent`).textContent = allPercents[1] + '%'
        document.getElementById(`tails-percent`).textContent = allPercents[0] + '%'
    }
}

// Listen for DOMContentLoaded to ensure all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function(){
    // add event listeners and handlers for both buttons
    document.getElementById('coinFlip').addEventListener('click', function(){
        // determine coin flip using Math.random()
        let flippedValue = Math.ceil(Math.random()*2)

        // Display the result of the flip
        if (flippedValue == 1) {document.getElementById('message').textContent = `You flipped Tails!`}
        else {document.getElementById('message').textContent = `You flipped Heads!`}

        // Add one to the count of number of flips for the number
        allFlips[flippedValue - 1] += 1

        // Show different images for each coin
        if (flippedValue == 1) {document.getElementById('coinImg').src = `assets/images/penny-tails.jpg`}
        else {document.getElementById('coinImg').src = `assets/images/penny-heads.jpg`}
        // Update scoreboard
        updateScoreBoard()
    })

    document.getElementById('clear').addEventListener('click', function(){
        // Resets the flip values to zero
        allFlips = [0,0]
    })

    document.getElementById('message').textContent = 'Let\'s Get Flipping!'

    // Update scoreboard 
    updateScoreBoard()
})