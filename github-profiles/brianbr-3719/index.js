
// ejercicios
//asignamos la cantidad de monedas de Hugo
let hugo = 15
// Calculamos la cantidad de monedas de Paco y Luis en funcion de hugo
let paco = 2 * hugo
let luis = paco + 10
//sumamos las cantidades de monedas de los tres amigos
let total = hugo + paco + luis
//y agregamos el condicional que solamente se ejecutara con el valor correcto de hugo (15).
if(total === 85){
    console.log("hugo: " + hugo)
    console.log("paco: " + paco)
    console.log("luis: " + luis)
    
  }
//verificar si un valor es un objeto
let a = []
  
if (typeof a === "object" && a !== null){
    console.log("a es un objeto")
  } else {
    console.log("a no es un objeto")
  }

//calentamiento 10/04/2023

//escribir un objeto "humano" que te represente.
const humano = {
  name: "Brian",
  lastname: "Polo",
  height: "1,77",
  age: 24,
  nationality: "Argentina"
}

//ejercicio 10/04/2023
// verificar si un valor es un array
let b = ["a", "b", "c", 6]

if(Array.isArray(b)){
  console.log("b es un array")
} else{
  console.log("b no es un array")
}