/*
Encriptar un texto digitado como parámetro de entrada al llamar el programa
eje: node ejercicio.js Hola Mundo cómo estás?

Entrada:
Hola mundo
Salida:
["g","n","k","z","l","t","m","c","n"]
*/
const parametros = process.argv;
const datos = parametros.splice(2,parametros.length-2);
const palabra = datos.join("");
const palabra_minuscula = palabra.toLowerCase();
const array = [];

for(let i = 0; i < palabra_minuscula.length; i++){
    array.push(buscarLetra(palabra_minuscula[i]));
}

console.log(array);


function buscarLetra(letra){
    if(letra==="a")
        return "z";
    const abecedario = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < abecedario.length; i++){
        if(letra===abecedario[i])
        return abecedario[i-1];
    }
}


