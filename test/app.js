const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

// task 2

const seconds = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

seconds();

//task 3

const task3 = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i >= 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}

task3();

//task4

document.addEventListener('DOMContentLoaded', () => { //добавил слушителя дом потому что код выполняется быстрее
    const all = document.querySelector(".all")
    all.addEventListener('click', () => {
        all.classList.toggle('all2'); // сделал toggle вместо add remove
    });
});

//task5

const task5 = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "task.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
        console.log(request.response)
        console.log(request)
    }}
task5();