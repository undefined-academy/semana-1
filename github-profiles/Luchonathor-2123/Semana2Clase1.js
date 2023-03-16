let total;
let hugo = 0;
let paco = 0;
let luis = 0;
do {
    hugo++;
    paco = 2 * hugo;
    luis = paco + 10;
    total = hugo + paco + luis;
} while (total !== 85);

console.log(`Hugo - ${ hugo }`);
console.log(`Paco - ${ paco }`);
console.log(`Luis - ${ luis }`);

