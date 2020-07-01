const express=require("express");
const routeHeroe=express.Router();
const moduloHeroe=require("../controller/controllerHeroe.js");

routeHeroe.get("/",moduloHeroe.homePage);
routeHeroe.get("/heroes",moduloHeroe.heroe);
routeHeroe.get("/heroes/detalle/:id",moduloHeroe.heroeDetalle);
routeHeroe.get("/heroes/bio/:id/:ok?",moduloHeroe.heroesDetalleBio);
routeHeroe.get("/creditos",moduloHeroe.creditos);


module.exports=routeHeroe;