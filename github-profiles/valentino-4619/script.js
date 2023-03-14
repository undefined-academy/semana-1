function esObject(parameters) {
  return typeof parameters === "object"
    ? "esto es un ebjeto"
    : "no es un objeto";
}

console.log(esObject([]));
