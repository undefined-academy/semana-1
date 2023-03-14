// Ejercicio de como verificar en javascript si es un objeto

let x = [];
let y = null;

//Primer metodo

const datay = (Object.prototype.toString.call(y));
if(datay === '[object Null]'){
    console.log('No es un objeto')
}else{
    console.log('Es un objeto')
}


//Segundo metodo

try {
    const datay = y.valueOf 
    console.log('object');
}catch(err){
    console.error('not object');
}


// Ejercicio para verificar si un objeto es un array

const datax = (Object.prototype.toString.call(x));
if(datax === '[object Array]'){
    console.log('Es un array')
}else{
    console.log('No es un array')
}
