const fruits = ["banana", "apple", "kiwi", "pear", "papaya", "mango", "pineapple"];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  //   fruits[i] = fruit.toUpperCase();

  console.log(fruit);
}

// .forEach() - cicla un array e richiama la funzione che gli passiamo noi, per ogni elemento dell'array
fruits.forEach((fruit, i, array) => {
  // questo contesto verrà eseguito tante volte quanti sono gli elementi dell'array
  console.log(array); // l'array di partenza
  console.log(i + 1, fruit);
});

console.log(fruits);
const numbers = [2, 7, 19, 20, 50];

let sum = 0;
numbers.forEach(num => (sum += num));
console.log("SUM", sum);

// .map() - cicla un array e richiama la funzione che gli passiamo noi, per ogni elemento dell'array
// in più ritorna un NUOVO ARRAY con lo scopo di MODIFICARE GLI ELEMENTI di partenza
// il map ritorna un array con la stessa length dell'originale

const multipliedByTwo = numbers.map(num => num * 2);
console.log(numbers);
console.log(multipliedByTwo);

const numsAsStrings = numbers.map(num => num.toString());
console.log(numsAsStrings);

const numsAsLis = numbers.map(num => `<li>${num}</li>`);
console.log(numsAsLis);

const fruitsCaps = fruits.map(fruit => fruit.toUpperCase() + "!");

console.log(fruitsCaps);

const arrOfObjs = [
  { name: "Marina", surname: "Lucentini", kudos: 15 },
  { name: "Davide", surname: "Abbadessa", kudos: 25 },
  { name: "Emanuele", surname: "Mangano", kudos: 55 }
];

// const surnamesOnly1 = [];

// for (let i = 0; i < arrOfObjs.length; i++) {
//   const obj = arrOfObjs[i];

//   surnamesOnly1.push(obj.surname);
// }
// console.log(surnamesOnly1); //  ['Lucentini', 'Abbadessa', 'Mangano']

const surnamesOnly = arrOfObjs.map(obj => {
  return { lastName: obj.surname, kudos: obj.kudos };
});
console.log(surnamesOnly); //  ['Lucentini', 'Abbadessa', 'Mangano']

// .filter() - cicla un array e richiama la funzione che gli passiamo noi, per ogni elemento dell'array
// in più ritorna un NUOVO ARRAY con lo scopo di SELEZIONARE GLI ELEMENTI di partenza attraverso un test da superare
// gli elementi che passeranno il test prenderanno posto nel nuovo array, gli altri verranno scartati.
// il filter ritorna un array NON NECESSARIAMENTE con la stessa length dell'originale

// const filteredFruits = fruits.filter(fruit => {
//   console.log(fruit, fruit.startsWith("p"));
//   return fruit.startsWith("p");
// });
// const filteredFruits = fruits.filter(fruit => fruit.startsWith("p"));

const filteredFruits = fruits.filter(fruit => fruit.charAt(0) === "p");
console.log(filteredFruits);

const filteredFruitsGtFour = fruits.filter(fruit => fruit.length > 4);
console.log(filteredFruitsGtFour);

// .reduce()
// serve a ridurre i valori di una collezione ad un singolo valore
// quindi il reduce avrà un sigolo valore in uscita.
const reducedNums = numbers.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR", accumulator);
  console.log("CURR VALUE", currentValue);

  return accumulator + currentValue;
}, 0);

console.log(reducedNums);

const kudosSummed = arrOfObjs.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR", accumulator);
  console.log("CURR VALUE", currentValue);

  return accumulator + currentValue.kudos;
}, 0);
