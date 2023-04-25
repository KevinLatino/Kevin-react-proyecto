let mongoose = require('mongoose');
//exporta la libreria "mongoose"

let Schema = mongoose.Schema;
//crea el schema

let itemMongo = new Schema({
 //crea el schema
    nombre: String,
    sinopsis: String,
    desarrollador: String,
    imagen: String,
    jugado: Boolean 
//atributos del objeto (juego)
});

module.exports = mongoose.model("juego", itemMongo);
//exporta un modelo
