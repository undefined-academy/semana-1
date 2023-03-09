
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
  
let a = []
  
if (typeof a === "object" && a !== null){
    console.log("a es un objeto")
  } else {
    console.log("a no es un objeto")
  }