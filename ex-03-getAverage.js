/**
 * getAverage()
 * ------------------------------------------------------
 * Write a function called getAverage that takes two numbers
 * as inputs and returns the average of the two. To avoid
 * repeating yourself, use your sum function inside
 * of your average function.
 *
 **/

// Escribe una funcion llamada promedio que tome dos numeros como entrada
// y devuelva el promedio de los dos numeros.

 // ++ YOUR Code below (write the 'getAverage' function): ++

 // function getAverage(num1, num2){
 //   // ++ YOUR Code below: ++
 //      var average = 0;
 //      average = (num1 + num2) / 2
 //
 //      return average
 // }

 // se delcara la funcion con los argumentos correspondientes
 function getAverage(num1, num2){
   // ++ YOUR Code below: ++

   // de declara la variable de resultado, inicialmente vacia
      var average = 0;

    // si en elresultado se quiere llamar una funcion ya existente
    // basta con llamarla directamente junto a sus argumentos
    // en este caso se adiciona la operación de división
      average = simpleSum(num1,num2) / 2

      // se devulve el resultado
      return average
 }


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
//  function accepts two numbers as argument and
//    should return the average of the two numbers
/*--------------------------------------------------*/

console.log("==== ex-03-getAverage : TEST 1 ====");

console.assert( getAverage(5,15) === 10 )
console.assert( getAverage(18,22) === 20 )
console.assert( getAverage(100,200) === 150 )
console.assert( getAverage(-12,12) === 0 )
console.assert( getAverage(-20,-10) === -15 )
console.assert( getAverage(0,-10) === -5 )


/*------------------------------------------------*/
/*-------------------END-------------------------*/
console.log('\n\n');
