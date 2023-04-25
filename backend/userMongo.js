let mongoose = require("mongoose");
//exporta la libreria "mongoose"

let Schema = mongoose.Schema;
//crea el schema

let personaMongo = new Schema({
//crea el esquema
    correo: String,
    contrasena: String
//atributos del modelo pertsonaMongo
});

module.exports = mongoose.model("Persona", personaMongo);
//exporta el modelo