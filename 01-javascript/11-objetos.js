const persona = {
    "nombre": "Jesus",
    "apellido": "Estrada",
    "edad": 36,
    "genero": "M",
    "estatura": 1.8,
    "instructor": true,
    "direcciones": [
        "Kra 123", "Calle 456"
    ],
    "telefono":{
        "indicativo": "57",
        "numero": "1234567"
    }
};
persona.nacionalidad = "colombiano";
delete persona.estatura;

console.log(typeof(persona));
console.log(persona);
console.log(persona.direcciones);
console.log(persona["direcciones"]);
console.log(persona.direcciones.length);
console.log(persona.telefono);
console.log(persona.telefono.indicativo);
console.log(persona.telefono.numero);

console.log("Recorrido de cada propiedad");
for(let llave in persona){
    console.log(persona[llave]);
}
console.log("Fin recorrido");

const personas = [
    {
        "nombre": "Jesus",
        "apellido": "Estrada",
        "telefonos": [
            {
                "indicativo": 57,
                "numero": 123455667
            },
            {
                "indicativo": 1,
                "numero": 87654345
            }
        ]
    },
    {
        "nombre": "David",
        "apellido": "De La Hoz"
    }
];
console.log(personas);

