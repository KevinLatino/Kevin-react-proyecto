let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let itemMongo = new Schema({
    nombre: String,
    sinopsis: String,
    desarrollador: String,
    imagen: String,
    jugado: Boolean 
});

module.exports = mongoose.model("juego", itemMongo);
