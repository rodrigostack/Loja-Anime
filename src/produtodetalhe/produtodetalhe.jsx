import React from 'react'
import './produtodetalhe.css'
import construcao from '../imagens/construcao.png'

export default function Produtodetalhe(){
    return(
        <div className="container condefault">
            <div className="row">
                <div className="col-md-7 divimg">
                    <img src={construcao} className="img-fluid"/>
                </div> 
                <div className="col-md-5 divtitle">
                    <h3>Naruto Shippuden</h3>
                    <br/>
                    <h4>Valor Produto</h4>
                    <h6>R$ 35,00</h6>
                    <button className="btn btn-secondary">Comprar</button>
                </div>               
            </div> 
            <div className="row">
                <div className="col">
                    <h3>Sinopse</h3>
                    <p>jfjkdsakfkalsdjfsakkkkkkkkkkjdksalfgjdfjknsadckfvnasdlkjfkdjaskfjaskdjfkd</p>

                </div>
            </div>   
        </div>
    )
}