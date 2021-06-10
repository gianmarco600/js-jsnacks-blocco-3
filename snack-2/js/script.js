// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

start();



function start(){
    var parolaUno = prompt('Inserire la prima parola');
    var parolaDue = prompt('Inserire la seconda parola');
    alert(confPrint(getLength(parolaUno) , getLength(parolaDue) , parolaUno , parolaDue));
}

function getLength(stringa){
    stringa = stringa.trim();
    return stringa.length;
}

function confPrint(num1 , num2 , stringa1 , stringa2){
    var mess;
    if(num1 > num2){
        mess = 'la parola ' + stringa1 + ' è piu lunga' ; 
    }
    else if(num2 > num1) {
        mess = 'la parola ' + stringa2 + ' è piu lunga' ; 
    }
    else{
        mess = 'le parole ' + stringa1 +' e '+ stringa2 + ' hanno la stessa lunghezza'; 
    }
    return mess;
}