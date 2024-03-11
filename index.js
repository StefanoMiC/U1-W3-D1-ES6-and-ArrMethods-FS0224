// LET & CONST sono i due nuovi metodi per dichiarare delle variabili con AMBITO DI BLOCCO (block level scope)

// una variabile dichiarata con "var" così come una funzione dichiarata con keyword "function" subiscono il cosiddetto "hoisting" (o sollevamento)

// console.log(myName);
// var myName = "Stefano";

let myName = "Stefano";

{
  let myName = "Giuseppe";
  // qui dentro abbiamo sovrascritto "myName" globale con un nuovo namespace interno (non ci sarà più possibile accedere a quello esterno)
  console.log(myName);
}
// in questo punto leggermo SEMPRE "Stefano" e mai "Giuseppe"
console.log(myName);

bark();

// function declaration con keyword - subisce hoisting!
// si potrà chiamarla prima della sua dichiarazione (non dovrebbe essere possibile)
function bark() {
  console.log("BAU!");
}

// le function expression risolvono il problema dell'hoisting
// const bark2 = function () {
//   console.log("Woof!");
// };

// bark2(); // in questo caso non sarà possibile chiamare la funzione prima della sua dichiarazione perché ci tornerebbe errore,
// questo comportamento è dato dalla natura di una variabile dichiarata come let/const
const bark2 = () => {
  console.log("Woof!");
};
bark2();

// con le arrow function le tonde sono obbligatorie quando abbiamo 0 o più di un parametro
const meow = voice => {
  console.log(voice);
};

// il valore in ingresso di una funzione si può attribuire attraverso l'ARGOMENTO che le passiamo,
// ovvero il dato che inseriamo tra le parentesi AL MOMENTO DELL'INVOCAZIONE!
meow("MEOOoooooOOw!", "home");

const sum = (n1, n2) => {
  return n1 + n2;
};

// chiamare la funzione "fruttifera", che ha un valore di ritorno, senza raccogliere il risultato o con una variabile o con un console.log ci farà perdere il valore "nel nulla"
sum(3, 3);

const result = sum(2, 3) + 5; // qui stiamo trattando la chiamata di funzione come il valore che produrrà (numero)
console.log(result); // leggiamo poi il risultato

console.log(sum(3, 6)); // qui stiamo catturando il valore in uscita con un console log

// le arrow function ci permetto di ridurre la sintassi andando a rendere il "return" IMPLICITO
// questo avviene quando mancano le graffe dopo la freccia
// in questo caso potremo avere una sola riga di codice

// ATTENZIONE ALLE GRAFFE!
const sumShort = (n1, n2) => n1 + n2;
// se abbiamo bisogno di più di una riga si ritorna alla sintassi di prima (es. funzione sum)

console.log(sumShort(3, 1));

// la differenza reale tra una funzione dichiarata con "function" e una arrow function sta nell'uso del "this"
