const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "ok"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "not ok"
        phoneResult.style.color = "red"
    }
}

//tabSlider

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")
let indexq = 0
const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = "none"
    })
    tabContentItems.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = "block"
    tabContentItems[index].classList.add("tab_content_item_active")
    index = indexq
}
hideTabContent()
showTabContent()
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


const intervalTabs = () => {
    setInterval(() => {
        indexq++
        if (indexq > tabContentBlocks.length - 1) {
            indexq = 0
        }
        hideTabContent()
        showTabContent(indexq)
    }, 3000)
}
intervalTabs()

//convertor

const usdInput = document.querySelector("#usd")
const somInput = document.querySelector("#som")
const eurInput = document.querySelector("#eur")

const converter = (element, targetElement, thirdElement) => {
    element.oninput = async () => {
        try {
            fetch(`../data/convertor.json`)
                .then(res => res.json())
                .then(data => {
                    if (element.id === "som") {
                        targetElement.value = (element.value / data.usd).toFixed(2)
                        thirdElement.value = (element.value / data.eur).toFixed(2)
                    }
                    if (element.id === "usd") {
                        targetElement.value = (element.value * data.usd).toFixed(2)
                        thirdElement.value = (element.value * data.eurusd).toFixed(2)
                    }
                    if (element.id === "eur") {
                        targetElement.value = (element.value * data.eur).toFixed(2)
                        thirdElement.value = (element.value / data.eurusd).toFixed(2)
                    }
                    if (element.value === "") {
                        targetElement.value = ""
                        thirdElement.value = ""
                    }
                })
        }catch (e){
            console.log(e)
        }
    }
}

converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)


//card switcher
const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardId = 1

const updateCard = async (id) => {
    try {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            const {id, title, completed} = data
            card.style.borderColor = completed ? 'green' : 'red'
            card.innerHTML = `
                <p>${title}</p>
                <p style="color: ${completed ? 'green' : 'red'}">${completed}</p>
                <span>${id}</span>
            `
        })
    }catch (e){
        console.log(e)
    }
}

btnNext.onclick = () => {
    cardId < 200 ? cardId++ : cardId = 1
    updateCard(cardId)
}

btnPrev.onclick = () => {
    cardId > 1 ? cardId-- : cardId = 200
    updateCard(cardId)
}
updateCard(cardId)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })


//WEATHER

const citySearchInput = document.querySelector(".cityName")
const cityName = document.querySelector(".city")
const cityTemp = document.querySelector(".temp")
const weatherBlock = document.querySelector(".icon_weather")
const url = 'http://api.openweathermap.org/data/2.5/weather'
const api = 'e417df62e04d3b1b111abeab19cea714'
const citySearch = () => {
    citySearchInput.oninput = (event) => {
        fetch(`${url}?q=${event.target.value}&appid=${api}`)
            .then(response => response.json())
            .then(data => {
                cityName.innerHTML = data.name || 'City is not defined'
                cityTemp.innerHTML = data.main?.temp ? Math.round(data.main.temp - 273) + "&deg;c" : '-'
                weatherBlock.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            })
    }
}

citySearch()

