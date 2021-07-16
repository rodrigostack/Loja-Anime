import React from 'react'

export default function cadastro(){
    return(
      <div className="container">
        <form>
         <div className="row"> 
            <div className="col-md-6"> 
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingname" placeholder="Digite seu nome"/>
                <label for="floatingname">Nome Completo:</label>
            </div>
            </div> 
            <div className="col-md-6">    
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingemail" placeholder="Digite seu E-mail"/>
                    <label for="floatingemail">Email:</label>
                </div>
            </div>
         </div>
         </form>   
      </div>
    )
}