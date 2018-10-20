/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 * usa operadores logicos , escribe una funcion llamada solo un string que acepte
 dos argumentos y devuelva verdadero si cada entrada es un string pero devulea falso
 si ambosargumentos no son un string

 * Hint : you will need to use the `typeof` operator
 **/
function justOneString(arg1, arg2){
    console.log(typeof arg1);
    console.log(typeof arg2);

    arg1 = typeof arg1
    arg2 = typeof arg2


  if(arg1 === "string" && arg2 === "string" ){
      return false
  } else if (arg1 === "string" || arg2 === "string" ) {
       return true
    } else {
      return false
    }      
  }


// function justOneString(arg1, arg2){
//   if(typeof arg1 === 'string' && typeof arg2 === 'string' ){
//     return false
//   } else if (typeof arg1 === 'string' || typeof arg2 === 'string'  ) {
//     return true
//   } else {
//     return false
//   }
// }



/*-------------------TEST-1-------------------------*/
// function receives 2 strings
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.assert(justOneString('peanut', 'butter') === false)


console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString(8, true) === false)
