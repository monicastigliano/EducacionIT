import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tarjeta from './componentes/Tarjeta-Personal/Tarjeta';
import User from './componentes/Consumo_de_Recursos/User';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Tarjeta nombre="Mónica Stigliano" profesion="Desarrollo  de software"/> */}
    <h1>Hola</h1>
    <User id= "1"/>
  </React.StrictMode>

);


