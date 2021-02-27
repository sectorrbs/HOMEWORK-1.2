'use strict';

// Задание 1.1
function Product(name, price) {
    this.name = name;
    this.price = price;
}

let discount = function make25PercentDiscount() {
    this.price = this.price * 0.75
};

let product = new Product('Audi', 35000);

discount.call(product)
console.log(product);

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let discount = function make25PercentDiscount() {
    this.price = this.price * 0.75
};

let product = new Product('Audi', 35000);

discount.call(product)
console.log(product);

// Задание 1.2

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
let post = new Post('Иван', 'пусто', 25.02);
console.log(post);

Post.prototype.edit = function (newText) {
    return this.text = newText;
};
post.edit('HOME');
console.log(post);

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText) {
        return this.text = newText;
    }
};

let post = new Post('Иван', 'пусто', 25.02);
post.edit('HOME');
console.log(post);

// Задание 1
class Numbers {
    constructor(units, tens, hundereds) {
        this.units = units;
        this.tens = tens;
        this.hundereds = hundereds;
    }
}
let number = {};

function getNum(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 999) {
        console.log('Что-то пошло не так');
        return number;
    }
    num = num.toString().split('');
    if (num.length === 3) {
        return number = new Numbers(+num[0], +num[1], +num[2]);
    } else if (num.length === 2) {
        return number = new Numbers(+num[0], +num[1], 0);
    } else if (num.length === 1) {
        return number = new Numbers(+num[0], 0, 0);
    }

}
getNum(+prompt('Введите число от 0 до 999'))
console.log(number);

// Задание 3

let gameMillioner = {
    userScore: 0,
    run() {
        for (let count = 0; count < questions.length; count++) {
            let result = qameProceed.getGame(questions[count]);
            if (result === undefined) {
                break;
            }
            if (result) {
                this.userScore++
            };
        }
        alert(`Игра окончена. Число правильных ответов: ${this.userScore}`);
        if (confirm('Хотите сыграть ещё раз?')) {
            this.userScore = 0;
            this.run();
        }
    },
};

let questions = [{
        question: 'Сколько букв в слове "Яблоко"?',
        questionOptions: {
            'a': 'Пять',
            'b': 'Шесть',
            'c': 'Семь',
            'd': 'Восемь',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Сколько букв в слове "Терминатор"?',
        questionOptions: {
            'a': 'Девять',
            'b': 'Семь',
            'c': 'Восемь',
            'd': 'Десять',
        },
        correctAnswer: 'd'
    },
    {
        question: 'Сколько букв в слове "Параллель"?',
        questionOptions: {
            'a': 'Семь',
            'b': 'Восемь',
            'c': 'Девять',
            'd': 'Десять',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Сколько букв в слове "Шотландия"?',
        questionOptions: {
            'a': 'Девять',
            'b': 'Десять',
            'c': 'Одиннадцать',
            'd': 'Двенадцать',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Сколько букв в слове "Свитшот"?',
        questionOptions: {
            'a': 'Шесть',
            'b': 'Семь',
            'c': 'Восемь',
            'd': 'Девять',
        },
        correctAnswer: 'b'
    }
];

let qameProceed = {
    getGame(question) {
        let variants = '';
        for (const value in question.questionOptions) {
            variants += `${value}: ${question.questionOptions[value]} \n`
        }
        let userAnswer = prompt(`${question.question}\n Варианты ответов:\n ${variants}`).toLowerCase();
        if (userAnswer === null) {
            return
        }
        return userAnswer === question.correctAnswer;

    }
};

console.log('Сыграем в игру. Введите gameMillioner.run()');