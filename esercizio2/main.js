'use strict';

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

// creo un ciclo per chiedere all'utente 10 volte di inserire un numero
for(let i = 0; i < 10; i++){
    // stampo il contatore
    console.log(' il contatore sta ad :' + ' ' + i);
    // prendo input dall'utente
    let numeroUtente = parseInt(prompt('scrivi un numero per la somma: '));
    // mostro a schermo l'input dell'utente
    console.log('il numero che hai inserito è: ' + numeroUtente);
    // sommo tramite la variabile somma i numeri inseriti dall'utente
    somma = somma + numeroUtente;
    console.log('la somma dei numeri è: ' +  somma);
}