import './detailsPage.css';

function DetailsPage() {
  return (
    <div className="App">
        <h1>MioMio</h1>
        <button className='btn_redondo'>Carrito</button>
        <div className='divisor'></div>
        <button className='btn_volver btn_redondo'>Volver</button>   
        <div className='tarjeta tarjetaUno'></div>
        <div className='detalle_parrafo'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus eligendi minima reiciendis fugit inventore, ullam, repellat doloremque, assumenda voluptate libero accusantium itaque maiores cum?</p>
        </div>
        <div className="detalle">
            <div>Colores: Rojo, Negro, Blanco</div>
            <div>Talles: D - M - L</div>
            <h3>Precio: $1500</h3>
        </div>
        <button className='btn_loQuiero btn_redondo'>LO QUIERO</button>
    </div>
  );
}

export default DetailsPage;