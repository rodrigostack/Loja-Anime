import React,{useState, useEffect} from 'react'
import './cadastro.css'
import InputMask from 'react-input-mask'
import Axios from 'axios'

export default function Cadastro(){
    const[nome,setNome] = useState();
    const[email,setEmail] = useState();
    const[tel,setTel] = useState();
    const[cpf,setCpf] = useState();
    const[cep,setCep] = useState("");
    const[estado,setEstado] = useState();
    const[cidade,setCidade] = useState();
    const[bairro,setBairro] = useState();
    const[endereco,setEndereco] = useState();

    useEffect(()=>{
        if (cep.length > 8) {
           Axios.get(`http://viacep.com.br/ws/${cep}/json/`)
           .then((resposta)=>{
               setEndereco(resposta.data.logradouro);
               setCidade(resposta.data.localidade);
               setBairro(resposta.data.bairro)
               setEstado(resposta.data.uf)
           }) 
        }
    },[cep])

    return(
      <div className="container cadastrodefault">
          <div className="row" id="titlehead">
                <h1 className="h2">Preencha com seus dados:</h1>
          </div>
        <form className="forminput"> 
         <div className="row"> 
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingname" placeholder="Digite seu nome" name="nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    <label for="floatingname">Nome Completo:</label>
                </div>
            </div> 
            <div className="col-md-6">    
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingemail" placeholder="Digite seu E-mail" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <label for="floatingemail">Email:</label>
                </div>
            </div>
         </div>
         <div className="row"> 
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <InputMask mask="(99)99999-9999" type="text" className="form-control" id="floatingtel" placeholder="Digite seu Telefone" name="tel" value={tel} onChange={e=>setTel(e.target.value)}/>
                    <label for="floatingtel">Telefone:</label>
                </div>
            </div> 
            <div className="col-md-6">    
                <div className="form-floating mb-3">
                    <InputMask mask="999.999.999-99" type="text" className="form-control" id="floatingcpf" placeholder="Digite seu CPF" name="cpf" value={cpf} onChange={e=>setCpf(e.target.value)}/>
                    <label for="floatingcpf">CPF:</label>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-2">    
                <div className="form-floating mb-3">
                    <InputMask mask="99999-999" type="text" className="form-control" id="floatingcep" placeholder="Digite seu CEP" name="cep" value={cep} onChange={e=>setCep(e.target.value)}/>
                    <label for="floatingcep">CEP</label>
                </div>
            </div>
            <div className="col-md-4">    
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingestado" placeholder="Digite seu estado" name="estado" value={estado} onChange={e=>setEstado(e.target.value)}/>
                    <label for="floatingestado">Estado:</label>
                </div>
            </div>
            <div className="col-md-6">    
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingcidade" placeholder="Digite seu cidade" name="cidade" value={cidade} onChange={e=>setCidade(e.target.value)}/>
                    <label for="floatingcidade">Cidade:</label>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingbairro" placeholder="Digite seu bairro" name="bairro" value={bairro} onChange={e=>setBairro(e.target.value)}/>
                    <label for="floatingbairro">Bairro:</label>
               </div> 
            </div> 
            <div className="col-md-6"> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingend" placeholder="Digite seu Endereço" name="endereco" value={endereco} onChange={e=>setEndereco(e.target.value)}/>
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