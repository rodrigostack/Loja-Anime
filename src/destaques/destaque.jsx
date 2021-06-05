import React from 'react'
import './destaque.css'
import Naruto from '../imagens/naruto.jpg'
import Dragonball from '../imagens/dragonballsuper.jpg'
import Onepiece from '../imagens/onepiece.png'
import Jaspion from '../imagens/jaspion.jpg'
import Flashman from '../imagens/flashman.jpg'
import Jiban from '../imagens/jiban.jpg'

export default function destaque(){
    return(
        <div className="container destaque">
            <div className="row">
                <div className="col">
                    <div className="card-header cardfooter">
                        <h2 className="h2">Destaques da na ANIME HUNTER</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card divtop">
                            <div className="card-header cardheader">
                                <h3>Naruto</h3>
                            </div>
                            <div className="card-body ">
                                <img src={Naruto} className="img-fluid imgdiv"/>
                            </div>
                            <div className="card-footer cardfooter">
                                <h4>R$ 35,00 reais</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card divtop">
                            <div className="card-header cardheader">
                                <h3>Dragonball Super</h3>
                            </div>
                            <div className="card-body ">
                                <img src={Dragonball} className="img-fluid imgdiv"/>
                            </div>
                            <div className="card-footer cardfooter">
                                <h4>R$ 35,00 reais</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card divtop">
                            <div className="card-header cardheader">
                                <h3>One Piece</h3>
                            </div>
                            <div className="card-body ">
                                <img src={Onepiece} className="img-fluid imgdiv"/>
                            </div>
                            <div className="card-footer cardfooter">
                                <h4>R$ 35,00 reais</h4>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card divtop">
                            <div className="card-header cardheader">
                                <h3>Jaspion</h3>
                            </div>
                            <div className="card-body ">
                                <img src={Jaspion} className="img-fluid imgdiv"/>
                            </div>
                            <div className="card-footer cardfooter">
                                <h4>R$ 35,00 reais</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card divtop">
                            <div className="card-header cardheader">
                                <h3>Flashman</h3>
                            </div>
                            <div className="card-body ">
                                <img src={Flashman} className="img-fluid imgdiv"/>
                            </div>
                            <div className="card-footer cardfooter">
                                <h4>R$ 35,00 reais</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card divtop">
                            <div className="card-header cardheader">
                                <h3>Jiban</h3>
                            </div>
                            <div className="card-body ">
                                <img src={Jiban} className="img-fluid imgdiv"/>
                            </div>
                            <div className="card-footer cardfooter">
                                <h4>R$ 35,00 reais</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}