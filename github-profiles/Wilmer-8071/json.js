// Ejercicio calentamiento 01 bootcamp de Guillermo Rodas:
// Hugo, Paco y Luis tienen una cantidas desconocida de monedas cada uno
//Sabemos que Paco tiene el doble de monedas que Hugo y que Luis tiene 10 monedas mas que Paco

//Si el total de ellos tienen 85 Monedas, ¿Cuantas Monedas tiene cada uno?

let hugo = 15;

let paco = 2 * hugo;
let luis = paco + 10;

let total = hugo + paco + luis;

if (total === 85){
    console.log("Hugo:" + hugo);
    console.log("Paco:" + paco);
    console.log("Luis:" + luis);
}


//Ejercicio 1 - Semana 02

//Como implementar una expresion para verificar si un valor es un objeto

function idObjeto(obj) {
    return typeof obj === "object" && obj !== null;
}

console.log(idObjeto([]))

// Ejercicio calentamiento 02 bootcamp de Guillermo Rodas:
//Escribir un objeto "humano" que te represente:

const human = {
    name: "Wilmer",
    edad: 30,
    sexo: "Masculino",
    estatura: 1.78,

}
console.log(human);

//Ejercicio 02 - semana 02:
//¿Como implementar una expresion para verificar si un valor es un array?

function idArray(arr){
    return Array.isArray(arr) && arr !== null;
}

// let arr = []; - Devuelve true
// let arr = 5; - Devuelve false

console.log(idArray(arr));