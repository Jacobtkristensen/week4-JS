const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };

// 5) Call cb, this time with an anonymous function that divides the first argument with the second

console.log(cb(25,5,function(n1,n2){
return n1/n2})); // prints n1+n2= callback(n1,n2) / 25(n1)+5(n2)= anonymous function(25/5) = 5 
                // (it writes + instead of / because it is a string)

