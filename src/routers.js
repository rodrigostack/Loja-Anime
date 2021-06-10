import React from 'react'

import { Switch, Route } from 'react-router-dom'


import Home from './home/home'
import Animes from './animes/animes'

export default function(){
    return(
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/animes" component={Animes}/>
    </Switch>
    )
}
    
