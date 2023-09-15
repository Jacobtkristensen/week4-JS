// Implement YOUR OWN functions that takes callbacks as arguments
// Assume the array did NOT offer the map and filter methods. Then you would have to implement them yourself.  This is what you should do in the following to get practice with writing functions that take callbacks as arguments. 
// The next two functions should work exactly as the arrays built in methods, except that you will need to pass the array to be used, into the functions.


// a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
// Test the method with the same array and callback as in the example with the original filter method.
 
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

function myFilter(array, callback){
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const carsBefore2000 = myFilter(cars, car => car.year < 2000);

console.log(carsBefore2000);


console.log();
function myMap(array, callback){
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}
const carsPrice = myMap(cars, car => car.price);

console.log(carsPrice);

// b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
// Test the method with the same array and callback as in the example with the original map method.

