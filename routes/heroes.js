const express=require("express");
const routeHeroe=express.Router();
const moduloHeroe=require("../controller/controllerHeroe.js");

routeHeroe.get("/",moduloHeroe.homePage);
routeHeroe.get("/heroes",moduloHeroe.heroe);
routeHeroe.get("/heroes/detalle/:id",moduloHeroe.heroeDetalle);



module.exports=routeHeroe;