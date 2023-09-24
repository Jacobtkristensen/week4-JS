import {SERVER_URL} from "../../settings.js"
import {makeOptions} from "../../utils.js"

export function initAddCar(){
  document.getElementById("add-car").addEventListener("click",addCar)
}


async function addCar(evt){
  // evt.preventDefault()
  // evt = alert("Car added. Please refresh the page to see the new car or check console.")
  //Get Cars from form
  const car = {
    brand : document.getElementById("brand").value,
    model : document.getElementById("model").value,
    pricePrDay : document.getElementById("pricePrDay").value,
    bestDiscount : document.getElementById("bestDiscount").value
  }

 const options = makeOptions("POST",car)

 const newCar = await fetch(SERVER_URL,options)
  .then(res => res.json())
  console.log(newCar)
}


