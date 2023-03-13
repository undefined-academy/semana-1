/*
Fecha:          08-03-2023
Semana:         2
Clase:          1
Autor:          Germán Montenegro    
Discord:        GermanMR#9265
Actividad:      Calentamiento
Descripción:    Hugo, Pacvo y Luis tienen una cantidad desconocida de monedas cada uno.
                Sabemos que Paco tiene el doble de monedas que Hugo
                y que Luis tiene 10 monedas más que Paco.
                Si los tres juntos tienen un total de 85 monedas,
                ¿Cuántas monedas tiene cada uno?
Solucion:
*/

//Asignamos la cantidad de monedas de Hugo, este valor es el que tienes que resolver
let hugo = 15;

//calculamos la cantidad de monedas de Paco y Luis en función de Hugo
let paco = 2 * hugo;
let luis = paco + 10;
let total = hugo + paco +luis;

//Sumamos la cantidad de monedas de los tres amigos.
if (total == 85){
    console.log("Hugo: " + hugo)
    console.log("Paco: " + paco)
    console.log("Luis: " + luis)
}
else{
    console.log("Aún no hay solución... intenta nuevamente!")
}


