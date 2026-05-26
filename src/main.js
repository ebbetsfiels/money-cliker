// get our HTML into JavaScript
let clicker = document.getElementById("clicker")
let display = document.getElementById("display")

let score = 0

// When clicker button is pressed
clicker.addEventListener("click", function() {
    // Increase score by 1
    score ++
    // Update paragraph with score 
    display.innerText = score
})

