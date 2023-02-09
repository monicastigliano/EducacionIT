const getArticulos = () => ([
    {
        "nombre": "Unbranded Cotton Shoes",
        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "precio": "15.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "4"
    },
    {
        "nombre": "Modern Frozen Chair",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "300.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "5"
    },
    {
        "nombre": "Oriental Rubber Car",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "80.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "6"
    },
    {
        "nombre": "Awesome Plastic Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "144.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "7"
    },
    {
        "nombre": "Recycled Metal Ball",
        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "precio": "800.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "8"
    },
    {
        "nombre": "Handcrafted Concrete Towels",
        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "precio": "605.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "9"
    },
    {
        "nombre": "Handmade Bronze Salad",
        "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "precio": "566.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "11"
    },
    {
        "nombre": "Bespoke Bronze Keyboard",
        "descripcion": "The Football Is Good For Training And Recreational Purposes",
        "precio": "587.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "12"
    },
    {
        "nombre": "Awesome Cotton Gloves",
        "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "precio": "391.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "13"
    },
    {
        "nombre": "Handmade Concrete Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "306.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "14"
    }
])


function render_seleccion (datos){
    let plantilla_seleccion = Handlebars.compile(`
              {{#each datos}}
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={{urlImagen}} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 text-center">
                    <div class="card-body ">
                        <h5 class="card-title pb-5 fw-bold">{{nombre}}</h5>
                        <h5 class="card-title fw-bold">$ {{precio}}</h5>
                    </div>
                    </div>
                </div> 
            {{/each}}`)
      
    document.getElementById('art').innerHTML = plantilla_seleccion(datos)
}
function  filtrar_busquesa(val){
    let los_articulos = getArticulos()
    let resultado = los_articulos.filter(el => el.nombre.includes(val))
    render_seleccion({datos: resultado})
}
function filtrar_seleccion(val){
    let los_articulos = getArticulos()
    switch (val) {
        case 'nombre': 
            los_articulos.sort((a, b)=>{
                if(a.nombre < b.nombre){
                    return -1
                }
                if(a.nombre > b.nombre){
                    return 1
                }
                return 0
            })
            render_seleccion({datos: los_articulos})
        break;
    
        case 'precio':
            los_articulos.sort((a, b)=>{
                if(parseInt(a.precio) < parseInt(b.precio)){
                    return -1
                }
                if(parseInt(a.precio) > parseInt(b.precio)){
                    return 1
                }
                return 0
            })
            render_seleccion({datos: los_articulos})
        break;
    
        case 'id': 
            los_articulos.map(el=>parseInt(el.id)).sort((a, b)=>{
                if(parseInt(a.id) < parseInt(b.id)){
                    return -1
                }
                if(parseInt(a.id) > parseInt(b.id)){
                    return 1
                }
                return 0  
            })
            render_seleccion({datos: los_articulos})
        break;
    
        default:
            break;
    }
}

function homePage(){
        let array_selecccion = ['nombre', 'precio', 'id']
        let query = location.search 
        console.log(query);
        if( query != ''){
            let params = new URLSearchParams(query)
            if(params.get('q')){
                //cadena de búsqueda
                let q = params.get('q')
                console.log(q);
                filtrar_busquesa(q)
            } else 
                if(params.get('s')){
                    //cadena de selección
                    let s = params.get('s')
                    console.log('s ' + s);
                    if(array_selecccion.includes(s)){
                        filtrar_seleccion(s)
                    } else console.log('No existe esa selección');
                }
        }
}
renderPage('plantilla_pricipal.hbs', {datos: getArticulos}, ()=>{ 
    document.getElementById('formulario').addEventListener('submit', (e)=>{
        e.preventDefault()
        console.log(e.target[0].value);
        history.pushState({}, '', `/?q=${e.target[0].value}&s=${e.target[1].value}`);
        homePage()
    })
})




