"use strict";

const products = {
    phones: [{
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [{
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [{
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let btn = document.querySelectorAll('button');
let productsEl = document.querySelector('.products');


btn.forEach(click => {
    click.addEventListener('click', clickHandler)
})

function clickHandler(event) {
    productsEl.innerHTML = '';
    showCategory(event.target.dataset.type)
}

function showCategory(category) {
    products[category].forEach(item => {
        getProductMarkup(item)
    })
}

function getProductMarkup(product) {
    console.log(product);
    productsEl.insertAdjacentHTML('afterbegin', `<div class="product">
    <div>${product.name}</div>
    <img src="${product.imageUrl}" alt="">
    <div>${product.price}</div>
    <a href="https://example.com/producs/${product.id}">Подробнее</a>
    </div>`)
}