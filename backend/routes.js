let itemController = require("./gamesController.js");
let personaController = require("./mediController.js");

module.exports = function (app) {
    app.post('/api/guardar', itemController.guardar);
    app.get("/api/mostrar", itemController.mostrar);
    app.post('/api/eliminar', itemController.eliminar);
    app.post("/api/jugar", itemController.jugar);
    
    app.post("/api/iniciarSesion", personaController.iniciarSesion);
    app.post("/api/registrarse", personaController.registrarse);
};
