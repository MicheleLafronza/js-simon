// funzione che genera un numero random con un minimo e un massimo inclusi
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// funzione che genera una lista di numeri univoci
function uniqueNumbersList ( maxUniqueNum, min, max ) {
    // creo array
    const numList = [];

    while (numList.length < maxUniqueNum) {
        // funzione per generare numero random
        let num = rndNum(min, max);

        // check se il numero non c'è già nella lista, viene pushato
        if (numList.includes(num) === false) {
            numList.push(num);
        }
    }

    return numList;
}

// funzione che crea un elemento e aggiunge una classe
function newElementWithClass (elmnt, clss) {
    
    // creo l'elemento
    newEl = document.createElement(elmnt);

    // gli aggiungo la classe
    newEl.classList.add(clss);

    // output della funzione: elemento con classe
    return newEl;

}
