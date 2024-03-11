// ES6 - EcmaScript 6

let n1 = 2;
let n2 = n1;
n2 = n2 + 3;

console.log(n1);
console.log(n2);

// SPREAD OPERATOR (è quello dei 3 puntini ...)

const student = {
  name: "Cristian",
  surname: "Martucci",
  hasWebcam: true,
  batch: "FS0224",
  area: { lat: 12398123, lon: 19237812 }
};

// const student2 = student; // DA NON FARE MAI! tutto quello che non è una primitiva non si può copiare direttamente (pena: modificheremmo anche l'originale)

// Object.assign crea una COPIA SUPERFICIALE (SHALLOW COPY)
const student2 = Object.assign({}, student);
student2.name = "Francesco";
student2.area = Object.assign({}, student.area);

student2.area.lat = 0;
student2.area.lon = 0;

console.log(student);
console.log(student2);

// SPREAD PER OGGETTI
// Lo spread ci permette di creare una copia con meno passaggi, ma crea sempre una COPIA SUPERFICIALE (SHALLOW COPY)
// quindi andremo a fare lo spread anche di sotto referenze per slegarci dai riferimenti originali e poterle modificare in tranquillità
const student3 = { ...student, name: "Alessio", area: { ...student.area, lat: 1, lon: 1 }, planet: "Earth" };

// student3.area.lat = 1;
// student3.area.lon = 1;
console.log(student3);

// SPREAD PER ARRAY
console.log([..."Epicode is awesome"]);

const fruit = ["banana", "apple", "kiwi"];
const fruit2 = ["papaya", "mango", "pineapple"];

console.log(fruit.concat(fruit2));

const fruit3 = [...fruit, "pear", ...fruit2];
console.log(fruit3);

// REST OPERATOR (per raccogliere il restante di qualcosa: es. parametri di funzione)
// i 3 puntini (...) per raccogliere in un array tutti i restanti valori passati come parametro di funzione

const showPerson = function (name, surname, ...rest) {
  console.log(name);
  console.log(surname);
  console.log(rest);
};

showPerson(student.name, student.surname, student.hasWebcam, student.area.lat, student.area.lon);

// DESTRUCTURING (di oggetto)

// prima facevamo così...

// const name = student.name;
// const surname = student.surname;
// const hasWebcam = student.hasWebcam;

const { name, surname, hasWebcam, area, planet } = student3;

console.log(name, surname, hasWebcam, area, planet);

// DESTRUCTURING (di parametri di funzione)

// const showPersonProperties = function (obj) {
//   const { name, surname, hasWebcam, area, planet } = obj; // obj è il parametro: ovvero l'oggetto che passiamo al momento dell'esecuzione della funzione
//   console.log(name, surname, hasWebcam, area, planet);
// };
// showPersonProperties(student);

const showPersonProperties = function ({ name, surname, hasWebcam, area, planet }) {
  console.log(name, surname, hasWebcam, area, planet);
};

showPersonProperties(student);

// DESTRUCTURING (di array)

console.log("FRUIT3", fruit3);

// const first = fruit3[0];
// const second = fruit3[1];
// const third = fruit3[2];

const [first, , , fourth, ...rest] = fruit3;

console.log(first, fourth, rest);
