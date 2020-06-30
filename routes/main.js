const express=require("express");
const routerMain=express.Router();
const controllerMain=require("../controller/controllerMain.js")

routerMain.get("/main",controllerMain.index);



module.exports=routerMain;