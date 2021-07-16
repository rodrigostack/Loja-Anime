import React from 'react'
import './cadastro.css'
import InputMask from 'react-input-mask'
import Axios from 'axios'

export default function cadastro(){
    return(
      <div className="container cadastrodefault">
          <div className="row" id="titlehead">
                <h1 className="h2">Preencha com seus dados:</h1>
          </div>
        <form className="forminput"> 
         <div className="row"> 
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingname" placeholder="Digite seu nome"/>
                    <label for="floatingname">Nome Completo:</label>
                </div>
            </div> 
            <div className="col-md-6">    
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingemail" placeholder="Digite seu E-mail"/>
                    <label for="floatingemail">Email:</label>
                </div>
            </div>
         </div>
         <div className="row"> 
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <InputMask mask="(99)99999-9999" type="text" className="form-control" id="floatingtel" placeholder="Digite seu Telefone"/>
                    <label for="floatingtel">Telefone:</label>
                </div>
            </div> 
            <div className="col-md-6">    
                <div className="form-floating mb-3">
                    <InputMask mask="999.999.999-99" type="text" className="form-control" id="floatingcpf" placeholder="Digite seu CPF"/>
                    <label for="floatingcpf">CPF:</label>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-2">    
                <div className="form-floating mb-3">
                    <InputMask mask="99999-999" type="text" className="form-control" id="floatingcep" placeholder="Digite seu CEP"/>
                    <label for="floatingcep">CEP</label>
                </div>
            </div>
            <div className="col-md-4">    
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingestado" placeholder="Digite seu estado"/>
                    <label for="floatingestado">Estado:</label>
                </div>
            </div>
            <div className="col-md-6">    
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingcidade" placeholder="Digite seu cidade"/>
                    <label for="floatingcidade">Cidade:</label>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingbairro" placeholder="Digite seu bairro"/>
                    <label for="floatingbairro">Bairro:</label>
               </div> 
            </div> 
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingend" placeholder="Digite seu Endereço"/>
                    <label for="floatingend">Endereço:</label>
               </div> 
            </div>     
         </div>
         
         <div className="col-md-2 buttonform">
            <button type="submit" className="btn btn-secondary">Cadastrar</button>
         </div>
         
        </form>   
    </div>
    )
}