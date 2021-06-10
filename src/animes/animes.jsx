import React from 'react'
import './animes.css'
import Cdz from '../imagens/cdz.jpg'
import Bleach from '../imagens/bleack.jpg'
import Death from '../imagens/deathnote.jpg'
import Dragon from '../imagens/Dragon_Ball_Z.png'
import Dragongt from '../imagens/dragonball-gt.jpeg'
import Dragonball from '../imagens/dragonball.jpg'
import Shippuden from '../imagens/shippuden.jpg'
import Onepiece from '../imagens/onepiece.png'
import Dragonsuper from '../imagens/dragonballsuper.jpg'
import Yuyu from '../imagens/Yu_Yu_Hakusho.jpg'
import Naruto from '../imagens/naruto.jpg'
import Samurai from '../imagens/Samurai_X.jpg'

export default function animes(){
    return(
        <div className="container">
            <div className="card-header headerdefault">
                <h2>Conheça nossos Animes</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>Cavaleiros dos Zodiaco</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Cdz} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Cavaleiros dos Zodiacos</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>Bleach</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Bleach} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Bleach sao mais 300 episodios</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>DeathNote</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Death} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de DeathNote</p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>DragonBall Z</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Dragon} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de DragonBall Z</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>DragonBall GT</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Dragongt} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de DragonBall GT</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>DragonBall</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Dragonball} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de DragonBall </p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>Naruto Shippuden</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Shippuden} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Naruto Shippuden</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>One Piece</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Onepiece} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao atualizada ate o ultimo episodio lançado</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>DragonBall Super</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Dragonsuper} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de DragonBall Super </p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>Naruto Classico</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Naruto} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Naruto Classico</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>Yu Yu Hakusho</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Yuyu} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Yu Yu Hakusho</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card carddefault">
                        <div className="card-header cardheader">
                            <h5>Samurai X</h5>
                        </div>
                        <div className="card-body cardbody">
                            <img src={Samurai} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Samurai X </p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            
        </div>
    )
}