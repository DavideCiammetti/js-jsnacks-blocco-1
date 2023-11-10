// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const parolaUno = prompt('scrivi la parola uno');
const parolaDue = prompt('scrivi la parola due');

if(parolaUno > parolaDue){
    console.log(parolaUno);
    console.log(parolaDue);
}else{
    console.log(parolaDue);
    console.log(parolaUno);
}