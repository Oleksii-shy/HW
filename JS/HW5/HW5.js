// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"


// let textFromContent = document.getElementById('content');
// textFromContent.style.background = 'red'
// console.log(textFromContent.innerText);


//     b) отримує текст з блоку з id "rules"


// let textFromRules = document.getElementById('rules');
// console.log(textFromRules.innerText);


//     c) замініть текст параграфа з id 'content' на будь-який інший


// textFromContent.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic, saepe fuga veniam nisi ex!'


//     d) замініть текст параграфа з id 'rules' на будь-який інший


// textFromRules.innerText = 'The second rule of Fight Club is: you DO NOT talk about Fight Club! Third rule of Fight Club: if someone yells “stop!”, goes limp, or taps out, the fight is over. Fourth rule: only two guys to a fight.'


//     e) змініть кожному елементу колір фону на червоний


// let allElements = document.body.children;
// for (let item of allElements) {
//     item.style.background = 'red'
// }


//     f) змініть кожному елементу колір тексту на синій


// for (let itemText of allElements) {
//     itemText.style.color = 'blue'
// }


//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log


// let elementsRules = document.getElementById('rules');
// console.log(elementsRules);
// console.log(elementsRules.classList); 


//     h) отримати всі елементи з класом fc_rules


// let elementsWithFc_rules = document.getElementsByClassName('fc_rules');
// console.log(elementsWithFc_rules);
// for (let oneElement of elementsWithFc_rules) {
//     console.log(oneElement);
// }


//     i) поміняти колір тексту у всіх елементів fc_rules на червоний


// for (let oneElement of elementsWithFc_rules) {
//         oneElement.style.color = 'red'
//     }
