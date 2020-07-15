import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/producto';
import Carrito from './components/Carrito';





function App() {

    //listado de productos
    const [productos, guardarProductos] = useState([
        { id: 1, nombre: 'Camisa blanca', precio: 20 },
        { id: 2, nombre: 'Camisa roja', precio: 22 },
        { id: 3, nombre: 'Camisa verde', precio: 23 },
        { id: 4, nombre: 'Camisa negra', precio: 24 },
    ]);

    //state para un carrito de comprras

    const [carrito, agregarProducto] = useState([]);



    //obtener año completo

    const anio = new Date().getFullYear()

    return (
        < div className="App" >

            <Header
                titulo='Tienda Virtual'
            />

            <h1>Lista de Productos</h1>
            {productos.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    productos= {productos}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />

            ))}

            <Carrito
            carrito={carrito}
            agregarProducto={agregarProducto}
            />
            <Footer
                anio={anio}
            />

        </div>
    );
}

export default App;