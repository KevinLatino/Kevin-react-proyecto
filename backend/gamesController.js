let Item = require("./gamesModel"); 

exports.guardar = function (req, res) {  
    Item.create({
        ...req.body,
        jugado: false    
    });
    res.json({});
};

exports.mostrar = function (req, res) {
    Item.find()
        .then((datos) => res.json(datos));
};

exports.jugar = async function (req, res) {
    await Item.updateOne({
        _id: req.body.id
    },
    {
        $set: {
            jugado: true
        }
    });
    res.json({});
};

exports.eliminar = async function (req, res) {
    await Item.deleteOne({ _id: req.body.id });
    res.json({});
};
