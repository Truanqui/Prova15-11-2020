import React from 'react';
import './Footer.css';
import discord from '../Image/discord.png';
import facebook from '../Image/facebook.jpg';
import twitter from '../Image/twitter.png';

function Footer(){
    return(
        <div className="rodape">
            <p>Email: johannteixeira2@gmail.com</p>
            <p>telefones: +55 (45)991015331 e (45)35222223</p>
            <img src={facebook} alt="facebook" width="80px"/>
            <p>Johann Teixeira Maciel</p>
            <img src={discord} alt="discord" width="80px"/>
            <p>Truanqui#6263</p>
            <img src={twitter} alt="twitter" width="80px"/>
            <p>truanqui001</p>
        </div>
    );
}
export default Footer;