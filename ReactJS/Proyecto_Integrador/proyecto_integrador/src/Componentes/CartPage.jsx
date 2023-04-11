import React from "react";
import "./cartPage.css";

function CartPage() {
    return (
      <div className="App">
          <h1>MioMio</h1>
          <h3>Tu Compra</h3>
          <div className='divisor'></div>
        <div className="tarjetaCompra">
            <h4>Lorem Ipsum</h4>
            <span>Talle S | Color: Negro</span>
            <div className="total">
                <div className="precio">$1500</div>
                <div className="cantidad">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>
        </div>
        <div className="tarjetaCompra">
            <h4>Lorem Ipsum</h4>
            <span>Talle S | Color: Negro</span>
            <div className="total">
                <div className="precio">$500</div>
                <div className="cantidad">
                    <span>-</span>
                    <span>2</span>
                    <span>+</span>
                </div>
            </div>
        </div>
        <button className="btn_cuadrado">SEGUIR COMPRANDO</button>
        <button className="btn_cuadrado btn_pagar">PAGAR $2500</button>
      </div>
    );
  }
  
  export default CartPage;