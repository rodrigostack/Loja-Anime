import React from 'react'
import './Navbar.css'
import Logo2 from '../imagens/logo.png'
import { Link } from 'react-router-dom'

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
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/animes">Animes</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/tokusatsus">Tokusatsus</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/cadastro">Cadastre-se</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/quemsomos">Quem Somos?</Link>
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