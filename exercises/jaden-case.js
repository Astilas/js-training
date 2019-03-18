'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(string){
     
     string = string.split('');
     for (let i=0; i < string.length; i++)
        if (string[i] === " "){
          string[i+1] = string[i+1].toUpperCase();
        }
    string[0] = string[0].toUpperCase();    
    let resultat = string.join('');
    return resultat;
 }


//* Begin of tests
const assert = require('assert')

/*assert.fail('You must write your own tests')*/
assert.strictEqual(jadenCase('How are you'),'How Are You')
assert.strictEqual(jadenCase('je code comme un wilder'),'Je Code Comme Un Wilder')
// End of tests */
