const name = "Jesus";
for (let indice = 0; indice < name.length; indice++){
    console.log(name[indice]);
}
//separar cadena por un caracter específico
const datos = "Jesus,Estrada,36,M";
const arreglo = datos.split(",");
console.log(arreglo[0]);//Jesus
console.log(arreglo[1]);//Estrada
console.log(arreglo[2]);//36
console.log(arreglo[3]);//M
//longitud de arreglo
console.log(arreglo.length);
//longitud de string
console.log(arreglo[1].length);
//juntar elementos de un arreglo en una cadena
const nombre = ["Jesus", "Estrada"].join(" ");
//convertir a may o min
console.log(nombre);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
//empieza con y termina con
console.log("Jesus Estrada".startsWith("J"));
console.log("Jesus Estrada".startsWith("E"));
console.log("Jesus Estrada".startsWith("j"));

console.log("Jesus Estrada".endsWith("a"));

console.log("Jesus Estrada".toLowerCase().startsWith("jesus"));

//substring (subcadena)
console.log("Jesus Estrada".substr(0,3));

const nombre_completo = "Jesus Estrada";
const iniciales = nombre_completo.split(" "); //split devuelve un arreglo
const primer_nombre = iniciales[0];
const apellido =  iniciales[1];

console.log(`${primer_nombre.substr(0,1)}.${apellido.substr(0,1)}.`);
console.log(primer_nombre.substr(0,1)+"."+apellido.substr(0,1)+".");

//reemplazar una subcadena en una cadena
console.log("¡Hola mundo!".replace("mundo", "Jesus"));

//buscar una subcadena en una cadena
console.log("Hola mundo".includes("H"));
console.log("Hola mundo".includes("h"));

