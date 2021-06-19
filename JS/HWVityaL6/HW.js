// 1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.


// let arr = [34, 56, 2, 1, 43, 10, 16, 9, 15, 32, 89, 77, 41, 3, 5, 17, 22, 62, 6, 12];

// let sortToBigger = arr.sort((a, b) => {
//     return a - b;
// })
// console.log(sort);


//  b) відсортувати його від більшого до меншого.


// let sortToSmaller = arr.sort((a, b) => {
//     return b - a;
// }) 
// console.log(sortToSmaller);


//  c) Відфілтрувати числа які є кратними 3.


// let filter = arr.filter(value => {
//     return value % 3 == 0
// })
// console.log(filter);


//  d) Відфілтрувати числа які є більшими за 10.


// let filterBiggerTen = arr.filter(value => {
//     return value > 10
// })
// console.log(filterBiggerTen);


//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write


// let iterEach = arr.forEach(value => {
//     document.write(`${value}, `);
// })


//  f) За допомогою map збільшити кожен елемент в масиві в три рази.


// let increaseInThree = arr.map(value => {
//     return value*3
// })
// console.log(arr);
// console.log(increaseInThree);


//  g) Порахувати загальну суму всіх елментів у масиві (reduce)


// let sum = arr.reduce((acc, value) => {
//     return acc + value
// });
// console.log(sum);


// 2) Створити масив з 20 стрічок та:
//  a) Відсортувати його в алфавітному порядку


// let arrString = ['abc', 'hello', 'bye', 'hi', 'Andrii', 'Oksana', 'Oleg', 'Oleksii', 'Vasya', 'Petro', 'Pavlo', 'Olya', 'Vanya', 'Vasya', 'Andre', 'Masha', 'Vitya', 'Katya', 'Olenka', 'Katrin'];

// let sortInOrder = arrString.sort((a, b) => (a < b) ? -1 : 1);
// console.log(sortInOrder);


//  b) Відсортувати в зворотньому порядку


// let sortBack = arrString.sort((a, b) => (a > b) ? -1 : 1);
// console.log(sortBack);


//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)


// let filter = arrString.filter(value =>  value.length > 4);
// console.log(filter);
// console.log(arrString);


//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'


// let changeWords = arrString.map(value => {
//     return value = `Sam says ${value}`
// })
// console.log(changeWords);


// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :


// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];


// a) відсортувати його за  віком (зростання , а потім окремо спадання)


// let sortForAge = users.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(sortForAge);

// let sortForAge = users.sort((a, b) => {
//     return b.age - a.age
// })
// console.log(sortForAge);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)


// let sortByNameLength = users.sort((a, b) => {
//     return (a.name).length - (b.name).length
// })
// console.log(sortByNameLength);

// let sortByNameLength = users.sort((a, b) => {
//     return (b.name).length - (a.name).length
// })
// console.log(sortByNameLength);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)


// let newUsers = JSON.parse(JSON.stringify(users));
// let addId = newUsers.map((value, index) => {
//     value.id = index + 1;
//     return value;
// }) 
// console.log(addId);
// console.log(users);


// d) відсортувати його за індентифікатором


// let sortById = addId.sort((a, b) => {
//     return b.id - a.id
// })
// console.log(sortById);


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)


// let married = addId.reduce((acc, value) => {
//     if (value.isMarried === true){
//         value.apartment = true;
//         acc.push(value)
//     }
//     return acc
// }, []);
// console.log(married);


// ____________________________________________________________________________________________________________________________________________________
//                             РОБОТА В АУДИТОРІЇ
// ____________________________________________________________________________________________________________________________________________________


// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів


// let filterByEngineVol = cars.filter(value => {
//     return value.volume > 3
// })
// console.log(filterByEngineVol);


// - двигун = 2л


// let filterByEngineVol = cars.filter(value => {
//         return value.volume == 2
//     })
//     console.log(filterByEngineVol);


// - виробник мерс


// let filterByProducer = cars.filter(value => {
//     return value.producer == 'mercedes';
// })
// console.log(filterByProducer);


// - двигун більше 3х літрів + виробник мерседес


