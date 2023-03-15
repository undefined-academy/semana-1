// Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver.

let hugo = 15; //respuesta es 15

// Calculamos la cantidad de monedas de Paco y Luis en función de Hugo

let paco = 2 * hugo;
let luis = paco + 10;

// Sumamos las cantidades de monedas de los tres amigos

let total = hugo + paco + luis;
if (total === 85) {
 console.log("Hugo: " + hugo)
 console.log("Paco: " + paco)
 console.log("Luis: " + luis)
}