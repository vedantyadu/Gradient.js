import { createGradient } from "./src/gradient.js"

const defination = 512
const speed = 5

const gradient = createGradient([[255, 0, 255], [255, 255, 0], [255, 0, 255]], defination)
const centerText = document.querySelector("#center-text")
const text = "Gradient."
let textIndex = 0

const interval = setInterval(() => {
    if (textIndex == text.length) {
        centerText.innerHTML = text
        clearInterval(interval)  
    }
    else {0
        centerText.innerHTML = text.slice(0, textIndex + 1) + "|"
        textIndex++
    }
}, 50)


const canvas = document.querySelector(".gradient")
canvas.width = defination * 2
const ctx = canvas.getContext("2d")
let startIndex = 0

function tick() {
    for (let i = 0; i < defination * 2; i++) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.rect(i, 0, i + 1, canvas.clientHeight)
        if (i + startIndex < gradient.length) {
            const adjustedIndex = i + startIndex
            ctx.fillStyle = `rgb(${Math.floor(gradient[adjustedIndex][0])}, ${Math.floor(gradient[adjustedIndex][1])}, ${Math.floor(gradient[adjustedIndex][2])})`
        }
        else {
            const adjustedIndex = (startIndex + i) - gradient.length
            ctx.fillStyle = `rgb(${Math.floor(gradient[adjustedIndex][0])}, ${Math.floor(gradient[adjustedIndex][1])}, ${Math.floor(gradient[adjustedIndex][2])})`
        }
        ctx.fill()
    }
    startIndex = startIndex >= gradient.length - 1 ? 0 : startIndex + speed
    requestAnimationFrame(tick)
}

requestAnimationFrame(tick)
