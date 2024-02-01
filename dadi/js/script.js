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
        // console.log(randomNumberUser);

        document.querySelector("#user-number").innerHTML = randomNumberUser;

        // chiediamo al pc di generare un numero random da 1 a 6
        const randomNumberPc = Math.floor(Math.random()*6 + 1);
        // console.log(randomNumberPc);

        document.querySelector("#pc-number").innerHTML = randomNumberPc;


        // se il numero generato dall'utente è MINORE del numero generato dal pc, scrivi hai vinto
        if (randomNumberUser > randomNumberPc){
            // console.log("hai vinto");

            document.querySelector("#result").innerHTML = `HAI VINTO`;
        // se il numero generato dall'utente è MAGGIORE del numero generato dal pc, scrivi hai vinto
        } else if (randomNumberUser < randomNumberPc){;
            // console.log("hai perso");

            document.querySelector("#result").innerHTML = `HAI PERSO`;
            // se il numero generato dall'utente è UGUALE del numero generato dal pc, scrivi avete pareggiato
        }else {
            // console.log("avete pareggiato");

            document.querySelector("#result").innerHTML = `AVETE PAREGGIATO`;
        };
    }
);