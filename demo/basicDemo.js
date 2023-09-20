const SERVER_URL = "http://localhost:8080/api/cars";

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => console.log(data));

const newCar = {
  brand: "Toyota",
  model: "RAV",
  pricePrDay: 500,
  bestDiscount: 25,
};

const options = {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(newCar)
}

fetch(SERVER_URL, options)
    .then(response => response.json())
    .then(carResponse => console.log(carResponse))