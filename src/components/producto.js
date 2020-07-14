import React from 'react';

const Producto = (props) => {
    const {id,nombre,precio}= props.producto

    return (  
        <div>
            <h2> {nombre} </h2>
            <p> {precio}</p>

        </div>
    
    );
}
 
export default Producto
