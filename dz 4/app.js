const req = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "persons.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
        let hk = JSON.parse(request.response)
        hk.forEach((pers) => {
            const all = document.querySelector(".all");
            const maket = document.createElement("div");
            maket.setAttribute("class", "maket");
            maket.innerHTML = `
        <div class="ph">
            <img src="${pers.photo}" alt="${pers.name}">
        </div>
        <h2>${pers.name}</h2>
        <span class="age">age: ${pers.age}</span><br>
        <span class="status">status: ${pers.status}</span>
    `;
            all.append(maket);
        })
    }
}
req();

const num2 = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "massiv.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
        console.log(request.response)
    }
}
num2();
