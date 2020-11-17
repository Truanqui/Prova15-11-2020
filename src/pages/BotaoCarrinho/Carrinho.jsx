import React from 'react';
import './Carrinho.css';

function Carrinho(){
    function handleClick(Adicionar){
     Adicionar.preventDefault();
     window.alert('Está pagina ainda não está disponível');
     console.log("Está pagina ainda não está disponível");   
    }
    return(
        <button className="enviar" type="submit" onClick={handleClick}>
            <a className="linkEnviar" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <strong>Adicionar Carrinho</strong>                               
            </a>
        </button>
    );
} 
export default Carrinho;
