/**
 * makeUserGreeting()
 * ------------------------------------------------------
 * Write a function called makeUserGreeting() that takes
 * (1) a string and (2) a boolean as arguments.

 Escribe una funcion llamada hazunSaludodeUsuario que tome un string y un boleano
 como argumentos
 *
 * The string-argument will be a username and the boolean-argument
 * will signify a true/false value for a returning customer.
 *
 el argumento de string puede ser el nombre de usuario y el argumento boleano
 puede ser un valor verdadero o falso que para el usuario que devuelve

 * If the 2nd input is the boolean value `true`,
 * then the function should return a 'Good to see you again, «username».' greeting
 *    Ex: makeUserGreeting('Janet', true) //=> "Good to see you again, Janet."

Si el 2o argumento de entrada(boleano) es verdadero, entonces la funcion debe retornar
'Es bueno verte otra vez y el nombre de argumento 1 (nombre de usuario)
 y la palabra saludos'
 *
 * If the 2nd input is the boolean value `false`,
 * then the function should return a 'Welcome, «username»!' greeting
 *    Ex: makeUserGreeting('Janet', false) //=> "Welcome, Janet!"

Si el segundo argumento de entrada es falso entonces la funcion debe devolver
'Bienvenido nombre de usuario(arg1) saludos'

 *
 NOTE: Don't forget the comma and space and ending puctuation when building the string.
 **/

  function makeUserGreeting(username, boolArg){
    var greettingStatus = ""

    if(boolArg === true){
      greettingStatus = "Good to see you again, " + username + "."
    
    } else {
      greettingStatus = "Welcome, " + username + "!"
    }
       return greettingStatus
  }


// en que momento se usa el return y en que momento se
// utiliza la variable de resultado o salida

// function makeUserGreeting(str, boolArg){
//   if(boolArg === true){
//     return `Good to see you again, ${str}.`
//   } else {
//     return `Welcome, ${str}!`
//   }
// }


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


 /*-------------------TEST-1-------------------------*/
 // function string-input 'Atushi' and boolean-input `true`
 //   should return string: 'Good to see you again, «string-input».'
 /*--------------------------------------------------*/
 console.log("==== ex-06-makeUserGreeting : TEST 1 ====");


var funcOutput1 = makeUserGreeting("Atushi", true)
var funcOutput2 = makeUserGreeting("Mira", true)
var funcOutput3 = makeUserGreeting("Nico", true)

console.assert( funcOutput1 === "Good to see you again, Atushi." )
console.assert( funcOutput2 === "Good to see you again, Mira." )
console.assert( funcOutput3 === "Good to see you again, Nico." )

console.assert( funcOutput3 !== "Welcome, Nico!");


/*-------------------TEST-2-------------------------*/
// function receives string-input 'Atushi' and boolean-input `false`
//   should return string: 'Welcome, «string-input»!'
/*--------------------------------------------------*/
console.log("==== ex-06-makeUserGreeting : TEST 2 ====");


var funcOutput4 = makeUserGreeting("Atushi", false)
var funcOutput5 = makeUserGreeting("Nico", false)
var funcOutput6 = makeUserGreeting("Mira", false)

console.assert( funcOutput4 === "Welcome, Atushi!");
console.assert( funcOutput5 === "Welcome, Nico!");
console.assert( funcOutput6 === "Welcome, Mira!");

console.assert( funcOutput6 !== "Good to see you again, Mira.");

/*-------------------END-------------------------*/
console.log('\n\n');
