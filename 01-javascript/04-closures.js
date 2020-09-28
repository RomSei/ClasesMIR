"use strict";
const mascota = function(nombre){
    const obtenerNombre = function(){
        return nombre;
    }
    return obtenerNombre;
} 
const miMascota = mascota("Lucas");
console.log(miMascota());