const bcrypt = require("bcryptjs");// bcrypt / bcryptjs

const saltRounds = 10;
const parametros = process.argv;
const modo = parametros[2];
const texto = parametros[3];
if(modo === "1"){
    const salt = bcrypt.genSaltSync(saltRounds);
    const textoEncriptado = bcrypt.hashSync(texto, salt);
    console.log(textoEncriptado);
}
if(modo === "2"){
    const hash = parametros[4];
    const respuesta = bcrypt.compareSync(texto, hash);
    console.log(respuesta);
}    


/*
node index.js 1 MiContraseña -> HASH
node index.js 2 MiContraseña 'HASH' -> True / False
*/
