import React from 'react'
import './carousel.css'
import dragon from '../imagens/dragonball.jpg'
import jaspion from '../imagens/jaspion.jpg'
import shipuden from  '../imagens/shippuden.jpg'

export default function carousel(){
    return(
    <div className="continercarousel">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                <img src={dragon} height="250"  className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={jaspion} height="250"   className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={shipuden} height="250" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     </div> 
    )
}