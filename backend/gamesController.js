let Item = require("./gamesModel"); 
//importa el modelo

exports.guardar = function (req, res) {  
    //funcion anonima guardar
    Item.create({
        ...req.body,
    //le decimos que almacene los datos que la persona ingrese sd
        jugado: false  
    //le agregamos el atributo jugado que es un boleano
    });
    res.json({});
    //le damos una respuesta vacia al usuario
};

exports.mostrar = function (req, res) {
    //funcion anonima buscar
    Item.find()
    //encuntra todos los datos
        .then((datos) => res.json(datos));
    //cuando encuentre los datos retornelos al clientes
};

exports.jugar = async function (req, res) {
    //funcion anonima que indica cuando el juego es comprado
    await Item.updateOne({
        _id: req.body.id
    },
    {
        $set: {
            jugado: true
        }
    });
      //le dice que espere que sea utilizado la funcion jugar y que cuando la cuentre cambie el atributo jugado a true 
    res.json({});
        //le damos una respuesta vacia al usuario
};

exports.eliminar = async function (req, res) {
    await Item.deleteOne({ _id: req.body.id });
    //indica quie espere a que se utilice la funncion eliminar y  elimine el cuerpo del modelo cuando se ocupe
    res.json({});
    //se retorna una respuesta basica
};
