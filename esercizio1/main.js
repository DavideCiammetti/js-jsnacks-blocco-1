// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const parolaUno = prompt('scrivi la parola uno');
const parolaDue = prompt('scrivi la parola due');

// valuto se la parola uno è piu lunga
if(parolaUno.length > parolaDue.length){
    console.log(parolaDue);
    console.log(parolaUno);
}else if(parolaUno.length > parolaDue.length){          // valuto se la parola due è piu lunga
    console.log(parolaUno);
    console.log(parolaDue);
}else{
    console.log(parolaUno + parolaDue + 'sono della stessa lunghezza') ;
}