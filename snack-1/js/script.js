// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


var list = randomArr(0 , 100);
console.log(list);
start();


function start(){
    var num1 = parseInt(prompt("inserisci estremo intervallo 1 (minimo 1 massimo 100)"));
    var num2 = parseInt(prompt("inserisci estremo intervallo 2 (minimo 1 massimo 100)"));
    var intervallo = check(num1 , num2);
    console.log(range(intervallo[1] , intervallo[0] , list));
}

function check(minIndex , maxIndex){
   
    if (isNaN(minIndex) || isNaN(maxIndex) || minIndex <= 0 || maxIndex <= 0 || minIndex > list.length || maxIndex > list.length){
        alert('inserire input valido');
        start();
    }
    var arr = [];
    if (minIndex > maxIndex) {
        arr.push(minIndex);
        arr.push(maxIndex);
    }
    else {
        arr.push(maxIndex);
        arr.push(minIndex);
    }
    return arr;
}

function range(minIndex, maxIndex, array){
    minIndex = minIndex - 1 ;
    maxIndex = maxIndex - 1;
    var newList = [];
    for( var i = minIndex; i <= maxIndex; i++){
        newList.push(array[i]);
    }
    return newList;
}



// funzioni random

function randomArr( max , min){
    var arr = [];
    while (arr.length < 100){
        var numRandom = getRandom( max , min);
        if (!arr.includes(numRandom)){
            arr.push(numRandom);
        }
    }
    return arr;
}

function getRandom(max , min){
    return Math.floor(Math.random()* (max - min) + min)
}