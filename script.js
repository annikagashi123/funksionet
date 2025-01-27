// let vitiLidjes = prompt("shkruaj vitin e lindjes");

// function kalkuloMoshen(vlera) {
//     console.log(2025 - vlera);
// }
// kalkuloMoshen(vitiLidjes);



// let vitiLidjes = prompt("shkruaj vitin e lindjes");

// function kalkuloMoshen(vlera) {
//    let rezultati = 2025 - vlera;
//    return rezultati;
// }
//  let mosha = kalkuloMoshen(vitiLidjes);
//  console.log("variable mosha" + mosha);



//3  gabim te numrimeimdh detyra ke gjeje numrin ma t madhe

// function numriMeiMadh(numri1 , numri2)
// if (numri1 > numri2) {
//     return numri1;
// } else if (numri1 == numri2) {
//     return "numrat jane te barabarte";
// }else {
//     return numri2;
// }
// console.log(numriMeiMadh(3,5));

//4 rpepatword
// function repeatWord(fjala, numriiPerseritjeve) {
//     if (fjala == "scantech"){
//         console.log("nuk e printojme kete fjale");
//         return;
//     }
//     for (let i = 1; i <= numriiPerseritjeve; i++) {
//         console.log(fjala);
//     }
//  }

//  repeatWord("scantech", 15);
//  repeatWord("mirjeta292", 10);
//  repeatWord("a", 100);
//  repeatWord(112345, 4);




//5



// function guesstheword(fjala) {
//     let fjalaEzgjedhur = "scantech";
//     if (fjalaEzgjedhur == fjala){
//         alert("urime e gjete");
//     }
//     else {
//         alert("nuk e keni gjetur");
//     }
// }
// let fjalaeuserit = prompt("qellojs fjales");
// guesstheword(fjalaeuserit);

//referenv
// let stringu1 = "Mirjeta";
// console.log(stringu1.length);
// for(let i = stringu1.length - 1;i = >= 0; i --) {
//     console.log(stringu1[i]);
// }


//gabim infinet loop
// function aKa(fjala){
//     console.log(fjala.length)
//     for(let i = fjala.length ; i >= 0; i--) {
//         console.log(fjala[i]);
//     }
// }
// aKa("mirjeta");


//i qet ne console rren 
// function aKa(fjala){
//     console.log(fjala.length)
//     for(let i = 0 ; i < fjala.length; i++) {
//         console.log(fjala[i]);
//     }
// }
// aKa("mirjeta");


//i qet consone mrpapsht
// function aKa(fjala){
//     console.log(fjala.length)
//     for(let i = fjala.length ; i >= 0 ; i--) {
//         console.log(fjala[i]);
//     }
// }
// aKa("mirjeta");

//6

// function aKa(fjala){
//        for(let i = 0 ; i < fjala.length; i++) {
//          if (fjala[i]=== "a" ) {
//             return true
//          }
//         }
//     }
    
    
    
//    console.log (aKa("mirjrgseyqwadreta") );


//7

function akAnumracift(varg) {
    let rezultati = false;
for (let i = 0; i < varg.length; i++){
    if (varg[i] % 2 === 0 ){
        rezultati = true;
        return;
    }
    else if (varg[i] % 2 !== 0){
        rezultati = false;
    }
}
return rezultati
}
 console.log(akAnumracift([1,2,3,43,54,2,4,6,8,7]) ) ;

 function akAnumracift(varg) {
for (let i = 0; i < varg.length; i++){
    if (varg[i] % 2 === 0 ){
    
    }
    else if (varg[i] % 2 !== 0){
       
    }
}
return rezultati
}
 console.log(akAnumracift([1,2,3,43,54,2,4,6,8,7]) ) ;
