/**
 * makeGreeting()
 * ------------------------------------------------------
 * Write a function called makeGreeting() that accepts a string username
 * returns a string value that greets the user.
 *
 *
 **/

 // escribe una funcion llamada hacerSaludo que acepte un string con el nombre de
 // unusuario y devuelva el valor de un string de saludo al usuario


 // ++ YOUR Code below (write the 'makeGreeting' function): ++

// se declara la funcion con el argumento
function makeGreeting(username){
  // se delclara la variable de salida, un string vacio
    var   userGretting = "";

    // la variable de salida contiene el texto que deseo agragar al string del argumento
    userGretting = ("Hello " +  username)
    console.log(userGretting);
   // devuelve el resultado
    return userGretting
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives input 'stringValue'
//   should return 'Hello stringValue' (with space character)
/*--------------------------------------------------*/
console.log("==== ex-05-makeGreeting : TEST 1 ====")

var funcOutput1 = makeGreeting("Atushi")
var funcOutput2 = makeGreeting("Mira")
var funcOutput3 = makeGreeting("Nico")

console.assert( funcOutput1 === "Hello Atushi" )
console.assert( funcOutput2 === "Hello Mira" )
console.assert( funcOutput3 === "Hello Nico" )

/*-------------------END-------------------------*/
console.log('\n\n');
