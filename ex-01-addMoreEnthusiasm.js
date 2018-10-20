/**
 * (DEMO) addMoreEnthusiam()
 * ------------------------------------------------------
 * Write a function called `addMoreEnthusiam` that takes a string as
 * input and appends three exclamation marks to the end of the string.
 *
 **/

// escribe una funcion llamda agrega mas entusiasmo que tome un string como entrada y agregue
// signos de exclamacion al final del string


// (DEMO) You, the student, will write the function

// *Se declara la funcion con el argumento?**/
function addMoreEnthusiasm(inputTxt){

	// ...and your code goes here
// el resultado se almacena en una variable que contiene el  argumento?
//  más los simbolos que deseo agregar, en este caso !!!

	var inputWithEnthusiasm = inputTxt + "!!!"

	// se devuelve el resultado contenido en la variable de salida
   return inputWithEnthusiasm
	 // Remember, you must return a value. Nice!
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

/*-------------------TEST-1-------------------------*/
console.log(`==== ex-01-addMoreEnthusiam : TEST 1 ====`);

var output1 = addMoreEnthusiasm("I want pizza")
/**/console.assert( output1  === "I want pizza!!!" );

/*-------------------TEST-2-------------------------*/
console.log("==== ex-01-addMoreEnthusiam : TEST 2 ====");

var output2 = addMoreEnthusiasm("Hey")
/**/console.assert( output2 === "Hey!!!");

/*-------------------TEST-3-------------------------*/
console.log("==== ex-01-addMoreEnthusiam : TEST 3 ====");

var output3 = addMoreEnthusiasm("mother")
/**/console.assert( output3 === "mother!!!");

/*-------------------TEST-4-------------------------*/
console.log("==== ex-01-addMoreEnthusiam : TEST 4 ====");

var output4 = addMoreEnthusiasm("ouch")
/**/console.assert( output4 === "ouch!!!");

/*-------------------END-------------------------*/
console.log("\n\n")
