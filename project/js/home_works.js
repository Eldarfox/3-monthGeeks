const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const gmailR = /\w\w+@\w+\.\w+/

gmailButton.onclick = () => {
    if (gmailR.test(gmailInput.value)){
        gmailResult.innerHTML = "ok"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = "not ok"
        gmailResult.style.color = "red"
    }
}


const childBlock = document.querySelector(".child_block")
const parentBlock = document.querySelector(".parent_block")

let positionX = 0
let positionY = 0

const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const move = () => {
    if (positionX < maxParentHeight && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(move)
    }else if (positionX >= maxParentWidth &&  positionY < maxParentHeight){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(move)
    }else if (positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(move)
    }else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(move)
    }
}
move()

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const seconds = document.querySelector("#seconds")

let second = 0
let interval;
let work = false;
const time = () => {
    second++
    seconds.innerHTML = `${second}`
}
start.onclick = () => {
    if (work === false) {
    interval = setInterval(time, 1000)
    work = true;}
}

stop.onclick = () => {
    clearInterval(interval)
    work = false
}

reset.onclick = () => {
    clearInterval(interval)
    second = 0
    seconds.innerHTML = "0"
    work = false
}
