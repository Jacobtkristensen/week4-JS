// 1) Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
// Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.
// for(prop in myObj){
//   console.log(prop,myObj[prop])
// }
// Use the delete keyword to demonstrate we can delete existing properties from an object (delete a property, and iterate over the properties again) 
// Add a new property to your object to demonstrate that we can add new properties to existing objects

const Jacob = {
    name: "Jacob",
    birthday: "12-07-1993",
    hobby: "Gaming",
    email: "dertroededulige@snydt.dk"
}
for (prop in Jacob){
    console.log(prop,Jacob[prop])
}
console.log();

delete Jacob.email;
console.log("After deleting email:");
for (prop in Jacob){
    console.log(prop,Jacob[prop])
}
console.log();

Jacob.phone = "88888888";
console.log("After adding phone:");
for (prop in Jacob){
    console.log(prop,Jacob[prop])
}