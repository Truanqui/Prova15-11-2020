import React from 'react';
import './styles/Produto.css';
import gta5 from '../components/Image/gta5.jpg';
import homemaranha from '../components/Image/homemaranha.jpg';
import godofwar from '../components/Image/godofwar.jpg';
import injustice2 from '../components/Image/injustice2.jpg';
import Caixa from './Caixa/Caixa';


function Produto(){
    return(
        <section id="produtoimagens">
            <div className="container2">
                <div className="imagens">
                    <div className="imagens-p">
                        <div className="imagem-p1">
                            <img src={homemaranha}width="100px" />
                        </div>
                        <div className="imagem-p2">
                            <img src={godofwar}width="100px" />
                        </div>
                        <div className="imagem-p3">
                            <img src={injustice2}width="100px" />
                        </div>
                    </div>
                    <div className="imagem-g">
                        <img src={gta5} width="250px" />
                    </div>
                </div>
                <div className="texto"> 
                    <h2>Pacote 2D(2</h2>
                    <div className="preco">
                        <h1>R$ 9,99</h1>
                    </div> 
                    <div>
                        <h3>CEP</h3>
                        <Caixa funcao="text" name="cep" size="2" maxlength="5" /> - <Caixa funcao="text" name="cep2" size="" maxlength="3" />
                        <button type="submit">
                            <a href="">adicionar carrinho</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Produto;