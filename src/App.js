import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
    //obtener año completo

    const anio = new Date().getFullYear()

    return ( 
    < div className = "App" >
        
        <Header 
            titulo= 'Tienda Virtual'
               />
        <Footer
        anio = {anio}
        />

        </div>
    );
}

export default App;