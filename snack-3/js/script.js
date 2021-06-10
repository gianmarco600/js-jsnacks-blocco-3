//Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var arr1 = [1 , 2 , 3 , 4 , 5];
var arr2 = ['a' , 'b' , 'c' , 'd' , 'e'];

nuovoarr = merge( arr1 , arr2);
console.log(nuovoarr);

function merge(a , b){
    console.log(a , b);
    var arrMerge = [];
    if (a.length == b.length){
        for (var i = 0; i < arr1.length; i++){
             arrMerge.push(a[i]);
             arrMerge.push(b[i]);
        }
        return arrMerge;
    }
    else{
        console.log('gli array che vuoi fondere non sono lunghi uguale');
    }
}


// tentativo ricorsione
// function mischia(a , b, c, i){
//     if (i < 5){
//         c.push(a[i]);
//         c.push(b[i]);

//     }
//     return mischia(a , b , c , i++)
// }
