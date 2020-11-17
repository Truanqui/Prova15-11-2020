import React, {useState} from 'react';
import '../Menu.css';
import logo from '../../Image/logo.png';
import {Link} from 'react-router-dom';

function MenuHeader(){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div id= "headerHbr">
            <div id="containerHbr">
                <div id= "container_menuHbr">
                    <div id="menuBar">
                        <input type="checkbox" id='checkHbr' />
                        <div className="bar" id="bar1"></div>
                        <div className="bar" id="bar2"></div>
                        <div className="bar" id="bar3"></div>
                        <label For="checkHbr" id="labelHbr" onClick={showSidebar}></label>
                    </div>
                    
                    <div id="logoHbr">  
                        <img src={logo} alt="Logo" width="287,496" height="86,2488" />
                    </div>
                </div>
                <div id="menuHbr">
                    <ul className={sidebar ? "cabecalhoHbr cabecalhoHbrOpen" : "cabecalhoHbr"}>
                        <Link to='/' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>Home</strong></a></li>
                        </Link>
                        <Link to='/produto' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>Produto</strong></a></li>
                        </Link>
                        <Link to='/suporte' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>Preços</strong></a></li> 
                        </Link>
                        <Link to='/faq' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>Suporte</strong></a></li> 
                        </Link>
                        <Link to='/login' className= "linkHeader">
                            <li><a href="" className= "linkHeaderHbr"><strong>Conta</strong></a></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MenuHeader;