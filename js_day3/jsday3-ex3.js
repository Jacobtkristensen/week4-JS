const SERVER_URL = "http://localhost:8080/api/cars";

// Show all cars

document.getElementById("btn-get-all").addEventListener("click", getAllCars);
document.getElementById("btn-find-car").addEventListener("click", getACar);
document.getElementById("add-car").addEventListener("click", addCar);
document.getElementById("btn-find-car2").addEventListener("click", getACar2);
document.getElementById("edit-car").addEventListener("click", editCar);

function getAllCars() {
  fetch(SERVER_URL)
    .then((res) => res.json())
    .then((cars) => {
      const tableRows = cars.map(
        (car) => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
            `
      );
      const rowsAsStr = tableRows.join("");
      document.getElementById("tbody").innerHTML = rowsAsStr;
    });
}

// Find a single car

function getACar() {
  const id = document.getElementById("text-for-id").value;
  fetch(SERVER_URL + "/" + id)
    .then((res) => {
      if (!res.ok) {
        return alert("Car Not Found");
      }
      return res.json();
    })
    .then((car) => {
      document.getElementById("found-car").innerText = JSON.stringify(
        car,
        null,
        2
      );
    });
}

// Add a car

function addCar() {
  const form = document.getElementById("carForm");
  const newCar = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: parseFloat(form.pricePrDay.value),
    bestDiscount: parseInt(form.bestDiscount.value),
  };

  console.log(newCar);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCar),
  };

  fetch(SERVER_URL, options)
    .then((res) => res.json())
    .then((carResponse) => {
      document.getElementById("new-car-response").innerText = JSON.stringify(
        carResponse,
        null,
        3
      );
    });
}

function getACar2() {
  const id = document.getElementById("text-for-id2").value;
  fetch(SERVER_URL + "/" + id)
    .then((res) => {
      if (!res.ok) {
        return alert("Car Not Found");
      }
      return res.json();
    })
    .then((car) => {
      document.getElementById("id2").value = car.id;
      document.getElementById("brand2").value = car.brand;
      document.getElementById("model2").value = car.model;
      document.getElementById("pricePrDay2").value = car.pricePrDay;
      document.getElementById("bestDiscount2").value = car.bestDiscount;
    });
}
// function editCar(evt) {
//   evt.preventDefault();
//   const form = document.getElementById("carForm2");
//   const id = document.getElementById("id2").value;
//   // const brand = document.getElementById("brand2").value;
//   // const model = document.getElementById("model2").value;
//   // const pricePrDay = document.getElementById("pricePrDay2").value;
//   // const bestDiscount = document.getElementById("bestDiscount2").value;

//   const editedCar = {
//     id: form.id2,
//     brand: form.brand2.value,
//     model: form.model2.value,
//     pricePrDay: form.pricePrDay2.value,
//     bestDiscount: form.pricePrDay2.value,
//   };
//   const options = {
//     method: "PUT", 
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(editedCar),
//   };

//   fetch(SERVER_URL + "/" + id2, options) 
//     .then((res) => {
//       if (!res.ok) {
//         return alert("Car Not Found")
//       }
//       return res.json()
//     })
//     .then((updatedCar) => {
//       document.getElementById("updated-car").innerText = JSON.stringify(
//         updatedCar,
//         null,
//         2
//       );
//     });
// }


//fungerer ikke som den skal.
//Den opdaterer i databasen, men smider en Uncaught(in promise) SyntaxError: unexpected end of JSON.  
//Ved PUT i postman, returnerer den heller ikke noget, så måske det er derfor jeg får error  ved linie 169 nedenfor?
// i så fald må det være et backend issue. 

function editCar(evt) {
  evt.preventDefault(); 
  const id=document.getElementById("text-for-id2").value 
  // Extract the values from the form
  const brand = document.getElementById("brand2").value;
  const model = document.getElementById("model2").value;
  const pricePrDay = document.getElementById("pricePrDay2").value;
  const bestDiscount = document.getElementById("bestDiscount2").value;

  // Create an object with the updated car data
  const editedCar = {
    id: id,
    brand: brand,
    model: model,
    pricePrDay: pricePrDay,
    bestDiscount: bestDiscount,
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedCar),
  };

  fetch(SERVER_URL + "/" + id, options)
    .then((res) => {
      if (!res.ok) {
        return alert("Car Not Found");
      }
      return res.json();
    })
    .then((updatedCar) => {
      document.getElementById("updated-car").innerText = JSON.stringify(
        updatedCar,
        null,
        2
      );
    });
}
