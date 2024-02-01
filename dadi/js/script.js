// Gioco dei dadi
// - Generare un numero random da 1 a 6, 
//   sia per il giocatore sia per il computer.
// - Stabilire il vincitore, 
//   in base a chi fa il punteggio più alto.

// salvataggio elemnti DOM
const buttonElement = document.querySelector("#number-random");

// al click prende il numero inserito dall'utente e lo confronta con il numero random scelto dal pc
buttonElement.addEventListener('click',

    function(){

        // chiediamo all'utente di generare un numero random da 1 a 6
        const randomNumberUser = Math.floor(Math.random()*6 + 1);
        console.log(randomNumberUser);

        // chiediamo al pc di generare un numero random da 1 a 6
        const randomNumberPc = Math.floor(Math.random()*6 + 1);
        console.log(randomNumberPc);


        // se il numero scelto dall'utente è MINORE del numero scelto dal pc scrivi hai vinto
        if (randomNumberUser > randomNumberPc){
            console.log("hai vinto");
        // se il numero scelto dall'utente è MAGGIORE del numero scelto dal pc scrivi hai vinto
        } else if (randomNumberUser < randomNumberPc){;
            console.log("hai perso");
            // se il numero scelto dall'utente è UGUALE del numero scelto dal pc scrivi avete pareggiato
        }else {
            console.log("avete pareggiato");
        };
    }
);