// Ejercicio calentamiento bootcamp de Guillermo Rodas:
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
