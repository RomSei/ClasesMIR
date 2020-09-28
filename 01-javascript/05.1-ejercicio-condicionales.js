//node 05.1-ejercicio-condicionales.js 150000 8

const SMLV = 877803;
const parametros = process.argv;

const precio = parametros[2];
const cantidad = parametros[3];
const totalVenta = precio * cantidad; 
let descuento;
let valorFinalVenta;

if(totalVenta>SMLV){
    descuento = totalVenta * 0.2;
    valorFinalVenta = totalVenta - descuento
}else{
    descuento=0;
    valorFinalVenta=totalVenta;
}

console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);
