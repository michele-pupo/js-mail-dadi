// Mail
// - Chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// - stampa un messaggio appropriato sull’esito del controllo.
// - (NON utilizzate il metodo .includes())

// creo ARRAY lista di mail utenti che possono accedere
const listEmails = ["mcikpupo@gmail.com","pupomic@hotmail.it","pumiche@tiscali.com","michelepu@yahoo.com","yanniksinner@gmail.com","boolean@hotmail.it","michelepupo@hotmail.it","ronaldo@yahoo.com"];
console.log(listEmails)

//stato iniziale
const accessElement = false;

// verifichiamo se l'utente può accedere
const userEmailElement = document.querySelector("#user-email");