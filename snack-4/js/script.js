// Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var parola = prompt('inserisci una parola');
parola = parola.trim();
console.log(capitalize(parola));


function capitalize(string){
    var primChar = string.charAt(0);
    primChar = primChar.toUpperCase();
    string = string.substring(1).toLowerCase();
    string = primChar + string;
    return string;

}
