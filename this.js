// le funzioni normali, classiche, ereditano il this dal loro contesto di esecuzione
// le funzioni arrow lo ereditano dal contesto lessicale (ovvero là dove sono scritte), semplificando lo ereditano dal loro contesto esterno

// la keyword "this" ci permette di ottenere l'oggetto di riferimento al suo interno
// ci torna l'ambito di appartenenza di un metodo

const methodFunc = function () {
  console.log("THIS", this);
  console.log(`Ciao Epicoders, io sono ${this.name} ${this.surname}`);
};

const myObj = {
  name: "Stefano",
  surname: "Miceli",
  role: "teacher",
  myMethod: methodFunc
};

const myObj2 = {
  name: "Stefano",
  surname: "Casasola",
  role: "teacher",
  myMethod: methodFunc // function() {console.log("THIS", this);console.log(`Ciao Epicoders, io sono ${this.name} ${this.surname}`);};
};

const anyFunc = function () {
  console.log("THIS", this);
};

const myObj3 = {
  name: "Riccardo",
  surname: "Gulin",
  role: "teacher",
  myMethod: function () {
    console.log("THIS (outer)", this);

    // const innerFunc = function () {
    // console.log("THIS (inner)", this); // this è l'oggetto Window, perché questa funzione si eseguirà in un contesto globale, perdendo il riferimento all'oggetto di partenza
    // };
    // innerFunc();

    // le funzioni arrow ereditano il valore del this dal contesto lessicale, ovvero il contesto più esterno a dove sono scritte,
    // quindi avranno ereditato lo stesso valore del this che abbiamo visto a linea 35, che ritroveranno al momento della loro esecuzione
    setTimeout(() => {
      console.log("THIS (inner)", this);
      console.log(`Ciao Epicoders, io sono ${this.name} ${this.surname}`);
    }, 1000);

    // setTimeout(funzione da eseguire, millisecondi) // il setTimeout è una funzione globale che ci richiede una funzione che eseguirà dopo il numero di millisecondi che le specifichiamo
  }
};
