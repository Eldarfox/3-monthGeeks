//task 1
function extractNumbers(str) {
    let numbers = str.match(/\d+/g);
    return numbers ? numbers.map(Number) : [];
}

console.log(extractNumbers("a1fg5hj6"));

//task2

function Fibonacci(num1, num2) {
    console.log(num1);
    if (num2 <= 144) {
        setTimeout(() => Fibonacci(num2, num1 + num2), 1000);
    }
}

Fibonacci(0, 1);

//task 3

const Title = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const titles = data.map(product => product.title);
        titles.forEach(title => console.log(title));
    } catch (error) {
        console.error(error);
    }
}
Title();

//task4

const buttons = document.querySelector('#buttonContainer')

buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});


//task5

const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    const block = document.querySelector('#Block');
    if (block.style.display === 'none') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
});

//task6

let count = 0;
const counterElement = document.getElementById('counter');

const intervalId = setInterval(() => {
    if (count >= 100) {
        clearInterval(intervalId);
    } else {
        count++;
        counterElement.textContent = count;
    }
}, 1);


//task7


const get = async () => {
    const 
}