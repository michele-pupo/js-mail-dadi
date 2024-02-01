// Mail
// - Chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// - stampa un messaggio appropriato sull’esito del controllo.
// - (NON utilizzate il metodo .includes())

// salvataggio degli elementi del DOM
const buttonElement = document.querySelector("#control-email");


buttonElement.addEventListener('click',

        function(){

        // creo ARRAY lista di mail utenti che possono accedere
        const listEmails = ["mcikpupo@gmail.com","pupomic@hotmail.it","pumiche@tiscali.com","michelepu@yahoo.com","yanniksinner@gmail.com","boolean@hotmail.it","michelepupo@hotmail.it","ronaldo@yahoo.com"];
        // console.log(listEmails);

        // verifichiamo se l'utente può accedere
        const userEmailElement = document.querySelector("#user-email").value;
        // console.log(userEmailElement)


        // variabile iniziale in false
        let controlAccess = false;

        for (let i = 0; i < listEmails.length; i++){
            
            if (listEmails[i] === userEmailElement) {

                // se l'email è corretta la variabile si trasforma in true
                controlAccess = true;
            }
        } 

        //stampo in pagina il risultato della verifica ottenuto tramite il ciclo for
        if (controlAccess === false) {
            console.log('Non puoi accedere');
            document.querySelector("#outcome").innerHTML = `Email non presente nel sistema`;
        } else {
            console.log('Puoi accedere');
            document.querySelector("#outcome").innerHTML = `Puoi accedere`;
        }
        } 
);


// secondo metodo senza l'uso del ciclo for

// buttonElement.addEventListener('click',

//         function(){

//         // creo ARRAY lista di mail utenti che possono accedere
//         const listEmails = ["mcikpupo@gmail.com","pupomic@hotmail.it","pumiche@tiscali.com","michelepu@yahoo.com","yanniksinner@gmail.com","boolean@hotmail.it","michelepupo@hotmail.it","ronaldo@yahoo.com"];
//         // console.log(listEmails);

//         // verifichiamo se l'utente può accedere
//         const userEmailElement = document.querySelector("#user-email");

//             if (listEmails.indexOf(userEmailElement.value) > -1){
//                 document.querySelector("#outcome").innerHTML = `Puoi accedere`;

//             }else{
//                 document.querySelector("#outcome").innerHTML = `Non puoi accedere`;

//             }
//         }
// );