// let filterByEngAndProduc = cars.filter(value => {
//     return value.volume >= 3 && value.producer == 'mercedes'
// })
// console.log(filterByEngAndProduc);


// - двигун більше 3х літрів + виробник субару


// let filterByEngAndProduc = cars.filter(value => {
//     return value.volume >= 3 && value.producer == 'subaru'
// })
// console.log(filterByEngAndProduc);


// - сили більше ніж 300


// let filterByPower = cars.filter(value => {
//     return value.power > 300;
// })
// console.log(filterByPower);


// - сили більше ніж 300 + виробник субару


// let filterByPowAndProduc = cars.filter(value => {
//     return value.power > 300 && value.producer == 'subaru'
// })
// console.log(filterByPowAndProduc);


// - мотор серіі ej


// let filterByEngineType = cars.filter(value => {
//     return value.engine.startsWith('ej')
// })
// console.log(filterByEngineType);


// - сили більше ніж 300 + виробник субару + мотор серіі ej


// let filter = cars.filter(value => {
//     return value.power > 300 && value.producer == 'subaru' && value.engine.startsWith('ej');
// })
// console.log(filter);


// - двигун меньше 3х літрів + виробник мерседес


// let filterByEngVolAndProd = cars.filter(value => {
//     return value.volume >= 3 && value.producer == 'mercedes'
// })
// console.log(filterByEngVolAndProd);


// - двигун більше 2л + сили більше 250


// let filterByEngVolAndPower = cars.filter(value => {
//     return value.volume > 2 && value.power > 250
// })
// console.log(filterByEngVolAndPower);


// - сили більше 250  + виробник бмв


// let filterByPowerAndProducer = cars.filter(value => {
//     return value.power > 250 && value.producer == 'bmw'
// })
// console.log(filterByPowerAndProducer);


// - взять слдующий массив
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID


// let sortById = usersWithAddress.sort((a, b) => {
//     return a.id - b.id
// })
// console.log(sortById);


// -- Відсортувати їх по ID в зворотньому порядку


// let sortById = usersWithAddress.sort((a, b) => {
//     return b.id - a.id
// })
// console.log(sortById);


// -- Відсортувати по віку


// let sortByAge = usersWithAddress.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(sortByAge);


// -- Відсортувати по віку в зворотньому порядку


// let sortByAge = usersWithAddress.sort((a, b) => {
//     return b.age - a.age
// })
// console.log(sortByAge);


// -- Відсорутвати по імені


// let sortByName = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     }
//     else {
//         return 1
//     }
// })
// console.log(sortByName);

// let sortByNameReverse = usersWithAddress.sort((a, b) => {return a.name > b.name ? -1 : 1});
// console.log(sortByNameReverse);

// let sortByNameLength = usersWithAddress.sort((a, b) => {return (a.name).length - (b.name).length});
// console.log(sortByNameLength);

// let sortByNameLengthRev = usersWithAddress.sort((a, b) => {return (b.name).length - (a.name).length});
// console.log(sortByNameLengthRev);


// -- Відсорутвати по назві вулиці 


// let sortByStreet = usersWithAddress.sort((a, b) => {
//     return a.address.street > b.address.street ? 1 : -1;
// })
// console.log(sortByStreet);

// let sortByStreet = usersWithAddress.sort((a, b) => {
//     return a.address.street < b.address.street ? 1 : -1;
// })
// console.log(sortByStreet);


// -- Відсорутвати по номеру будинку


// let sortByNumber = usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number
// })
// console.log(sortByNumber);

// let sortByNumber = usersWithAddress.sort((a, b) => {
//     return b.address.number - a.address.number
// })
// console.log(sortByNumber);


// -- Залигити тільки тих, хто молодший ніж 30 (filter)


// let filterYounger = usersWithAddress.filter(value => {
//     return value.age < 30
// })
// console.log(filterYounger);


// -- Залишити тільки одружених


// let filterMarried = usersWithAddress.filter(value => {
//     return value.isMarried === true
// })
// console.log(filterMarried);


// -- Залишити тільки одружених, які молодні за 30


// let filterByageAndMerried = usersWithAddress.filter(value => {
//     return value.age < 30 && value.isMarried === true
// })
// console.log(filterByageAndMerried);


