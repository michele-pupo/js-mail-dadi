// Gioco dei dadi
// - Generare un numero random da 1 a 6, 
//   sia per il giocatore sia per il computer.
// - Stabilire il vincitore, 
//   in base a chi fa il punteggio più alto.

// salvataggio elemnti DOM
const buttonElement = document.querySelector("#number-random");

// al click prende il numero inserito dall'utente e lo confronta con il numero
// random scelto dal pc
buttonElement.addEventListener('click',

    function(){

        // chiediamo all'utente di scegliere un numero da 1 a 6
        const inputUserNumberElement = document.querySelector("#user-number");

        // chiediamo al pc di generare un numero random da 1 a 6
        var randomNumber = Math.floor(Math.random()*6 + 1);
        console.log(randomNumber);


        // se il numero scelto dall'utente è MINORE del numero scelto dal pc scrivi hai vinto
        if (inputUserNumberElement.value > randomNumber){
            console.log("hai vinto");
        // se il numero scelto dall'utente è MAGGIORE del numero scelto dal pc scrivi hai vinto
        } else if (inputUserNumberElement.value < randomNumber){;
            console.log("hai perso");
            // se il numero scelto dall'utente è UGUALE del numero scelto dal pc scrivi avete pareggiato
        }else {
            console.log("avete pareggiato");
        };
    }
);