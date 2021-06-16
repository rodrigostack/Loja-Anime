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
import Fairy from '../imagens/fairy tail.jpg'
import Katekyo from '../imagens/katekyo.jpg'
import Saylor from '../imagens/Sailor-moon.jpg'
import Hunter from '../imagens/hunter.jpg'
import Atack from '../imagens/atack.jpg'
import Inuyasha from '../imagens/Inuyasha.jpg'

export default function animes(){
    return(
        <div className="container">
            <div className="card-header headerdefault">
                <h2>Conheça nossos Animes</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Cavaleiros dos Zodiaco</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Bleach</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>DeathNote</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>DragonBall Z</h5>
                        </div>
                        <div className="card-body  cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>DragonBall GT</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>DragonBall</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Naruto Shippuden</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>One Piece</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>DragonBall Super</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Naruto Classico</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Yu Yu Hakusho</h5>
                        </div>
                        <div className="card-body cardybody">
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
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Samurai X</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Samurai} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Samurai X </p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Fairy Tail</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Fairy} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao atualizada ate o ultimo episodio</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Katekyo Hitman Reborn</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Katekyo} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Katekyo Hitman</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Sailor Moon</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Saylor} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Saylor moon </p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Attack on Titan</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Atack} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao atualizada ate o ultimo episodio</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Inuyasha</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Inuyasha} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Inuyasha</p> 
                        </div>

                    </div>
                    </a>
                </div>
                <div className="col-md-4">
                <a href="#">
                    <div className="card cardydefault">
                        <div className="card-header cardyheader">
                            <h5>Hunter x Hunter 2011</h5>
                        </div>
                        <div className="card-body cardybody">
                            <img src={Hunter} className="imganime"/>
                        </div>
                        <div className="card-footer">
                           <p>Coleçao completa de Hunter x Hunter 2011 </p> 
                        </div>

                    </div>
                    </a>
                </div>

            </div>
            
        </div>
    )
}