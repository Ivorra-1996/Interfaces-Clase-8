import React from "react";

//Componente Producto.
//Le paso una lista mapeada de los productos por parametro.
//A la lista mapeada le pido solo el articulo.
// Luego el componente lo muestra.
const Producto = ({producto}) =>{
    return(
        <div>
            <h2>{producto.articulo} - {producto.fechaDeEnvasado}</h2>
        </div>
    );
}
export default Producto;
