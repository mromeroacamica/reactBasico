import React from 'react';

function Header (props){

    // console.log(props)

    return(
    <h1  className = 'encabezado'>{props.titulo}</h1>


    )
}

export default Header;