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

let positionX = 0

const move = () => {
    if (positionX < 449){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(move)
    }
}

move()