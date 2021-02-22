'use strict';

// Задание 1

for (let i = 0; i <= 10; i++) {

    if (i == 0) {
        console.log(`${i} - это 0`);
        continue;
    }
    if (i % 2 == 0) {
        console.log(`${i} - это чётное число`);
    }
    if (i % 2 != 0) {
        console.log(`${i} - это нечётное число`);
    }
}

// Задание 2

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(item => item.price = item.price * 0.85);

console.log(products);

// Задание 4

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsImg = products.filter(img => {
    if (img.photos) {
        if (img.photos.length != 0) {
            return img;
        }
    }
});

console.log(productsImg);

products.sort((price_1, price_2) => {
    if (price_1.price < price_2.price) {
        return -1;
    }
    if (price_2.price < price_1.price) {
        return 1;
    }
    if (price_1.price == price_2.price) {
        return 0;
    }
});

console.log(products);

// Задание 5

//  Потратил час из-за того, что в описании есть строчка "например, вызовы функций". Думал, что как-то с функцией нужно делать
for (let i = 0; i <= 9; console.log(i++)) {};

// Задание 6
let letterX = '';

for (let i = 0; i < 20; i++) {
        console.log(letterX += 'x');
}

