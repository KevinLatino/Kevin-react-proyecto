let itemController = require("./gamesController.js");
//declaramos la variable itemController la igualamos a exportar el controller de juegos
let personaController = require("./userController.js");
//declaramos la variable itemController la igualamos a exportar el controller de juegos

module.exports = function (app) {
    app.post('/api/guardar', itemController.guardar);
    app.get("/api/mostrar", itemController.mostrar);
    app.post('/api/eliminar', itemController.eliminar);
    app.post("/api/jugar", itemController.jugar);
    //api de guardar, eliminar, mostrar y jugar
    
    app.post("/api/iniciarSesion", personaController.iniciarSesion);
    app.post("/api/registrarse", personaController.registrarse);
    //api de iniciar sesion
};
