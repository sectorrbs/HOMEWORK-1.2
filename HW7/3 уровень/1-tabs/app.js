'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let link = document.querySelectorAll('.nav-link');
let text = document.querySelector('.text');

link.forEach(item => {
    item.addEventListener('click', clickHandler)
})

function clickHandler(event) {
    changeText(event)
    changeActiveClass(event)
}

function changeActiveClass(event) {
    for (let links of link) {
        links.classList.remove('active')
    };
    event.target.classList.add('active')
}

function changeText(event) {
    let linkText = event.target.dataset.text;
    text.textContent = texts[linkText]
}