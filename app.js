const express=require("express");
const app=express();
//requerimos las rutas
const routeHeroe=require("./routes/heroes.js");
const routeModuloMain=require("./routes/main.js");

app.use("/",routeHeroe);


//levantamos el servidor
app.listen(3030,()=>console.log("El servidor esta funcionando"));
