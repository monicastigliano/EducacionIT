let tabla_flujo = document.getElementById('tabla_flujo');
let tabla_credito = document.getElementById('tabla_credito');
let flujo_caja = [
    {'periodo': 'Enero', 'Ingreso': 1500, 'Egreso': 1500},
    {'periodo': 'Febrero', 'Ingreso': 250, 'Egreso': 2500},
    {'periodo': 'Marzo', 'Ingreso': 84683, 'Egreso': 1155},
    {'periodo': 'Abril', 'Ingreso': 135353, 'Egreso': 1533},
    {'periodo': 'Mayo', 'Ingreso': 1535, 'Egreso': 5434},
    {'periodo': 'Junio', 'Ingreso': 4343354, 'Egreso': 5434543},
    {'periodo': 'Julio', 'Ingreso': 435453, 'Egreso': 4543},
    {'periodo': 'Agosto', 'Ingreso': 78351, 'Egreso': 7816},
    {'periodo': 'Septiembre', 'Ingreso': 1878, 'Egreso': 95634},
    {'periodo': 'Octubre', 'Ingreso': 48483, 'Egreso': 9433},
    {'periodo': 'Noviembre', 'Ingreso': 35483, 'Egreso': 53133},
    {'periodo': 'Diciembre', 'Ingreso': 3843, 'Egreso': 348133}
];
for (let i = 0; i < flujo_caja.length; i++) {
    if((flujo_caja[i].Ingreso > flujo_caja[i].Egreso)){
        tabla_flujo.innerHTML += '<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>PERDIDA</td></tr>'
    } else {
        tabla_flujo .innerHTML += ('<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>GANANCIA</td></tr>')
    }    
}
let oferta_credito = [
    {'nombre': 'Plan 001', 'capital': 150000, 'plazo': 30, 'tasa': 15},
    {'nombre': 'Plan 002', 'capital': 300000, 'plazo': 180, 'tasa': 10},
    {'nombre': 'Plan 003', 'capital': 485000, 'plazo': 60, 'tasa': 23}
]
let interes_generado;

for (let i = 0; i < oferta_credito.length; i++) {
    interes_generado = ((oferta_credito[i].capital * oferta_credito[i].plazo * oferta_credito[i].tasa) / 100);
    oferta_credito[i].interes = interes_generado;
    tabla_credito.innerHTML += '<tr><td>' + oferta_credito[i].nombre + '</td><td>' + oferta_credito[i].capital + '</td><td>' + oferta_credito[i].plazo + ' días</td><td>' + oferta_credito[i].tasa + '%</td><td>' + oferta_credito[i].interes + '</td></tr>';
}