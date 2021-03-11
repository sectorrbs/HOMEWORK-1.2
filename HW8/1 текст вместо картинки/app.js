'use strict';

let btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', handleClick)
})

function handleClick(clickedButtonEvent) {
    let cardNode = clickedButtonEvent.target.parentNode;
    console.log(cardNode);
    const card = {
        wrap: cardNode, 
        img: cardNode.querySelector('img'), 
        productName: cardNode.querySelector('.productName'), 
        button: cardNode.querySelector('button'), 
    };
    console.log(card);
    let textBtn = clickedButtonEvent.target.textContent;
    console.log(textBtn);


    if (textBtn == 'Подробнее') { 
        showMoreText(card);
    } else if (textBtn == 'Отмена') {
        hideMoreText(card);
    }
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    let dest = card.wrap.querySelector('.dest');
    console.log(dest);
    dest.remove();
    card.button.textContent = 'Подробнее'

}

function showMoreText(card) {
    card.img.style.display = 'none';
    let textContent = 'Описание товара';
    card.productName.insertAdjacentHTML('afterend', `<div class="dest">${textContent}</div>`);
    card.button.textContent = 'Отмена'
}