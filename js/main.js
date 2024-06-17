// creo costante del bottone
const button = document.getElementById("play");

// creo costante dei div da far comparire
const title = document.querySelector(".number-title");

// creo costante container dei numeri
const container = document.querySelector(".number-container");

// creo costante risultato
const finalResult = document.getElementById("risultato");

// creo costante punteggio
const points = document.getElementById("punti");

// evento button
button.addEventListener("click", 
    function() {
        // rimuovo classe al container per reset
        container.classList.remove("d-flex");

        // rimuovo classe al titolo per reset
        title.classList.remove("d-block");

        // reset
        container.innerHTML=" ";

        // aggiungo classe al container per mostrarlo
        container.classList.add("d-flex");

        // aggiungo classe al titolo per mostrarlo
        title.classList.add("d-block");

        // creo array di 5 numeri casuali
        const fiveNums = uniqueNumbersList(5, 1, 10); 
        console.log(fiveNums);

        // avvio un ciclo per visualizzare i numeri nei div
        for (let i = 0; i < fiveNums.length; i++) {
    
        // creo variabile con indice array del numero
        let number = fiveNums[i];
    
        // avvio funzione per creare elemtno con classe
        box = newElementWithClass("div", "box-numbers");

        // inserisco nuovo elemento con classe nel container
        container.append(box);

        // inserisco numero nel box
        box.innerHTML=number;
        
        }

        // timer 30 secondi, numeri scompaiono
        setTimeout(simonSays, 30000);

        // avvio funzione che aggiunge classe con display none
        function simonSays() {
            title.classList.remove("d-block");

            const elmnt = document.querySelectorAll(".box-numbers");
        
            for (let i = 0; i < elmnt.length; i++) {
                elmnt[i].classList.add("d-none");
            }
        }

        // setto altro timeout un secondo dopo la scomparsa dei numeri che chiede le risposte all'utente
        setTimeout(risposte, 30500);

        function risposte() {

            // reset
            finalResult.innerHTML=`Numeri Indovinati:`;

            // reset
            points.innerHTML=` `;

            // creo array risposte esatte
            const correct = [];

            for (let i = 0; i < fiveNums.length; i++) {

                let numUser = parseInt(prompt("inserisci numero"));

                if (fiveNums.includes(numUser)) {
                    correct.push(numUser);
                }
            }

            // mostro i numeri indovinati
            for (let i = 0; i < correct.length; i++) {
                
                finalResult.innerHTML+=` ${correct[i]} `;
            }

            // mostro i punti effettuati
            points.innerHTML+=`Punti Effettuati: ${correct.length} `;

            

            
        }

    }
)
