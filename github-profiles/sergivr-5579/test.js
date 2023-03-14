const miPersona = {
    name: "Sergi",
    edad: 28,
    lenguajes: ['Python', 'JS', 'CSS']
}

if (typeof miPersona.lenguajes == 'object' && typeof miPersona.lenguajes.length != null) {
    console.log('Yas!')
}

if (Array.isArray(miPersona.lenguajes)) {
    console.log('Yas!')
} 