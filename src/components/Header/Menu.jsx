import React from 'react';
import './Menu.css';
import PropsMenu from './propsMenu/PropsMenu';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div id="menu">
            <ul class="lista">
                <Link to='/' className="linkHeader">
                    <PropsMenu texto="Home" />
                </Link>
                <Link to='/produto'className= "linkHeader">
                    <PropsMenu texto="Produto" />
                </Link>
                <Link to='/suporte'className= "linkHeader">
                    <PropsMenu texto="Suporte" />
                </Link>
                <Link to='/conta'className= "linkHeader">
                    <PropsMenu texto="Conta" />
                </Link>
            </ul>
        </div>
    );
}
export default Menu; 