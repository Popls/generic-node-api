var express = require('express');
var router = express.Router();
var controller = require('../controllers/usersController');

router.get("/", function (req, res){
    controller.users_list(req,res);
})

router.post("/", function (req, res){
    controller.users_create(req,res);
})

router.delete("/", function (req, res){
    controller.users_delete(req,res);
})

router.put("/", function (req, res){
    controller.users_update(req,res);
})

module.exports = router;
