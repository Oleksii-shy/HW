// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'Oleksii', 'Shyika', 'alex27@gmail.com', +380756863629),
//     new User(2, 'Andrii', 'Dydka', 'alex29@gmail.com', +380756653629),
//     new User(3, 'Ostap', 'Sova', 'alex45@gmail.com', +380756253629),
//     new User(4, 'Roma', 'Rika', 'alex17@gmail.com', +380756863649),
//     new User(5, 'Oleksii', 'Pika', 'alex37@gmail.com', +380779863629),
//     new User(6, 'Dima', 'Hey', 'alex45@gmail.com,' +380756865329),
//     new User(7, 'Vasya', 'Shyko', 'alex56@gmail.com', +380757563629),
//     new User(8, 'Vitya', 'Sak', 'alex79@gmail.com', +380754563629),
//     new User(9, 'Sergey', 'Wet', 'alex69@gmail.com', +380756863639),
//     new User(10, 'Oleksii', 'Antono', 'alex122@gmail.com', +345756863629),
// ];
// console.log(users);


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let clients = [
//     new Client(1, 'Oleksii', 'Shyika', 'alex27@gmail.com', +380756863629, ['apple', 'banana']),
//     new Client(1, 'Ostap', 'Sova', 'alex45@gmail.com', +380756253629, ['beer', 'bread']),
//     new Client(1, 'Roma', 'Rika', 'alex17@gmail.com', +380756863649, ['ice-cream', 'juice']),
//     new Client(1, 'Oleksii', 'Pika', 'alex37@gmail.com', +380779863629, ['milk', 'bread']),
//     new Client(1, 'Dima', 'Hey', 'alex45@gmail.com,' +380756865329, ['apple', 'beer']),
//     new Client(1, 'Vasya', 'Shyko', 'alex56@gmail.com', +380757563629, ['bread', 'butter']),
//     new Client(1, 'Vitya', 'Sak', 'alex79@gmail.com', +380754563629, ['oil', 'pepper']),
//     new Client(1, 'Sergey', 'Wet', 'alex69@gmail.com', +380756863639, ['onion', 'cucumber']),
//     new Client(1, 'Oleksii', 'Antono', 'alex122@gmail.com', +345756863629, ['apple', 'oil']),
//     new Client(1, 'Andrii', 'Antonov', 'alex2@gmail.com', +345757363629, ['bread', 'eggs']),
// ];
// console.log(clients);


// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function CarInfo(model, producer, year, maxspeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} км на годину`);
//     }
//     this.info = function () {
//         console.log(
// ` Model: ${this.model}
//  Producer: ${this.producer}     
//  Year: ${this.year}
//  Max speed: ${this.maxspeed}
//  Engine volume: ${this.volume}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed = '') {
//         this.maxspeed += newSpeed;
//         console.log(this.maxspeed); 
//     }
//     this.changeYear = function (newValue = '') {
//         this.year = newValue;
//         console.log(this.year);
//     }
//     this.addDriver = function (driver = {}) {
//         this.driver = driver
//     }
// }

// let camry = new CarInfo('Camry', 'Toyota', 2019, 240, 3.5);
// let mazda6 = new CarInfo(6, 'Mazda', 2020, 210, 2.0);


// console.log(camry);
// camry.drive();
// camry.info();
// camry.increaseMaxSpeed(20);
// camry.changeYear(2020);
// camry.addDriver({name: 'Oleksii', age: 20, gender: 'male'});
// console.log(camry);


// console.log(mazda6);
// mazda6.drive();
// mazda6.info();
// mazda6.increaseMaxSpeed(5);
// mazda6.changeYear(2021);
// mazda6.addDriver({name: 'Oksana', age: 25, gender: 'female'});


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class CarInfo {
//     constructor(model, producer, year, maxspeed, volume) {
//             this.model = model;
//             this.producer = producer;
//             this.year = year;
//             this.maxspeed = maxspeed;
//             this.volume = volume;
// }
// drive ()  {
//     console.log(`їдемо зі швидкістю ${this.maxspeed} км на годину`);
// } 
// info() {
//     console.log(`
//     Model: ${this.model}
//     Producer: ${this.producer}     
//     Year: ${this.year}
//     Max speed: ${this.maxspeed}
//     Engine volume: ${this.volume}`);
// }
// increaseMaxSpeed(newSpeed) {
//     this.maxspeed += newSpeed;
// }
// changeYear (newValue) {
//     this.year = newValue;
// } 
// addDriver(driver = {}) {
//     this.driver = driver;
// }
// }

// let camaro = new CarInfo('camaro', 'chevrolet', 2016, 260, 5.7);
// let mustang = new CarInfo('mustang', 'ford', 2018, 245, 2.5);

// console.log(camaro);
// camaro.drive();
// camaro.info();
// camaro.increaseMaxSpeed(20);
// camaro.changeYear(2017);
// camaro.addDriver({name: 'Andrii', age: 30});
// console.log(camaro);

// console.log(mustang);
// mustang.drive();
// mustang.info();
// mustang.increaseMaxSpeed(10);
// mustang.changeYear(2019);
// mustang.addDriver({name: 'Igor', age: 27});
// console.log(mustang);


// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню


// let users = [
//         new User(3, 'Oleksii', 'Shyika', 'alex27@gmail.com', +380756863629),
//         new User(11, 'Andrii', 'Dydka', 'alex29@gmail.com', +380756653629),
//         new User(6, 'Ostap', 'Sova', 'alex45@gmail.com', +380756253629),
//         new User(14, 'Roma', 'Rika', 'alex17@gmail.com', +380756863649),
//         new User(5, 'Oleksii', 'Pika', 'alex37@gmail.com', +380779863629),
//         new User(25, 'Dima', 'Hey', 'alex45@gmail.com,' +380756865329),
//         new User(16, 'Vasya', 'Shyko', 'alex56@gmail.com', +380757563629),
//         new User(8, 'Vitya', 'Sak', 'alex79@gmail.com', +380754563629),
//         new User(19, 'Sergey', 'Wet', 'alex69@gmail.com', +380756863639),
//         new User(100, 'Oleksii', 'Antono', 'alex122@gmail.com', +345756863629),
//     ];


// let filter = users.filter(function(user) {
//     return user.id % 2 == 0;
// })

// console.log(filter);


// let sortToBig = users.sort(function(user1, user2) {
//     return user1.id - user2.id;
// })

// console.log(sortToBig);


// let sortToSmall = users.sort(function(user1, user2) {
//     return user2.id - user1.id;
// })

// console.log(sortToSmall);


// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню


//        let oleksii = new Client(1, 'Oleksii', 'Shyika', 'alex27@gmail.com', +380756863629, ['apple', 'banana']);
//        let ostap = new Client(2, 'Ostap', 'Sova', 'alex45@gmail.com', +380756253629, ['beer', 'bread', 'oil']);
//        let roma = new Client(3, 'Roma', 'Rika', 'alex17@gmail.com', +380756863649, ['ice-cream']);
//        let oleksa = new Client(4, 'Oleksii', 'Pika', 'alex37@gmail.com', +380779863629, ['milk', 'bread', 'beer', 'apple']);
//        let dima = new Client(5, 'Dima', 'Hey', 'alex45@gmail.com', +380756865329, ['apple', 'beer']);
//        let vasya = new Client(6, 'Vasya', 'Shyko', 'alex56@gmail.com', +380757563629, ['bread']);
//        let vitya = new Client(7, 'Vitya', 'Sak', 'alex79@gmail.com', +380754563629, ['oil', 'pepper', 'milk', 'beer', 'meat', 'eggs']);
//        let sergey = new Client(8, 'Sergey', 'Wet', 'alex69@gmail.com', +380756863639, ['onion', 'cucumber', 'pepper', 'tomato', 'milk']);
//        let oleksiy = new Client(9, 'Oleksii', 'Antono', 'alex122@gmail.com', +345756863629, ['apple']);
//        let andrii = new Client(10, 'Andrii', 'Antonov', 'alex2@gmail.com', +345757363629, ['bread', 'eggs', 'fish', 'oil', 'beer', 'meat']);
    
// let clients = [];
// clients = [oleksii, ostap, roma, oleksa, dima, vasya, vitya, sergey, oleksiy, andrii];

//     console.log(clients);

//     let sort = clients.sort((client1, client2) => {
//        return (client2.order).length - (client1.order).length
//     });
//     console.log(sort);


