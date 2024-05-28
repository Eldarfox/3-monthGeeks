const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector("#btn-get")
const modalCloseBtn = document.querySelector(".modal_close")
const openModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}

modalTrigger.onclick = openModal
modalCloseBtn.onclick = closeModal

modal.onclick = (event) => {
    if (event.target === modal){
    closeModal()}
}
const crolling = ()=> {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal();
        window.removeEventListener("scroll", crolling)
    }
}
window.addEventListener("scroll", crolling)

window.onload = () => {
    setTimeout(openModal, 10000)
}

// tg bot

const token = "6848662480:AAH5pwaies0r8xwE1P7SoVIUWs8OV-v9lSs"
const api = `https://api.telegram.org/bot${token}/sendMessage`
const chatID = "@testlessonEldar"
const form = document.querySelector("form")

form.onsubmit = async (event) => {
    event.preventDefault()
    const {name, phone} = Object.fromEntries(new FormData(form).entries())
    const text = `Name: ${name}\nPhone: ${phone}`
    console.log(text)
    try {
        await fetch(api, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({chat_id: chatID, text})
        })
    }catch (e){
        console.log(e)
    }
}

