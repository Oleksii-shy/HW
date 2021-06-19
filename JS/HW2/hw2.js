// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let arrNum = [1, 2, 3, 4, 5];

// console.log(arrNum);

// let arrStr = ['hello', 'okten', 'i', 'am', 'student'];

// console.log(arrStr);

// let arrBlend = ['hello', true, 123, '56', false];

// console.log(arrBlend);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let arr = [];

// arr[0] = 'Oleksii';

// arr[1] = 20;

// arr[2] = true;

// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// let arr = ['hello', 'world', 1, true, '25', 666, 'Andrii', 56, false, 10];

// for (i = 0; i < arr.length; i++) {
//     document.write(`<div> ${arr[i]} </div>`);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// let arr = ['hello', 'world', 1, true, '25', 666, 'Andrii', 56, false, 10];

// for (i = 0; i < arr.length; i++) {
//     document.write(`<div> ${i}: ${arr[i]} </div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


// let arr = ['hello', 'world', 1, true, '25', 666, 'Andrii', 56, false, 10, 'hello', 'world', 1, true, '25', 666, 'Andrii', 56, false, 10];

// let i = 0;

// while (i < arr.length) {
//     document.write(`<h1> ${arr[i]} </h1>`);
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// let arr = ['hello', 'world', 1, true, '25', 666, 'Andrii', 56, false, 10, 'hello', 'world', 1, true, '25', 666, 'Andrii', 56, false, 10];

// let i = 0;

// while (i < arr.length) {
//     document.write(`<h1> ${i}: ${arr[i]} </h1>`);
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let number of arrNum) {
//     console.log(number);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


// let arrStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'm', 'n', 'l'];

// for (let string of arrStr) {
//     console.log(string);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// let arr = ['a', '25', true, 16, 'e', false, 'g', '28', 39, true];

// for (let item of arr) {
//     console.log(item);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


// let arr = ['a', '25', true, 16, 'e', false, 'g', false, 39, true];

// for (let item of arr) {
//     if (typeof item === 'boolean') {
//         console.log(item);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


// let arr = ['a', '25', true, 16, 'e', false, 'g', false, 39, true];

// for (let item of arr) {
//     if (typeof item === 'number') {
//         console.log(item);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let arr = ['a', '25', true, 16, 'e', false, 'g', false, 39, true];

// for (let item of arr) {
//     if (typeof item === 'string') {
//         console.log(item);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let arr = [];

// arr[0] = 'a';
// arr[1] = 2;
// arr[2] = true;
// arr[3] = '25';
// arr[4] = 'hello';
// arr[5] = 266;
// arr[6] = false;
// arr[7] = '365';
// arr[8] = true;
// arr[9] = 'false';

// for (let item of arr) {
//     console.log(item);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


// for (let i = 1; i <= 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// for (let i = 1; i <= 100; i++) {
//     if (!(i % 2 == 0)) {
//         console.log(i);
//         document.write(i);
//     }
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


// for (let m = 1; m <= 2; m++) {
//     for (let s = 0; s < 60; s++) {
//         console.log(s);
//     }
//     console.log(m);    
// }


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// for (let h = 0; h <= 2; h++) {
   
    
//     for (let m = 0; m < 60; m++) {
        

//        for (let s = 0; s < 60; s++ ) {
       
//         document.write(`<div>${h} ${m} ${s}</div>`);
//         if (h === 2 && m === 20) {
//             break;
//         }   
//     }
//     if (h === 2 && m === 20) {
//         break;
//     } 
//     }
//     if (h === 2 && m === 20) {
//         break;}
// }

// for (let h = 0; h <= 2; h++) {
//     if (h === 2) {break;}
//     for (let m = 0; m < 60; m++) {
//         if (m === 21) {
//             break;
//         }

//       for (let s = 0; s < 60; s++ ) {
//         if (s === 0) {}
//         document.write(`<div>${h} ${m} ${s}</div>`);
//         }
       
//     }
    
// }

// console.log('hello');

// Шось я вже поплив і не знаю як зробити ті 20хв(


    let arr = [];
    for (i = 1; 1 <= 100; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        } 
    }
    document.write(arr);
