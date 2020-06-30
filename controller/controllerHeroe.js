const fs=require("fs");
const rutaArchivoHeroes="./data/heroes.json";
const leerRutaArchivoHeroes=fs.readFileSync(rutaArchivoHeroes,"utf-8");
const parseLeerRutaArchivoHeroes=JSON.parse(leerRutaArchivoHeroes);

const moduloHeroe=
{

    homePage:function(req,res)
    {
        res.send("\n\nNi Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. \nEsperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.\nRecuerda: ¡nunca pares de creer enti!");
        res.end();
    }
}
module.exports=moduloHeroe;