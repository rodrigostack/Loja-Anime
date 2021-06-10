import React from 'react'
import './Navbar.css'
import Logo2 from '../imagens/logo.png'

export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbarback ">
                <div className="container-fluid">
                    <img src={Logo2} className="img-fluid navim"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Animes</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Tokusatsus</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Cadastre-se</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Quem Somos?</a>
                        </li>
  
                        <li className="nav-item  dropdown">
                        <a className="nav-link  active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Produtos Relacionados
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Camisetas</a></li>
                            <li><a className="dropdown-item" href="#">Acessorios</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}