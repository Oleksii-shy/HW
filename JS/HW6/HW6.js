// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку


// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
//   }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
//   }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
//   }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
//   }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
//   }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
//   }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
//   }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
//   }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
//   }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
//   }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
//   }];

  
//   for (let user of users) {
//       let div = document.createElement('div');

//       div.innerText = `
//       name: ${user.name}
//       age: ${user.age}
//       status: ${user.status}
//       address: city: ${user.address.city}, country: ${user.address.country}, street: ${user.address.street} 
//     `
//       document.body.appendChild(div);
//   }


//   2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості


// for (let user of users) {
//     let div = document.createElement('div');
//     div.innerText = `
//     name: ${user.name}
//     age: ${user.age}
//     status: ${user.status}`
//     let addressDiv = document.createElement('div');
//     addressDiv.innerText = `address:`
//     for (let key in user.address) {
//         let addressInfoDiv = document.createElement('div');
//         addressInfoDiv.innerText = `${key}: ${user.address[key]}`
//         addressDiv.appendChild(addressInfoDiv);
//     }
//     div.appendChild(addressDiv);
//     document.body.appendChild(div);
// }


// for (let user of users) {
//     let div = document.createElement('div');
//     div.style.margin = '10px'
//     for (let userKey in user) {
//         let itemDiv = document.createElement('div');
//         itemDiv.innerText = `${userKey}: ${user[userKey]}`
//         if (userKey == 'address') {
//             itemDiv.innerText = `${userKey}: ${''}`
//         }
//         div.appendChild(itemDiv);
//     } 
//     for (let addressKey in user.address) {
//         let addressDiv = document.createElement('div');
//         addressDiv.innerText = `${addressKey}: ${user.address[addressKey]}`
//         div.appendChild(addressDiv);
//     }
//     document.body.appendChild(div);
// }


