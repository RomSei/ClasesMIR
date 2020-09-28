const cryptoJS = require("crypto-js");

const key = "my-secret-key";
const parametros = process.argv;
const modo = parametros[2];
if(modo === "1"){
    const datos = parametros.splice(3, parametros.length - 3);
    const texto = datos.join(" ");

    const textoEncriptado = cryptoJS.AES.encrypt(texto, key).toString();
    console.log(textoEncriptado);
}
if(modo === "2"){
    const textoEncriptado = parametros[3];
    const bytes = cryptoJS.AES.decrypt(textoEncriptado, key);
    const textoDesencriptado = bytes.toString(cryptoJS.enc.Utf8);
    console.log(textoDesencriptado);
}
/*
1: encriptar
2: desencriptar
node index.js 1 hola mundo cómo estás
node index.js 2 U2FsdGVkX18F3cW6OQ9WXJGM2/izDxZwgr4Y+gj0Iyo=
*/