// Asynchronous Callbacks
// Most of the javascript callbacks you will be using will be asynchronous, in contrary to map, filter and forEach which are synchronous (MAKE SURE you understand the difference)

// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
const msgPrinter = function(msg,delay){
  setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("My guess:")
console.log("aaaaaaaaaa");
console.log("dddddddddd");
console.log("ffffffffff");
console.log("eeeeeeeeee");
console.log("bbbbbbbbbb");

// 2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
console.log();
console.log("The result:")
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");