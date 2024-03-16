/* Ejercicios semana-2 */

/* Calentamiento 1: */

//asignamos la cantidad de monedas de Hugo
let hugo = 15
//Calculamos la cantidad de monedas de Paco y Luis en funcion de hugo
let paco = 2 * hugo
let luis = paco + 10
//sumamos las cantidades de monedas de los tres amigos
let total = hugo + paco + luis
//y agregamos el condicional que solamente se ejecutara con el valor correcto de hugo (15).
if(total === 85){
    console.log("hugo: " + hugo);
    console.log("paco: " + paco);
    console.log("luis: " + luis);
}

/* Ejercicio 1 */

//verificar si un valor es un objeto
let x = [];

function validarSiEsObjeto(valor) {
    if (typeof valor === "object" && valor !== null){
    console.log("Es un objeto")
    } else {
        console.log("No es un objeto")
    }
}
validarSiEsObjeto(x);

/* Calentamiento 2 */

//escribir un objeto "humano" que te represente.
const humano = {
  nombre: "Guillermo",
  apellido: "Bello",
  edad: 23,
  nacionalidad: "Venezuela",
  gustos: ['Tecnología','El Espacio','Aprender']
}

/* Ejercicio 2 */

// verificar si un valor es un array
let y = ['Gatos', 'Perros', "Hamsters"];

function validarSiEsArreglo(valor) {
    if(Array.isArray(valor)){
        console.log("Es un array");
    } else {
        console.log("No es un array");
    }
}
validarSiEsArreglo(y);
