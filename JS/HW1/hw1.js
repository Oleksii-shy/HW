// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. Вивести кожну змінну за допомогою: console.log , alert, document.write


// let hello = 'hello';
// let school = 'owu';
// let com = 'com';
// let country = 'ua';
// let a = 1;
// let b = 10;
// let num = -999;
// let c = 123;
// let p = 3.14;
// let d = 2.7;
// let e = 16;
// let truth = true;
// let nottruth = false;

// console.log (hello);
// alert (hello);
// document.write (hello);

// console.log (school);
// alert (school);
// document.write (school);

// console.log (com);
// alert (com);
// document.write (com);

// console.log (country);
// alert (country);
// document.write (country);

// console.log (a);
// alert (a);
// document.write (a);

// console.log (b);
// alert (b);
// document.write (b);

// console.log (num);
// alert (num);
// document.write (num);

// console.log (c);
// alert (c);
// document.write (c);

// console.log (p);
// alert (p);
// document.write (p);

// console.log (d);
// alert (d);
// document.write (d);

// console.log (e);
// alert (e);
// document.write (e);

// console.log (truth);
// alert (truth);
// document.write (truth);

// console.log (nottruth);
// alert (nottruth);
// document.write (nottruth);


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення. Вивести кожну змінну за допомогою: console.log , alert, document.write


// hello = 'bye';
// school = 'university';
// com = 5;
// country = '10';
// a = -31;
// b = 'bed';
// num = 9999999999999;
// c = '123';
// p = true;
// d = 'door';
// e = 53;
// truth = false;
// nottruth = true;

// console.log (hello);
// alert (hello);
// document.write (hello);

// console.log (school);
// alert (school);
// document.write (school);

// console.log (com);
// alert (com);
// document.write (com);

// console.log (country);
// alert (country);
// document.write (country);

// console.log (a);
// alert (a);
// document.write (a);

// console.log (b);
// alert (b);
// document.write (b);

// console.log (num);
// alert (num);
// document.write (num);

// console.log (c);
// alert (c);
// document.write (c);

// console.log (p);
// alert (p);
// document.write (p);

// console.log (d);
// alert (d);
// document.write (d);

// console.log (e);
// alert (e);
// document.write (e);

// console.log (truth);
// alert (truth);
// document.write (truth);

// console.log (nottruth);
// alert (nottruth);
// document.write (nottruth);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.


// let firstName = 'Oleksii ';
// let middleName = 'Yaroslavovych ';
// let lastName = 'Shyika';
// let person = firstName + middleName + lastName;
// alert (person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


// let name = prompt ('What is your name?');
// let middleName = prompt ('What is your middle name?');
// let age = prompt ('How old are you?');
// document.write (`Вітаю ${name} ${middleName}. Тобі  ${age}  років.`)
// alert ('Вітаю ' + name + ' ' + middleName + '. Тобі ' + age + ' років')


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.


// let a = 100; 
// let b = '100'; 
// let c = true;

// console.log (typeof a);
// console.log (typeof b);
// console.log (typeof c);


// - Поставет відповідний оператор в виразах що б вийшов відповідний результат. В однакових виразаї не використовувати однакові оператори!!!


//   5 < 6 -> true
//   5 == 6 -> false
//   5 > 6 -> false
//   5 >= 6 -> false
//   10 == 10 -> true
//   10 === 10 -> true
//   10 < 10 -> false
//   10 != 10 -> false
//   10 !== 10 -> false
//   123 === '123' -> false
//   123 == '123' -> true


// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.


// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!'-1'); false     не зрозумів!     true
// console.log(!!-1); false        не зрозумів!     true
// console.log(!!'0'); false        не зрозумів!     true
// console.log(!!'null'); false      не зрозумів!     true
// console.log(!!'undefined'); false  не зрозумів!     true
// console.log(!!(3/'owu')); false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false
// ДЗ від Віті:
// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.


// let a = +prompt ('Type the number');
// let b = +prompt ('Type the number');
// let c = +prompt ('Type the number');

// console.log (a);
// console.log (b);
// console.log (c);


// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.


// let a = prompt ('Type the number');
// let b = prompt ('Type the number');
// let c = prompt ('Type the number');
// let d = prompt ('Type the number');

// let intgA = parseInt(a, 10);
// let intgB = parseInt(b, 10);
// let intgC = parseInt(c, 10);
// let intgD = parseInt(d, 10);

// console.log (intgA + intgB + intgC + intgD);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.


// let a = prompt ('Type the number');
// let b = prompt ('Type the number');
// let c = prompt ('Type the number');

// let pointNumA = parseFloat (a);
// let pointNumB = parseFloat (b);
// let pointNumC = parseFloat (c);

// let result = pointNumA + pointNumB + pointNumC;

// console.log (result);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.


// let a = prompt ('Type the number');
// let b = prompt ('Type the number');
// let c = prompt ('Type the number');

// let pointNumA = parseFloat (a);
// let pointNumB = parseFloat (b);
// let pointNumC = parseFloat (c);

// let roundNumA = Math.round (pointNumA);
// let roundNumB = Math.round (pointNumB);
// let roundNumC = Math.round (pointNumC);

// let result = roundNumA + roundNumB + roundNumC;

// alert (result);


// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 


// let a = prompt ('Type the number');
// let b = prompt ('Type the number');

// let pointNumA = parseFloat (a);
// let pointNumB = parseFloat (b);

// let roundNumA = Math.round (pointNumA);
// let roundNumB = Math.round (pointNumB);

// let result = Math.pow (roundNumA, roundNumB)

// alert (result);

 