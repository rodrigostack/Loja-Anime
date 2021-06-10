import React from 'react'
import Carousel from '../carousel/carousel'
import Destaque from '../destaques/destaque'
import Footer from '../footer/footer'

export default function home(){
    return(
        <div>
            <Carousel/>
            <Destaque/>
            <Footer/>

        </div>
    )
}