
/*
ES6
 - arrow functions
 - default values
 - const y let
 - cadenas literales
 - destructuracion
 - ...
 - arrays
*/
const BMI = (weight = 1, height = 1) => {
    return weight / (height*height);
};
console.log(BMI(86, 1.8));

const BMIV2 = ([weight, height] = [1, 1]) => weight / (height * height);
console.log(BMIV2([86, 1.8]));

const cuadrado = (numero) => {
    return numero*numero;
};
console.log(cuadrado(3));

const cuadradoV2 = numero => {
    return numero*numero;
};
console.log(cuadradoV2(3));

const cuadradoV3 = numero => numero * numero;
console.log(cuadradoV3(3));

const numeros = [5,43,23432,23,65,332,312,1];
console.log(Math.max(...numeros));

const arr = [5, 7];
const impares = [1, 3, ...arr, 9, 11];
console.log(impares);

const persona = { nombre: "Jesus", apellido: "Estrada"};
const usuario = { ...persona, email: "jesuestrada@gmail.com", username: "jesus.estrada"};
console.log(usuario);

const arr1 = ["Hello"];
const arr2 = ["World"];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const arr4 = arr1.concat(arr2);
console.log(arr4);

const numeros = [1,2,4];
const letras = "abcdefg";
const resultado1 = numeros.concat(letras);
const resultado2 = [...numeros, ...letras];
console.log(resultado1);
console.log(resultado2);

const usuarios = [
    {name: "Juan", apellido: "Perez", edad: 36},
    {name: "Pedro", apellido: "Heredia", edad: 34},
    {name: "María", apellido: "Paz", edad: 22}
    ];
const mayores30 = usuarios.filter(usuario => usuario.edad > 30);
console.log(mayores30);

const usuarios = [
    {name: "Juan", apellido: "Perez", edad: 36},
    {name: "Pedro", apellido: "Heredia", edad: 34},
    {name: "María", apellido: "Paz", edad: 22}
    ];
console.log(usuarios.find(usuario => usuario.name === "Juan"));


const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acumulador, elemento)=> acumulador + elemento);
console.log(resultado);