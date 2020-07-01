const fs=require("fs");

const rutaArchivoHeroes="./data/heroes.json";
const leerRutaArchivoHeroes=fs.readFileSync(rutaArchivoHeroes,"utf-8");
const parseLeerRutaArchivoHeroes=JSON.parse(leerRutaArchivoHeroes);

let moduloHeroe=
{

    

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
    },
    heroesDetalleBio:function(req,res)
    {
        let idHeroe=req.params.id;
        let okHeroe=req.params.ok;
        let listaHeroes=parseLeerRutaArchivoHeroes;
        let bol=true

        listaHeroes.forEach(function(iterador)
        {
            if(idHeroe==iterador.id&&okHeroe=="ok")
            {
                res.write("\nNombre: "+iterador.nombre+"\n\nResenia: "+iterador.resenia);
                res.end();
            }
            else if(idHeroe==iterador.id)
            {
                res.send("Nombre: "+iterador.nombre+" Lamento que no desees saber mas de mi :(");
                res.end();
            }
        });

        res.end("No encontramos un herue para mostrar");

    },
    creditos:function(req,res)
    {
        res.send("Hasta la victoria siempre!");
        res.end();
    }

    
}
module.exports=moduloHeroe;