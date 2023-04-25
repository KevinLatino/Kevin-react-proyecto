const Persona = require("./userMongo");
//declara la varible Persona y exporta el modelo

exports.iniciarSesion = function (req, res) {
    //funcion anonima de iniciar sesion
    Persona.findOne({
        correo: req.body.correo,
        contrasena: req.body.contrasena
    //busca los datos en la base de datos de la persona
    }).then(function (persona) {
        res.json(persona);
    //retorna los datos de la persona
    });
};

exports.registrarse = function (req, res) {
    Persona.create(req.body)
    //guarda los datos que la persona ingresó en el modelo
      .then(function () {
        res.json({});
    //le damos una respuesta vacia al usuario
      })
};