// 3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html


			// let rules = [
			// 	{
			// 		title: 'Первое правило Бойцовского клуба.',
			// 		body: 'Никому не рассказывать о Бойцовском клубе.'
			// 	},
			// 	{
			// 		title: 'Второе правило Бойцовского клуба.',
			// 		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
			// 	},
			// 	{
			// 		title: 'Третье правило Бойцовского клуба.',
			// 		body: 'В схватке участвуют только двое.'
			// 	},
			// 	{
			// 		title: 'Четвертое правило Бойцовского клуба.',
			// 		body: 'Не более одного поединка за один раз.'
			// 	},
			// 	{
			// 		title: 'Пятое правило Бойцовского клуба.',
			// 		body: 'Бойцы сражаются без обуви и голые по пояс.'
			// 	},
			// 	{
			// 		title: 'Шестое правило Бойцовского клуба.',
			// 		body: 'Поединок продолжается столько, сколько потребуется.'
			// 	},
			// 	{
			// 		title: 'Седьмое правило Бойцовского клуба.',
			// 		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
			// 	},
			// 	{
			// 		title: 'Восьмое и последнее правило Бойцовского клуба.',
			// 		body: 'Новичок обязан принять бой.'
			// 	}
			// ];


    // let div = document.createElement('div');
    // div.setAttribute('id', 'content');
    // let h1 = document.createElement('h1');
    // h1.innerText = 'Правила бойцовского клуба';
    // let mainDiv = document.createElement('div');
    // mainDiv.setAttribute('id', 'wrap');

    // for (let i = 0; i < rules.length; i++) {
    //     let y = 1;
    //     let ruleDiv = document.createElement('div');
    //     ruleDiv.classList.add('rules', `rule${y += i}`);
    //     let h2 = document.createElement('h2');
    //     h2.innerText = `${rules[i].title}`
    //     let p = document.createElement('p');
    //     p.innerText = `${rules[i].body}`
    //     ruleDiv.append(h2, p);
    //     mainDiv.appendChild(ruleDiv);
    // }

    // document.body.append(div, h1, mainDiv);


    // HOMEWORK FROM VITYA


    // Написати код, який буде відображати в консолі 1 день життя, який складається з 10 подій. Зробити двома способами, не використовуючи почергових таймаутів.


    // let moneyInWallet = 100;

    // function WakeUp(WhenYouWakeUp) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (WhenYouWakeUp <= 8 && WhenYouWakeUp >= 5) {
    //                 resolve('Проснувся - улибнувся')
    //             }
    //             else {
    //                 reject('Хто спить до абєда - не поважає свого дєда')
    //             }
    //         }, 2000)
    //     })
    // }

    // function Washing(DidYouBrushTeeth) {
    //     return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (DidYouBrushTeeth) {
    //             resolve('Good boy')
    //         }
    //         else {
    //             reject('Dirty, lazy boy')
    //         }
    //     }, 3500)
    // })
    // }

    // function Breakfast(meal) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(`You had ${meal} for breakfast`)
    //         }, 1500)
    //     })
    // }

    // function GoToWork(method) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(`You will get to work by ${method}`) 
    //         }, 4000)
    //     })
    // }

    // function work(qualityOfWork) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (qualityOfWork) {
    //                 resolve(`You did a good job, get your money: ${moneyInWallet += 100} hrn`)
    //             }
    //             else {
    //                 reject('You are fired!')
    //             }
    //         }, 1000)
    //     })
    // }

    // function lunch(mealPrice) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (mealPrice < moneyInWallet) {
    //                 console.log('It was tasty');
    //                 resolve(`Money in your wallet = ${moneyInWallet -= mealPrice} hrn`)
    //             }
    //             else {
    //                 reject('It`s too much for me')
    //             }
    //         }, 1200)
    //     })
    // }

    // function superMarket(products = []) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(`You bought: ${products}, and spent 70 hrn. Your balance = ${moneyInWallet -= 70} hrn`)
    //         }, 2000)
    //     })
    // }

    // function goHome(method, price) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (price < moneyInWallet) {
    //                 moneyInWallet -= price;
    //                 resolve(`I have enough money for ${method}`)
    //             }
    //             else {
    //                 reject('Again by feet')
    //             }
    //         }, 3000)
    //     })
    // }

    // function dinner(meal) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(`You had ${meal} for dinner`)
    //         }, 1300)
    //     })
    // }

    // function countMoney() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (moneyInWallet > 150) {
    //                 resolve('It was a good day')
    //             }
    //             else reject('I can do better')
    //         }, 1000)
    //     })
    // }

    // WakeUp(+prompt('When did you wake up?', '0 - 24'))
    // .then(value => {
    //     console.log(value)
    //     return Washing(true)
    // })
    // .then(value1 => {
    //     console.log(value1);
    //     return Breakfast('scrambled eggs')
    // })
    // .then(value2 => {
    //     console.log(value2);
    //     return GoToWork('feet')
    // })
    // .then(value3 => {
    //     console.log(value3);
    //     return work(true)
    // })    
    // .then(value4 => {
    //     console.log(value4);
    //     return lunch(30)
    // })
    // .then(value5 => {
    //     console.log(value5);
    //     return superMarket(['apple', ' orange', ' beer', ' bread'])
    // })
    // .then(value6 => {
    //     console.log(value6);
    //     return goHome('taxi', 50)
    // })
    // .then(value7 => {
    //     console.log(value7);
    //     return dinner('rice')
    // })
    // .then(value8 => {
    //     console.log(value8);
    //     return countMoney()
    // })
    // .then(value9 => console.log(value9))
    // .catch(error => console.log(error))
    

    // async function OneDayOfLife() {
    //     try {
    //         let action1 = await WakeUp(+prompt('When did you wake up?', '0 - 24'));
    //         console.log(action1);

    //         let action2 = await Washing(true);
    //         console.log(action2);

    //         let action3 = await Breakfast('scrambled eggs');
    //         console.log(action3);

    //         let action4 = await GoToWork('feet');
    //         console.log(action4);

    //         let action5 = await work(true);
    //         console.log(action5);

    //         let action6 = await lunch(30);
    //         console.log(action6);

    //         let action7 = await superMarket(['apple', ' orange', ' beer', ' bread']);
    //         console.log(action7);

    //         let action8 = await goHome('taxi', 50);
    //         console.log(action8);

    //         let action9 = await dinner('rice');
    //         console.log(action9);

    //         let action10 = await countMoney();
    //         console.log(action10);
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }     
    // }

    // OneDayOfLife();