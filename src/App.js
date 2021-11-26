import Header from "./componets/Header";
import { useState, Fragment } from "react";
import Productos from "./componets/Productos";

function App() {
// Acar pongo el JS que necesite.
// Es mas seguro y es una buena practica.
  const anio = new Date().getFullYear();

  const [productos,guardarProducto] = useState([
    {id : 1, articulo:"Leche",precio:"100",fechaDeEnvasado:anio},
    {id : 2, articulo:"Cacao",precio:"1000",fechaDeEnvasado:anio},
    {id : 3, articulo:"Galletitas",precio:"110",fechaDeEnvasado:anio},
    {id : 4, articulo:"Alfajor",precio:"50",fechaDeEnvasado:anio}
  ]);

  return (
    <Fragment>
      <Header />
      <h2>Productos de calidad</h2>
      {productos.map(producto => 
        (
         <Productos 
           producto = {producto}
         />
        )
          )}
    </Fragment>
  );
}

export default App;
