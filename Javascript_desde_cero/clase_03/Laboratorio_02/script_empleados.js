
var nombre = prompt('Cuál es su su nombre de usuario');
        enunciado.innerHTML = 'Hola ' + nombre + ', bienvenido/a a nuestra aplicación.';
let array_empleados = [
    {'nombre':'Juan', 'apellido': 'Pedro', 'edad': 40},
    {'nombre':'Ana', 'apellido': 'García', 'edad': 25},
    {'nombre':'María', 'apellido': 'Zarate', 'edad': 34}
];
let tabla = document.querySelector('table');
for (let i = 0; i < array_empleados.length; i++) {
    tabla.innerHTML += '<tr> <td>' + array_empleados[i].nombre + 
    '</td> <td>' + array_empleados[i].apellido +'</td> <td>' + array_empleados[i].edad +'</td></tr>'
    
}

