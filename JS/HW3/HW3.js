// 1) створити функцію яка приймає масив та виводить його


// function showArray(array = []) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// let arr = [1, 2, 3, 4, 5];
// showArray(arr);

// function showArray(array = []) {
//     console.log(array);
// }
// let arr = [1, 2, 3, 4, 5];
// showArray(arr);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.


// function createArray(arr = []) {
//     for (let i = 0; i < 10; i++) {  
//         let max = 100;
//         let min = 1; 
//     arr.push(Math.round(Math.random(i) * (max - min + 1)) + min);
// }
//     showArray(arr);
// }
// let newArr = [];
// createArray(newArr);
// console.log(newArr);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function findSmallOne(a, b, c) {
//     return (a < b && a < c) ? a : (b < a && b < c) ? b : c
// }
// let a = +prompt('Enter a');
// let b = +prompt('Enter b');
// let c = +prompt('Enter c');
// let result = findSmallOne(a, b, c);
// console.log(result);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function findBigOne(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// let a = +prompt('Enter a');
// let b = +prompt('Enter b');
// let c = +prompt('Enter c');
// findBigOne(a, b, c);


// 5) створити функцію яка повертає найбільше число з масиву


// function returnBiggerItem(arr = []) {
//     let bigger = 0;
//     for (let i = 0; i <= bigger; i++) {
//         if (arr[i] > bigger) {
//             bigger = arr[i];
//         }
//     }
//     console.log(bigger);
// }
// let newArr = [500, 25, 6, -1, 2, 89];
// returnBiggerItem(newArr);


// 6) створити функцію яка повертає найменьше число з масиву


// function returnSmallerItem(arr = []) {
//     let smaller = (arr[arr.length - 1]);
//     for (let i = 0; i < arr.length; i++) {
//        if (smaller > arr[i]) {
//            smaller = arr[i];
//        }
//         }
//     console.log(smaller);
// }
// returnSmallerItem(newArr);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.


// function sumArray(arr = []) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     console.log(arr);
//     return sum;
// }
// let newArr = [1, 3, 6, 38, 59];
// let result = sumArray(newArr);
// console.log(`Sum = ${result}`);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function middleResult(arr = []) {
//     let middleSum = 0;
//     for (let i = 0; i < 1; i++) {
//         for (let item of arr) {
//             middleSum += item;
//         } 
//         middleSum /= arr.length;
//     }
//     return Math.round(middleSum);
// }
// let arr = [500, 51, 1, 16, -2];
// let result = middleResult(arr);
// console.log(result);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// function returnArrayKey(arr = []) {
//     let newArr = [];
//     for (let item of arr) {
//         for (let key in item) {
//             newArr.push(key);
//         }
//     }
//     console.log(newArr);
// }
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}, {surname: 'Dimasovych'}];
// returnArrayKey(arr);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function returnKeyValue(arr = []) {
//     let newArr = [];
//     for (let item of arr) {
//         for (let key in item) {
//             newArr.push(item[key]);
//         }
//     }
//     console.log(newArr);
// }
// returnKeyValue(arr);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


// function sumSameIndex(arr1 = [], arr2 = []) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let y = 0; y < arr2.length; y++) {
//             if (i == y) {
//                 newArr.push(arr1[i] + arr2[y]);
//             }
//         }
//     }
//     console.log(newArr);
// }
// let arrOne = [1,2,3,4];
// let arrTwo = [2,3,4,5];
// sumSameIndex(arrOne, arrTwo);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function numOperations() {
//     let smaller = arguments[0];
//     let bigger = arguments[1];
//     for (i = 0; i < arguments.length; i++) {
//         if (smaller > arguments[i]) {
//             smaller = arguments[i];
//         }
//         else if (bigger < arguments[i]) {
//             bigger = arguments[i];
//         }
//     }
//     console.log(`This is the biggest: ${bigger}`);
//     return smaller;
// }

// let smallNum = numOperations(68, 2, 36, 4, 52);
// console.log(`This is the smallest: ${smallNum}`);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


// function arrayOperations(secret_key) {
//     let keyFunction;   
//     let valueFunction;
//         if (secret_key == 'key') {
//           function returnArrayKey(arr = []) {
//                 let newArr = [];
//                 for (let item of arr) {
//                 for (let key in item) {
//                     newArr.push(key);
//                       }
//                 }
//             return newArr;
//                 }
//         return keyFunction = returnArrayKey(arr);
//             }

//         else if (secret_key == 'value') {
//           function returnKeyValue(arr = []) {
//                 let newArrValue = [];
//                 for (let item of arr) {
//                 for (let key in item) {
//                     newArrValue.push(item[key]);
//                         }
//                     }
//             return newArrValue;
//                 }
//         return valueFunction = returnKeyValue(arr);
//     }
//         else {
//            return alert('Wrong word');
//         }
            
//         }

//         let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}, {surname: 'Dimasovych'}];
//         let word = prompt('Enter word: key/value');
//         let result = arrayOperations(word);
//         console.log(result);
       