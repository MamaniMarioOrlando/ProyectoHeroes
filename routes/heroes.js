const express=require("express");
const routesHeroe=express.Router();
const moduloHeroe=require("../controller/controllerHeroe.js");

routesHeroe.get("/",moduloHeroe.homePage);



module.exports=routesHeroe;