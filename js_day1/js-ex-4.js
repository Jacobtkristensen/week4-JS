const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };
  // 4) Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function

function mul(n1,n2){
  return n1*n2}
console.log(cb(3,3,mul)); // prints n1+n2= callback(n1,n2) / 3(n1)+3(n2)= mul(3*3) = 9
                        // (it writes + instead of * because it is a string)
