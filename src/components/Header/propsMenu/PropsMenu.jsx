import React from 'react';
import '../Menu.css';

function PropsMenu(props){
    return(
        <li>
            <a href="" className= "linkHeader">
                <span></span>
                <strong>{props.texto}</strong>
            </a>
        </li>
    );
}
export default PropsMenu;