import React from 'react'
import './footer.css'

export default function footer(){
    return(
        <div className="container-fluid containerfooter">
            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
              
                <div className="me-5 d-none d-lg-block">
                <span className="paragrafo h4 heading">Conheça nossos produtos e encontre-nos nas redes sociais:</span>
                </div>
          


                <div>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </a>
                </div>

            </section>
           
            <section className="">
                <div className="container text-center text-md-start mt-5">
           
                <div className="row mt-3">
            
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4 heading">
                        <i className="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p className="paragrafo">
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                    </div>
                   
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
                    <h6 className="text-uppercase fw-bold mb-4 heading">
                        Products
                    </h6>
                    <p className="paragrafo">
                        <a href="#!" className="text-reset">Angular</a>
                    </p>
                    <p className="paragrafo">
                        <a href="#!" className="text-reset">React</a>
                    </p>
                    <p className="paragrafo">
                        <a href="#!" className="text-reset">Vue</a>
                    </p>
                    <p className="paragrafo">
                        <a href="#!" className="text-reset">Laravel</a>
                    </p>
                    </div>
                   
                    
 
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
               
                    <h6 className="text-uppercase fw-bold mb-4 heading">
                        Nossos contatos
                    </h6>
                    <p className="paragrafo"><i className="fas fa-home me-3"></i> AV: Vereador Narciso Yague Guimaraes nº 624, Mogi das cruzes - SP</p>
                    <p className="paragrafo">
                        <i className="fas fa-envelope me-3"></i>
                        animehunter@gmail.com
                    </p>
                    <p className="paragrafo"><i className="fas fa-phone me-3"></i>(11) 4799-2286</p>
                    <p className="paragrafo"><i className="fas fa-print me-3"></i>(11) 98551-5274</p>
                    </div>
        
                </div>
      
                </div>
            </section>
                        
        </div>
    )
}