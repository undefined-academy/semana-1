// Let's calculate how many coins does Huge have

let total = 85// hugo + paco + luis 

// let paco = 2 * hugo
// let luis = (2 * hugo) + 10
// let total = hugo + paco + luis
//        85 = hugo + (2 * hugo) + (2 * hugo) + 10
//        85 = 5* hugo + 10

let hugo = ( 85 - 10 ) / 5
let paco = 2 * hugo
let luis = paco + 10

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