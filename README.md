# User API

This repository is a simple API with a GET, POST, PUT and DELETE, to manage users.


## Configure and run

You should have been installed `npm` to install and run the API. Also, you need to have installed `mongod` in your terminal or replace `mongodb://localhost:27017` with your own mongo url in `controllers/usersController.js

1. Run `npm install` in the root of this project to install the dependencies.
2. If you are going to use a local MongoDb run `mongod --dbpath data/db`, if not skip this step.
3. Run `npm start` in the root of this project to run the API.


## Test the endpoints

**POST**
```
curl -X POST -H "Content-Type: application/json" -d '{"nombre":"Juan", "apellidos":"Perez", "edad":35, "dni":"12345678A", "cumpleaños":"1986/02/20", "colorfavorito":"Azul", "sexo":"Hombre"}' http://localhost:3000/
```

**GET**
```
curl -X GET http://localhost:3000/
```

**PUT**
```
curl -X PUT -H "Content-Type: application/json" -d '{"nombre":"Juan", "apellidos":"Perez", "edad":40, "dni":"12345678A", "cumpleaños":"1986/02/20", "colorfavorito":"Rojo", "sexo":"Hombre"}' http://localhost:3000/
```

**DELETE**
```
curl -X DELETE http://localhost:3000/?dni=12345678A
```
