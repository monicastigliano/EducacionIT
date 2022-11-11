// Etapa 1

// Una planta de procesamiento de madera está
// investigando nuevas formas de obtención de
// energía, porque la demanda de sus productos
// excede a la capacidad energética de la fábrica.
// Como resultado de dicha investigación se
// obtuvieron tres alternativas para la producción
// de energía.
// La primera alternativa es la energía eólica. La
// planta está ubicada en un campo abierto, lo que
// genera las circunstancias ideales para un molino.
// La segunda alternativa es la energía hidroeléctrica. La planta está ubicada en un campo sin
// ríos fluyendo que puedan satisfacer esta
// necesidad. Sin embargo, a varios kilómetros se
// encuentra un posible río que podría servir.
// La tercera alternativa es la energía solar. La
// planta, al estar en un campo abierto, es ideal
// para el desarrollo de energía solar.
// A partir de estas alternativas generadas, se empezó a
// trabajar en posibles implementaciones de cada una de
// ellas. De ese trabajo se obtuvo la siguiente tabla, con la
// que trabajaremos en nuestro proyecto integrador, a partir
// del módulo 2.


// Consigna

// El proyecto parece avanzar. Sin embargo, se
// encuentran con una barrera que no pueden
// superar: ¿cómo procesar esta información y
// obtener estadísticas? El personal de la planta que
// podría realizarlas está muy ocupado con otras
// investigaciones y, el personal disponible, no
// cuenta con los conocimientos necesarios.
// La planta necesita un programa para procesar
// estos datos estadísticos, pero que sea extremadamente simple de usar y que no requiera
// ningún tipo de instalación.
// Consultando, deciden que el programa debe
// estar hecho en JavaScript; ya que permite procesar esta información y no requiere instalación
// alguna (sólo un navegador web, que cualquier
// computadora tiene). El programa debe
// permitirnos ingresar todas las posibles
// implementaciones ordenadas por tipo de
// energía, tal cual está en la tabla, y obtener así
// la efectividad de cada tipo de energía.
// 
// Efectividad =      Energía generada total
 //                   ______________________________
//                (presupuesto total x tiempo total)

class Energia {
    constructor(t_energia, descrip, energia_gener, presup, tiempo_estim) {
        this.t_energia = t_energia;
        this.descrip = descrip;
        this.energia_gener = energia_gener;
        this.presup = presup;
        this.tiempo_estim = tiempo_estim;
    }
}

// Etapa 2

// En esta segunda etapa del proyecto deberás
// trabajar con declaración e inicialización de
// variables, uso de estructuras condicionales y
// salida de datos por pantalla.
// El objetivo de esta etapa es el procesamiento
// completo de los datos, pero ingresando cada uno
// mediante ventanas emergentes con prompt() y
// mostrando el resultado con alert().
// Pasos a seguir:
// 1. Debes diseñar un programa que permita,
// mediante ventanas emergentes con
// prompt(), ingresar todas las filas de la
// tabla.
// 2. Una vez ingresadas, deberás procesar toda
// esa información para obtener la efectividad
// por tipo de energía.
// 3. Una vez obtenido ese dato deberás mostrar,
// mediante alert(), la efectividad de cada
// tipo de energía.

let array_energia = [];
let t_energia;
let descrip;
let energia_gener;
let presup; 
let tiempo_estim;
for (let i = 0; i < 6; i++) {
    t_energia = prompt('Ingrese Tipo de Energía');
    descrip = prompt('Ingrese su descripción');
    energia_gener = prompt('Ingrese Energía Generada en Km/h');
    presup = prompt('Ingrese Presupuesto en dolares');
    tiempo_estim = prompt('Ingrese Tiempo Estimado en meses');
    let energ = new Energia(t_energia, descrip, energia_gener, presup, tiempo_estim);
    array_energia[i] = energ;
}

// class Efectividad {
//     constructor(nombre, efect) {
//         this.nombre = nombre;
//         this.efect = efect;
//     }
// }

// let e_g_t;
// let p_t;
// let t_t;
// let array_efectividad = []
// for (let i = 0; i < array_energia.length; i++) {
//     e_g_t = parseFloat(array_energia[i].energia_gener);
//     p_t = parseFloat(array_energia[i].presup);
//     t_t = parseFloat(array_energia[i].tiempo_estim);
//     let ef = (e_g_t / (p_t * t_t));
//     let elemto_efect = new Efectividad(array_energia[i].t_energia, ef);
//     array_efectividad[i] = elemto_efect;
// }
// array_efectividad.forEach(element => {
//     alert('La Energía ' + element.nombre + ' tiene ' + element.efect + ' de Efectividad')
// });

// Etapa 3

// Para realizar esta etapa debes seguir estos
// pasos:
// 1. Vamos a convertir nuestro código en una
// función que tenga la siguiente definición:
// (array de datos) => objeto de estadísticas
// La función recibirá un array de objetos con
// todos los datos de la tabla, y deberá retornar
// un objeto con la eficiencia por tipo de
// energía.
// 2. Junto con las eficiencias, la función deberá
// retornar la energía recomendada (cuya
// eficiencia es mayor).

var eficiencia_energia = function(array_de_datos){
    class Efectividad {
        constructor(nombre, efect) {
            this.nombre = nombre;
            this.efect = efect;
        }
    }
    let e_g_t;
    let p_t;
    let t_t;
    let max = 0;
    let nombre = '';
    let array_efectividad = [];
    for (let i = 0; i < array_de_datos.length; i++) {
        e_g_t = parseFloat(array_de_datos[i].energia_gener);
        p_t = parseFloat(array_de_datos[i].presup);
        t_t = parseFloat(array_de_datos[i].tiempo_estim);
        let ef = (e_g_t / (p_t * t_t));
        let elemto_efect = new Efectividad(array_de_datos[i].t_energia, ef);
        array_efectividad[i] = elemto_efect;
    }
    array_efectividad.forEach(element => {
            if (element.efect > max){
                nombre = element.nombre;
                max = element.efect;
            }
    });
    // alert('La Energía recomendada es ' + nombre + ' tiene ' + element.efect + ' de Efectividad')
    let recomendada = new Efectividad(nombre, max)
    array_efectividad.push(recomendada);
    console.log(array_efectividad)
    return array_efectividad;
}
let efectividad_final= eficiencia_energia(array_energia)
alert('La Energía recomendada es ' + efectividad_final[efectividad_final.length-1].nombre + ' tiene ' + efectividad_final[efectividad_final.length-1].efect + ' de Efectividad');