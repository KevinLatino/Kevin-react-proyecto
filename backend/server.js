let express = require('express');
//exporta la libreria express
let mongoose = require("mongoose");
//exporta la libreria mongoose
let bodyParser = require('body-parser');
//libreria para traducir las entradas en formato json a js

let cors = require('cors');
//libreria que desabilita cors

let port = 8080;
//puerto 8080 al que se va a conectar
let mongoAtlasUri = 'mongodb+srv://prueba:prueba@cluster0.zsa7ygr.mongodb.net/?retryWrites=true&w=majority';
//base de datos que se usará

let app = express();


app.use(bodyParser.json({ limit: '50mb' }));
//se instala el middlework 
app.use(cors());
require('./routes.js')(app);
//se incluyen las rutas

mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true });
//se conecta con servidor 
let dbConnection = mongoose.connection;
dbConnection.on("error", function (error) {
    console.log(error)
    //si algo sale mal nos dice error
});
dbConnection.once("open", function () {
    console.log("Conectado")
    //si todo sale bien nos dice en la consola conectado
});

app.listen(port);
//se inicia el servidor 
console.log(port);

