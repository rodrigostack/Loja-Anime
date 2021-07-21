import React from 'react'

import { Switch, Route } from 'react-router-dom'


import Home from './home/home'
import Animes from './animes/animes'
import Tokusatsus from './tokusatsus/tokusatsus'
import Cadastro from './cadastro/cadastro'
import Quemsomos from './quemsomos/Quemsomos'
import Produtodetalhe from './produtodetalhe/produtodetalhe'

export default function(){
    return(
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/animes" component={Animes}/>
        <Route exact path="/tokusatsus" component={Tokusatsus}/>
        <Route exact path="/cadastro" component={Cadastro}/>
        <Route exact path="/quemsomos" component={Quemsomos}/>
        <Route exact path="/produtodetalhe" component={Produtodetalhe}/>

    </Switch>
    )
}
    
