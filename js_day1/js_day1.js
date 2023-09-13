// Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

// Function Expression
      const sub = function(n1,n2){
  return n1 - n2
} 

// Callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};
// The following questions might seem trivial, but it's extremely important that you can answer (and understand) each, in order to do the JS-stuff we want to do this semester


// Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.

// console.log( add(1,2) )     //3.. prints the result of the function add, based on the arguments 1&2.
// console.log( add )          // "[Function: add]" add is a function, so it prints the function itself.
// console.log( add(1,2,3) ) ; //3 .. Shows the result of the 2 first arguments, and ignores the third. 
// console.log( add(1) );	  // NaN .. The function expects 2 arguments, but only gets one. "Not a Number"
// console.log( cb(3,3,add) ); // prints +n1+n2=callback(n1,n2) = 3(n1)+3(n2)= add(3+3) = 6
// console.log( cb(4,3,sub) ); // prints +n1+n2=callback(n1,n2) = 4(n1)+3(n2)= sub(4-3) = 1
// console.log(cb(3,3,add())); // "TypeError: callback is not a function" 
// add function is called incorrectly. Should be passed as a function, not a function call. .add().
console.log(cb(3,"hh",add));// it prints 3+hh=3hh, because the function add() is not type specific. 
// therefor it can add a number and a string by concatenating them.