// -- Залишити лише тих, в кого парні номери будинків.


// let filter = usersWithAddress.filter(value => {return value.address.number % 2 == 0})
// console.log(filter);


// -- Порахувати загальний вік всіх людей. (reduce)


// let ageSum = usersWithAddress.reduce((acc, value) => {return acc + value.age 
// }, 0)
// console.log(ageSum);


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)


// let giveChild = usersWithAddress.reduce((acc, value) => {
//     if (value.isMarried === true && value.age > 30) {
//         value.child = true
//         acc.push(value);
//     }
//     return acc
// }, [])
// console.log(giveChild);


// ____________________________________________________________________________________________________________________________________________________
//                          Додатково
// ____________________________________________________________________________________________________________________________________________________

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.


// class Owner {
//     constructor (name, age, experience) {
//         this.name = name;
//         this.age = age;
//         this.experience = experience;
//     }
// }
// class NewCar { 
//     constructor (brand, power, owner, price, year) {
//         this.brand = brand;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = year;
// }
// repairAndNewDriver (driver = {}) {
//     this.power = Math.round(this.power*1.1);
//     this.owner = driver;
// }

// }
//     let bmw = new NewCar('bmw', 260, new Owner('Oleg', 25, 5), 5000, 2018);
//     let audi = new NewCar('audi', 370, new Owner('Andrii', 35, 15), 10000, 2019);
//     let mercedes = new NewCar('mercedes', 230, new Owner('Roman', 28, 7), 4000, 2016);
//     let skoda = new NewCar('skoda', 170, new Owner('Dima', 21, 3), 2000, 2015);
//     let suzuki = new NewCar('suzuki', 200, new Owner('Volodya', 23, 5), 2500, 2014);
//     let citroen = new NewCar('citroen', 90, new Owner('Yaroslav', 40, 20), 800, 2005);
//     let toyota = new NewCar('toyota', 550, new Owner('Orest', 27, 9), 9000, 1995);
//     let honda = new NewCar('honda', 310, new Owner('Vasya', 29, 11), 4500, 1998);
//     let dodge = new NewCar('dodge', 350, new Owner('Max', 33, 15), 7000, 2018);
//     let ford = new NewCar('ford', 245, new Owner('Anton', 26, 8), 4800, 2017);


// let cars = [bmw, audi, mercedes, skoda, suzuki, citroen, toyota, honda, dodge, ford];
// console.log(cars);



// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// for (let i = 0; i < cars.length/2; i++) {
//     cars[i].power = Math.round(cars[i].power);
//     cars[i].owner = new Owner(prompt('Enter the name'), +prompt('Enter age'), +prompt('Enter the experience'));
// }

// АБО ТАК:

// audi.repairAndNewDriver(new Owner('Rostik', 23, 5));
// ford.repairAndNewDriver(new Owner('Roman', 19, 1));
// citroen.repairAndNewDriver(new Owner('Oleksii', 21, 3));
// skoda.repairAndNewDriver(new Owner('Vlad', 35, 4));
// honda.repairAndNewDriver(new Owner('Valentyn', 29, 3));


// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%


// for (let i = 0; i < cars.length; i += 2) {
//     cars[i].power = Math.round(cars[i].power*1.1);
//     cars[i].price = Math.round(cars[i].price*1.05);
// }


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// let sum = 0;
// for (let car of cars) {
//     if (car.owner.experience < 5 && car.owner.age > 25) {
//         car.owner.experience += 1;
//     }
//     sum += car.price;
// }
// console.log(sum);


// Задача: дан отсортированный по возрастанию массив целых чисел. 
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 10]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


// function findIndex(arr = [], element = '') {
//     let minIndx = 0;
//     let maxIndx = 0;
//     let newArr = [];
  
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
//         newArr.push(i);
//       }
//     }
  
//     if(newArr.length > 0){
//     console.log(`MinIndex: ${newArr[0]}`);
//     console.log(`MaxIndex: ${newArr[newArr.length - 1]}`);
//     }else{
//       console.log(-1);
//     }
//   }
  
  
//   let numArr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 10];
//   findIndex(numArr, 8);
