// JavaScript functions and Callbacks
// 1)
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
  // Getting comfortable with filter, map and forEach:
  // 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.).
  // Use the filter method to create a new array with only names of length <=3.
  // Use the forEach method to iterate and print (console.log) both the original and the new array.

  const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
  
  const namesShort = names.filter(function(name){
    return name.length <= 3
  });

  console.log("Original Array:");
  console.log(names);
  console.log("New Array:");
  console.log(namesShort);