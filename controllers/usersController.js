var db=require('../db')

//Conectar con la BD
db.connect('mongodb://localhost:27017', function (err) {
    if (err) {
        throw ('Fallo en la conexión con la BD'); }
});

//Mostrar usuario
module.exports.users_list = function (req, res) { 
    db.get().db('apidb').collection('users').find().toArray(function(err, result) {
        if (err) {
            throw ('Fallo en la conexión con la BD');
        } else {
            res.send(result);
        }
    });
};

// Crear un usuario
module.exports.users_create = function (req, res){
    const user = {};
    user.nombre = req.body.nombre;
    user.apellidos = req.body.apellidos;
    user.edad = req.body.edad;
    user.dni = req.body.dni;
    user.cumpleaños = req.body.cumpleaños;
    user.colorfavorito = req.body.colorfavorito;
    user.sexo = req.body.sexo;
    if(user.nombre == undefined || (!user.nombre.match("^[a-zA-Z ]{4,}$"))){
        throw("El nombre debe ser mayor de 3 caracteres y no contener números");
    }
    if(user.apellidos == undefined || (!user.apellidos.match("^[a-zA-Z ]{4,}$"))){
	throw("El apellido debe ser mayor de 3 caracteres y no contener números");
    }
    if(user.edad == undefined || (user.edad<=0 || user.edad > 125)){
        throw("La edad no es valida");
    }
    if(user.dni == undefined || (!user.dni.match("^[0-9]{8}[a-zA-Z]$"))){
        throw("El DNI no es valido. Debe contener 8 números seguidos de una letra");
    }
    if(user.cumpleaños == undefined || (!user.cumpleaños.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$"))){
        throw("La fecha no es valida. Debe ser en el formato AAAA/MM/DD");
    }
    if(user.colorfavorito == undefined || (!user.colorfavorito.match("^[a-zA-Z ]{4,}$"))){
        throw("El color favorito debe ser mayor de 3 caracteres y no contener números");
    }
    if(user.colorfavorito == undefined || (user.sexo!= "Hombre" && user.sexo!= "Mujer" && user.sexo!= "Otro" && user.sexo!= "No especificado")){
        throw("El sexo debe ser uno de los siguientes: Hombre, Mujer, Otro, No especificado");
    }
    db.get().db('apidb').collection('users').insertOne(user, function (err, result) {
        if (err) {
            throw ('Fallo en la conexión con la BD');
        } else {
            res.send(result);
        } 
    });
};

//Borrar usuario
module.exports.users_delete = function (req, res) {
	console.log(req.query);
    db.get().db('apidb').collection('users').findOneAndDelete(req.query, function(err, result) {
        if (err) {
            throw ('Fallo en la conexión con la BD');
        } else {
            res.send(result);
        }
    })
};

//Modificar un usuario
module.exports.users_update = function (req, res) { 
    if(req.body.nombre == undefined || (!req.body.nombre.match("^[a-zA-Z ]{4,}$"))){
        throw("El nombre debe ser mayor de 3 caracteres y no contener números");
    }
    if(req.body.apellidos == undefined || (!req.body.apellidos.match("^[a-zA-Z ]{4,}$"))){
	throw("El apellido debe ser mayor de 3 caracteres y no contener números");
    }
    if(req.body.edad == undefined || (req.body.edad<=0 || req.body.edad > 125)){
        throw("La edad no es valida");
    }
    if(req.body.dni == undefined || (!req.body.dni.match("^[0-9]{8}[a-zA-Z]$"))){
        throw("El DNI no es valido. Debe contener 8 números seguidos de una letra");
    }
    if(req.body.cumpleaños == undefined || (!req.body.cumpleaños.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$"))){
        throw("La fecha no es valida. Debe ser en el formato AAAA/MM/DD");
    }
    if(req.body.colorfavorito == undefined || (!req.body.colorfavorito.match("^[a-zA-Z ]{4,}$"))){
        throw("El color favorito debe ser mayor de 3 caracteres y no contener números");
    }
    if(req.body.colorfavorito == undefined || (req.body.sexo!= "Hombre" && req.body.sexo!= "Mujer" && req.body.sexo!= "Otro" && req.body.sexo!= "No especificado")){
        throw("El sexo debe ser uno de los siguientes: Hombre, Mujer, Otro, No especificado");
    }
    db.get().db('apidb').collection('users').findOneAndReplace(req.query, req.body, function(err, result) {
        if (err) {
            throw ('Fallo en la conexión con la BD');
        } else {
            res.send(result);
        }
    })
}
