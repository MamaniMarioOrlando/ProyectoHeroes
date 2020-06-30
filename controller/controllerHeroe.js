const fs=require("fs");
const rutaArchivoHeroes="./data/heroes.json";
const leerRutaArchivoHeroes=fs.readFileSync(rutaArchivoHeroes,"utf-8");
const parseLeerRutaArchivoHeroes=JSON.parse(leerRutaArchivoHeroes);

const moduloHeroe=
{

    retornaListaHeroe:function()
    {
        return parseLeerRutaArchivoHeroes;
    },

    homePage:function(req,res)
    {
        res.send("\n\nNi Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. \nEsperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.\nRecuerda: ¡nunca pares de creer enti!");
        res.end();
    },

    heroe:function(req,res)
    {
        res.send(parseLeerRutaArchivoHeroes);
        res.end();
    },

    heroeDetalle:function(req,res)
    {
        let id=req.params.id
        parseLeerRutaArchivoHeroes.forEach(function(iterador)
        {
            if(id==iterador.id)
            {
                res.send("\nHola mi nombre es "+iterador.nombre+" y soy "+iterador.profesion);
            }
        });
        res.end("No se encontro el heroe con el id "+id);
        
    }
    
}
module.exports=moduloHeroe;