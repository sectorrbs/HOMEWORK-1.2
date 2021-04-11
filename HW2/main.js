'use strict';

// //Задание 1
// //1.1 - ответ 2, т.к. переменная 'a' имеет инкремент в префиксной форме, который сначала увеличивает переменную на 1, а потом записывает значение в переменную 'c';
// let a = 1,
//     b = 1,
//     c, d;

// c = ++a;
// alert(c);

// //1.2 - ответ 1, т.к. переменная 'b' имеет инкремент в постфиксной форме, который увеличивает переменную на 1 только после того, как значение переменной 'b' присвоено переменной 'd';
// d = b++;
// alert(d);

// //1.3 ответ 5, т.к. переменная 'a' имеет инкремент в префиксной форме, который сначала увеличивает переменную на 1, а потом записывает значение в переменную 'c', и переменная 'a' уже была увеличена на 1 в примере 1.1;
// c = 2 + ++a;
// alert(c);

// //1.4
// d = 2 + b++;
// // ответ 4, т.к. переменная 'b' имеет инкремент в постфиксной форме, который увеличивает переменную на 1 только после того, как значение переменной 'b' присвоено переменной 'd', и переменная 'b' уже была увеличена на 1 в примере 1.2
// alert(d);
// // ответ 3, т.к. переменная 'a' в примерах 1.1 и 1.3 была увеличена на 2 (++a и a++);
// alert(a);
// // ответ 3, т.к. переменная 'b' в примерах 1.2 и 1.4 была увеличена на 2 (b++ и ++b);
// alert(b);

// // Задание 2
// // переменная 'x' будет равна 5, т.к. сначала выполняется выражение в скобках - присваивание с умножением, которое можно записать как a = 2 * a. Выражение в скобках равно 4, и x = 1 + 4 равно 5;

// let a = 2;
// let x = 1 + (a *= 2);

// // Задание 3

// let a = parseInt((Math.random() * 31) - 15);
// let b = parseInt((Math.random() * 31) - 15);
// alert(a);
// alert(b);

// if (a >= 0 && b >= 0) {
//     alert(a - b);
// }
// if (a < 0 && b < 0) {
//     alert(a * b);
// }
// if (a >= 0 && b < 0 || a < 0 && b >= 0) {
//     alert(a + b);
// }

// //Задание 4

// function addition(a, b) {
//     return a + b
// }

// function subtraction(a, b) {
//     return a - b
// }

// function multiplication(a, b) {
//     return a * b
// }

// function division(a, b) {
//     if (b != 0) {
//         return a / b
//     } else throw new Error('На НОЛЬ делить нельзя!');
// }

// let a = +prompt('Введите 1-е число');
// let b = +prompt('Введите 2-е число');

// alert(addition(a, b));
// alert(subtraction(a, b));
// alert(multiplication(a, b));
// alert(division(a, b));

// //Задание 5

// function addition(a, b) {
//     return a + b
// }

// function subtraction(a, b) {
//     return a - b
// }

// function multiplication(a, b) {
//     return a * b
// }

// function division(a, b) {
//     if (b != 0) {
//         return a / b
//     } else throw new Error('На НОЛЬ делить нельзя!');
// }

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'сложение':
//             return addition(arg1, arg2);
//         case 'вычитание':
//             return subtraction(arg1, arg2);
//         case 'умножение':
//             return multiplication(arg1, arg2);
//         case 'деление':
//             return division(arg1, arg2);
//         default:
//             alert('Вы сделали что-то не так!');
//     }
// }

// let operation = prompt('Введите название операции').toLowerCase();
// let a = +prompt('Введите 1-е число');
// let b = +prompt('Введите 2-е число');

// alert(mathOperation(a, b, operation));

// //Задание 6

// let totalMoney = prompt('Сколько денег вы хотите положить в банк?');
// let roubles = null;

// function getRoubles(roubles) {
//     switch (totalMoney.charAt(totalMoney.length - 1)) {
//         case '0':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//             return roubles = 'рублей'
//         case '2':
//         case '3':
//         case '4':
//             return roubles = 'рубля'
//         case '1':
//             return roubles = 'рубль'
//     };
//     retur;
// };

// alert(`В банк зачислена сумма в размере ${totalMoney} ${getRoubles(totalMoney)}`);