// Getting comfortable with filter, map and forEach:
  

// 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.).
  // Use the filter method to create a new array with only names of length <=3.
  // Use the forEach method to iterate and print (console.log) both the original and the new array.
  const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
  
  const namesShort = names.filter(function(name){
    return name.length <= 3
  });

  console.log("Original Array:");
  names.forEach(function(name){
    console.log(name)});
    console.log("New Array:");
  namesShort.forEach(function(name){
    console.log(name)});  

  // this is more simple, but not using forEach:  
  // console.log("Original Array:");
  // console.log(names);
  // console.log("New Array:");
  // console.log(namesShort);

  // 2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
  namesUpper = names.map(function(name){
    return name.toUpperCase()
  });
  console.log("New Array in uppercase:");
  console.log(namesUpper);

  // 3) Use map, join + just a little bit more to create a function, which given the array of names, for example:
//   ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
// <ul>
//   <li>Lars</li>
//   <li>Peter</li>
//   <li>Jan</li>
//   <li>Ian</li>
// <ul>
// The output above was shown with newlines for readability, but this is actually what we want (why):

// <ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul>

// Eventually we will use DOM manipulation and place this into a “running” web-page.

const namesList = ["Lars", "Peter", "Jan", "Ian"];
namesListHTML = namesList.map(function(name){
  return "<li>"+name+"</li>"
});
const joinedList = `<ul>${namesListHTML.join("")}</ul>`;
console.log("New Array in HTML:");
console.log(joinedList);

// 4)  Given this JavaScript array
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
// a) Use the filter filter function to get arrays with only:
// Cars newer than 1999
// Al  Volvo’s
// All cars with a price below 5000
carsNewerThan1999 = cars.filter(function(car){
  return car.year > 1999
});
console.log("Cars newer than 1999:", carsNewerThan1999);
console.log();

volvos = cars.filter(function(car){
  return car.make === "Volvo"
});
console.log("All Volvos:", volvos);
console.log();

cheapcars = cars.filter(function(car){
  return car.price < 5000
});
console.log("All cars with a price below 5000:", cheapcars);
console.log();
