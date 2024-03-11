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

// .map() - cicla un array e richiama la funzione che gli passiamo noi, per ogni elemento dell'array
// in più ritorna un NUOVO ARRAY con lo scopo di MODIFICARE GLI ELEMENTI di partenza
// il map ritorna un array con la stessa length dell'originale

const numbers = [2, 7, 19, 20, 50];
const multipliedByTwo = numbers.map(num => num * 2);
console.log(numbers);
console.log(multipliedByTwo);

const fruitsCaps = fruits.map(fruit => fruit.toUpperCase() + "!");

console.log(fruitsCaps);

// .filter() - cicla un array e richiama la funzione che gli passiamo noi, per ogni elemento dell'array
// in più ritorna un NUOVO ARRAY con lo scopo di SELEZIONARE GLI ELEMENTI di partenza
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
