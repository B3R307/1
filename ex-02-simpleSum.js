/**
 * simpleSum()
 * ------------------------------------------------------
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 *
 **/
 //
 // escribe una funcion llamada sum que tome dos numeros como entrada y realice
 // la suma de esos numeros


// Se declara la funcion con  los argumentos
function simpleSum(num1, num2){
  // ++ YOUR Code below: ++

  // se almacena el resultado en una variable de manera inicial, gralmente string vacio o en 0
     var resultado = 0;

// de define el valor de salida con la operacion entre los argumentos 
     resultado = num1 + num2

     // se devuelve el resultado
     return resultado
}

   //   NOTE you will need to write the functions for
   // //     the other ex-** problems in the problem set


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
//  function accepts two numbers as argument and
//    should return the sum total of the two numbers
/*--------------------------------------------------*/
console.log("==== ex-02-simpleSum : TEST 1 ====");

var returnedVal1 = simpleSum(8, 11)
console.assert( returnedVal1 === 19 );

var returnedVal2 = simpleSum(4, 101)
console.assert( returnedVal2 === 105 );

var returnedVal3 = simpleSum(2, 2)
console.assert( returnedVal3  !== 5 );

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
