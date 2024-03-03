
// const nav = document.querySelector(".nav-list a")
// const nav1 = document.querySelector(".nav-list :nth-child(1)")
// const nav2 = document.querySelector(".nav-list :nth-child(2)")
// const nav3 = document.querySelector(".nav-list :nth-child(3)")
// const nav4 = document.querySelector(".nav-list :nth-child(4)")

// async function change(params) {
//     await setInterval(() => {
//         nav1.classList.toggle("ColorInRed")
//     }, 1000).then( setInterval(() => {
//         nav2.classList.toggle("ColorInRed")
//     }, 1000)).then(
//         setInterval(() => {
//             nav3.classList.toggle("ColorInRed")
//         }, 1000)
//     ).then(
//         setInterval(() => {
//             nav3.classList.toggle("ColorInRed")
//         }, 1000)
//     );
//     }

// function change(temps) {
//     temps = 1000
//     setInterval(() => {
//         nav1.classList.toggle("ColorInRed")
//     }, temps)
// }
// function change2(temps) {
//     temps = 1000
//     setInterval(() => {
//         nav2.classList.toggle("ColorInRed")
//     }, temps * 2)
// }
// function change3(temps) {
//     temps = 1000
//     setInterval(() => {
//         nav3.classList.toggle("ColorInRed")
//     }, temps * 2)
// }
// function change4(temps) {
//     temps = 1000
//     setInterval(() => {
//         nav4.classList.toggle("ColorInRed")
//     }, temps * 4)
// }

// async function callerFun() {
//     console.log('Caller');
//     await change();
//     console.log('After waiting');
//     await change2();
//     await change3();
//     await change4();

// }

// callerFun();

// function change(temps) {
//     return new Promise((resolve, reject) => {setTimeout(nav1.classList.toggle("ColorInRed"), resolve(), 1000)})
// }
// function change2(temps) {
//     return new Promise((resolve, reject) => {setTimeout(nav2.classList.toggle("ColorInRed"), resolve(), 1000)})
// }
// function change3(temps) {
//     return new Promise((resolve, reject) => {setTimeout(nav3.classList.toggle("ColorInRed"), resolve(), 1000)})
// }
// function change4(temps) {
//     return new Promise((resolve, reject) => {setTimeout(nav4.classList.toggle("ColorInRed"), resolve(), 1000)})
    
// }

// async function callerFun() {
//     await change();
//     await change2();
//     await change3();
//     await change4();

// }

// callerFun();





/**
//  * @property {number} data
 */

// a = {
//     nom: 'Julien',
//     Agee: 20
// }

// const AAGE = a.nom + " a " + a.Agee

// console.log(`${AAGE}`);

// class Personne {
//     constructor(name, age, country) {
//         this.name = name
//         this.age = age
//         this.country = country
//     }
// }

// let julien = new Personne("Julien", "15ans", "Mayotte");
// console.log(`Hello, my name is ${julien.name}`.toUpperCase());

// const str = 'The quick brown fox jumps over the lazy dog.';

// const frequence = {}
// const wordslist = str
//     .toLowerCase()
//     .split(" ")
// for (let mot in wordslist) {
//     if (frequence[mot]) {
//         frequence[mot]++
//     } else { frequence = 1 }

// }

// console.log(wordslist);

// class Rectangle {
//     constructor(longeur, hauteur) {
//         this.longeur = longeur
//         this.hauteur = hauteur
//     }
//     get perimetre() {
//         let result = this.longeur * 2 + this.hauteur * 2
//         if (result > 0 && result !== NaN) {
//             return result
//         } else {
//             console.log("Erreur");
//         }
//     }
// }
// let exemple = new Rectangle(20, 20);
// console.log(exemple.perimetre);

// let i = 0
// function param() {
//     console.log("yo");
// }
// setInterval((param), 1000)

// const t = setInterval((compte), 1000)

// let i = 0
// function compte() {
//     i++
//     console.log("Yo" + i);
//     if (i >= 5) {
//         clearInterval(t)
//     }
// }
// let i = 5
// function decompte() {
//     console.log(i);
//     i--
//     if (i == 0) {
//         clearInterval(t)
//     }
// }

// const t = setInterval((decompte), 1000);
// const p = new Promise((resolve, reject) => {
//     200,
//         "Erreur d'url"
// })

// p.catch((err) => {
//     consol.log(err)
// })
// async function X() {
// const c = prompt("Donne ton champion")
//     const reponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json`).catch("Erreur");
//     const data = await reponse.json();
//     console.log(data);
// }

// X()