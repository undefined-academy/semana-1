/*
Fecha:          09-03-2023
Semana:         2
Clase:          2
Autor:          Germán Montenegro    
Discord:        GermanMR#9265
Actividad:      Ejercicio
Descripción:    ¿Cómo puedo implementar una expresión 
                para verificar si un valor es un array?
Solucion:
*/

const arr = []
//Opción 1
console.log(Array.isArray(arr))
//Opción 2
console.log(Array.isArray(arr)  && typeof arr === 'object')
