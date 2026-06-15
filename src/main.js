import {Howl} from 'howler'


import soundEffectOneSrc from './assets/efg.wav'
import backgroundmusic from './assets/song.mp3'
import soundEffectTwoSrc from './assets/ok.wav'

const soundEffectOne = new Howl({
    src: [soundEffectOneSrc],
    volume: 0.5,
})
const soundEffectTwo = new Howl({
    src: [soundEffectOneSrc],
    volume: 0.3,
})
const backgroundMusic = new Howl({
    src: [backgroundmusic],
    volume: 0.3,
    loop: true,
    volume: 0.3,
})
// get our HTML into JavaScript
let clicker = document.getElementById("clicker")

let display = document.getElementById("display")

function upgradescore(ammount) {
    score += ammount
    display.innerText = score.toFixed(0) + '$'
}

let score = 0

// When clicker button is pressed
clicker.addEventListener("click", function () {
    let clickAmt = 1 + (clickers ** 1.05)
     soundEffectOne.play()
    upgradescore(clickAmt)
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let clickers = 0
upgradeOne.addEventListener("click", function () {
    if (score >= 100) {
        upgradescore(-100)
        clickers++
        upgradeOneCount.innerText = clickers + "types of clickers"
    } else {
        alert('YOU BROKE')
    }

})
let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeOneCount")
let creditCard = 0

upgradeTwo.addEventListener("click", function () {
    if (score >= 1500) {
        upgradescore(-1500)
        creditCard++
        upgradeTwoCount.innerText = clickers + "credit cards"
    } else {
        alert('YOU BROKE')
    }
    soundEffectTwo.play()
    upgradescore(clickAmt)
})

let upgradetree = document.getElementById("upgradetree")
let upgradetreeCount = document.getElementById("upgradetreeCount")
let Bank = 0

upgradetree.addEventListener("click", function () {
    if (score >= 150000) {
        upgradescore(-150000)
        Bank++
        upgradeTreeCount.innerText = clickers + "bank"
    } else {
        alert('YOU BROKE')
    }
    soundEffectTree.play()
    upgradescore(clickAmt)
})

let upgradefour = document.getElementById("upgradefour")
let upgradefourCount = document.getElementById("upgradefourCount")
let wallstreet = 0

upgradefour.addEventListener("click", function () {
    if (score >= 150000) {
        upgradescore(-150000)
        wallstreet++
        upgradefourCount.innerText = clickers + "wall street"
    } else {
        alert('YOU BROKE')
    }
    soundEffectTree.play()
    upgradescore(clickAmt)
})

function gameloop() {
    let clickAmt = 1 + (clickers ** 1.05)


    upgradescore(clickAmt)

    
        
    
    if(Math.ramdom() < 0.01) {
        //this block run about 10%of the time
        if (score >= 50000) {
            alert("You reached 50000! +100000 bonus!");
            score += 100000;
        }
        
    }

}
setInterval(gameloop, 1000)