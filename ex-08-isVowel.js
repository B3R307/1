/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/

  // Escribe una funcion llamada esVocal que devuelve verdadero o falso para cada
  // caracter de acuerdo a si es vocal o no

// dentro de los caracteres podemos distinguir mayusculas de minusculas por
// lo que vamos a homologar e l formato de los caracteres-


// porque se ponen parentesis despues de toLowerCase

function isVowel(char){
   var vowelNorm = char.toLowerCase()
   if(vowelNorm === "a" || vowelNorm === "e" || vowelNorm === "i" || vowelNorm === "o" || vowelNorm === "u" || vowelNorm === "y"){
       return true
   } else {
      return false
   }
}

 // function isVowel(char){
 //  var charNormalized = char.toLowerCase()
 //  if(
 //    charNormalized === 'a' ||
 //    charNormalized ==='e' ||
 //    charNormalized === 'i' ||
 //    charNormalized === 'o' ||
 //    charNormalized === 'u' ||
 //    charNormalized === 'y'
 //  ){
 //    return true
 //  } else {
 //    return false
 //  }
 // }



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function accepts string input
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(isVowel('a') === true);
console.assert(isVowel('e') === true);
console.assert(isVowel('i') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('u') === true);
console.assert(isVowel('y') === true);
 //(of course, 'y' is a vowel!!)

/*-------------------TEST-2-------------------------*/
// function receives string input
//    and returns boolean false if it is NOT a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 2 ====");

console.assert(isVowel('x') === false);
console.assert(isVowel('n') === false);

/*-------------------TEST-3-------------------------*/
// function will return true if passed
//   an uppercase vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 3 ====");
console.assert(isVowel('A') === true);
console.assert(isVowel('E') === true);
console.assert(isVowel('U') === true);
