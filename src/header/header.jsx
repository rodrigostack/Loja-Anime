import React from "react"
import './header.css'
import Logo from '../imagens/logo.png'
import Persona from '../imagens/naruto.png'

export default function header(){
    return(
        <div className="container-fluid containerdefault">
            <div className="row ">
                <div className="col-md-4 col-sm-2 divcolunm">
                    <img src={Logo} className="imgheader"/>
                </div>
                <div className="col-md-5 divbetween">
                    <h1 className="h1">Loja de Fã para Fã.</h1><br/>
                    <p className="text-start">Temos todos so artigos de animes e series Tokusatsus</p><br/>
                    <p className="text-center">Seja bem vindo(a) a ANIME HUNTER </p>
                </div>
                <div className="col-md-3 divright">
                    <img src={Persona} className="imgnaruto"/>
                </div>

            </div>
                
        </div>
    )
}