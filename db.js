var MongoClient= require('mongodb').MongoClient;

var db=null

//conectar la bd 
module.exports.connect= function(url, callback){
    if (db){
        return callback();
    }
    const client = new MongoClient(url, { useNewUrlParser: true});
    client.connect(function(err,result){
        if (err){
            return callback(err);
        }
        console.log("Conectado a BD");
        db=result;
        callback();
    })
}

// Cerrar la bd
module.exports.close= function(callback){
    if(db){
        db.close(function(err,result){
            console.log("Cerrando la BD");
            db=null;
            callback(err); 
        })
    }
}

// Recuperar la variable con la conexion
module.exports.get= function(){
    return db;
}
