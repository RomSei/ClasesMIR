let contador = 1;
const tope = 5;
while(contador <= tope){
    console.log("El valor de contador es: "+contador);
    contador = contador + 1;
}

const nombres = ["Walter", "Deissy", "Cesar", "Jefferson", "Roman"];
console.log("El arreglo en orden de los índices es:");
for(let indice=0; indice<nombres.length; indice++){
    console.log("El nombre en la posición "+indice+" es: "+nombres[indice]);
}
console.log("El arreglo en orden invertido de los índices es:");
for(let indice=nombres.length-1; indice>=0; indice--){
    console.log("El nombre en la posición "+indice+" es: "+nombres[indice]);
}