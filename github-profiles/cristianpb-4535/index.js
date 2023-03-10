let hugo = 15
let paco = hugo * 2
let luis = paco + 10
let total = hugo + paco + luis
if(total===85){
    console.log("hugo:"+ hugo)
    console.log("paco:"+ paco)
    console.log("luis:"+ luis)

}
let a = null
if(typeof a==="object"){
    console.log("a es un objeto")
}
const human = {
    name : "cristian", 
    age : "24",
    blackhaired : true,
    lastname : "polo"
}
let b = ["b", 5]
if(Array.isArray(b)){
    console.log("b es un arreglo")
}