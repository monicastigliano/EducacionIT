/**
 * Ejercicio 1:

PokeApi es una API para obtener información sobre Pokemons. Además de ser
divertida, es una API realmente compleja, con muchísimos recursos y relaciones. Es un
excelente recurso para ir practicando llamadas AJAX.
Siguiendo con nuestra idea de separar lo más posible las partes de nuestro proyecto,
vamos a crear un Adaptador.
Un Adaptador es una pieza de código encargada de comunicarse con algo externo (en
este caso, PokeApi). Puede ser un archivo con varias funciones, por ejemplo.

*En esta oportunidad, vamos a crear un archivo llamado PokeapiAdapter.js en donde vamos a
poner únicamente una función: getFromPokeApi, que reciba la url del recurso a obtener y
un callback, que será ejecutado con la respuesta cuando ésta esté disponible.

 */

function getFromPokeApi(url, callback){
    let xhr = new XMLHttpRequest
    xhr.open('get', 'https://pokeapi.co/api/v2/ability/' + url)
    xhr.addEventListener('load', ()=>{
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response)) 
            callback(JSON.parse(xhr.response))
        } else console.log(xhr.statusText);
    })
    xhr.send()
}


/**
 * Ejercicio 2:
 * 
Una vez lograda esa función base, podemos desarrollar diferentes accesos o interfaces. En
otras palabras, desarrollar funciones que faciliten usos específicos de esa función.
Desarrolla las funciones getAllPokemons y getOnePokemon para obtener un listado de
todos los pokemons, y el detalle de uno solo, respectivamente.

 */


function getAllPokemons(callback)
{
    getFromPokeApi(callback);
}

function getOnePokemon(id, callback)
{
    getFromPokeApi(`${id}/`, function(pokemon){
        callback({
            nombre: pokemon.name,
            peso: pokemon.weight,
            altura: pokemon.height,
            imc: pokemon.weight / pokemon.height
        });
    });
}

getOnePokemon(12, function(poke){
    console.log(poke);
});



