/**
 * isNegative()
 * ------------------------------------------------------
 * Write a function called isNegative that returns true/false for
 * whether a number is negative or not.
 *
 **/
  // escribe una funcion llamada esNegativo que devuelva verdadero o falso
  // para cada uno si el numero es negativo o no


 // ++ YOUR Code below (write the 'isNegative' function): ++

// Se declara la funcion con su argumento
 function isNegative(num){

   // se delclara la variable de resultado en este caso al ser un boolean
   // gralmente se declara en falso
   var resultado = false;

// se realiza una validacion por medio de un IF para evaluar una condicion
// en este caso si el numero es mayor o menor a 0
// y determinar si el resultado es false o r true
   if(num < 0){

     // si el argumento es menor a 0 devolver TRUE por que es negativo
     resultado = true;

   } else {
     // si no es asi, simplemente devolver falso, pues no hay otro caso posible
     resultado = false;
  
   }
      // se devuelve el resultado
      return resultado
 }






// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives positive number value as input
//   and should return `false` boolean val
/*--------------------------------------------------*/
console.log("==== ex-04-isNegative : TEST 1 ====");

console.assert( isNegative(14) === false )
console.assert( isNegative(2) === false )


/*-------------------TEST-2-------------------------*/
// function receives number value of zero as input
//    and should return false` boolean val
/*--------------------------------------------------*/
console.log("==== ex-04-isNegative : TEST 2 ====");

console.assert( isNegative(0) === false )


/*-------------------TEST-3-------------------------*/
// function receives negative number value as input
//   and should return `true` boolean val
/*--------------------------------------------------*/
console.log("==== ex-04-isNegative : TEST 3 ====");

console.assert( isNegative(-1) === true )
console.assert( isNegative(-64) === true )

/*-------------------END-------------------------*/
console.log('\n\n');
