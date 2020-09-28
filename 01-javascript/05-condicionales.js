function division(dividendo, divisor){
    if(divisor === 0)
        return "Error";
    return dividendo / divisor;     
}
const resultado = division(5, 2);
console.log(resultado);