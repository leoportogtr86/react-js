import React from 'react'
import styled from 'styled-components'
import LogoFacebook from './assets/img/logo-facebook.png'
import LogoGoogle from './assets/img/google.png'


const Login = styled.div`

    .container-fluid{

        border: 1px solid gray;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5px;
        display: block;
    }

    #botao-facebook{

        background-color:rgb(24, 119, 242);
        width: 100%;
        height:40px;
        color:white;
        border-radius: 3px;
        margin: auto;
        padding-top: 6px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    #botao-google{

        background-color:white;
        border: 1px solid gray;
        width: 100%;
        height:40px;
        color: #807a7a;
        font-weight: bold;
        border-radius: 3px;
        margin: auto;
        padding-top: 6px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

      #botao-cadastrar{

        background-color:#e71d1d;
        border: 1px solid gray;
        width: 100%;
        height:40px;
        color: #eeeeee;
        font-weight: bold;
        margin: auto;
        padding-top: 6px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    input {

        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 100%;
        height: 40px;
    } 

    img{

        width: 35px;
        margin-top:-5px
    }



`

export default props => {

    return (

        // https://www.datacontrolma.com.br/wp-content/uploads/2016/12/logo-facebook.png

        <div>

            <Login>

                <div className="container-fluid">
                    <h4 className="text-center text-secondary">Continue lendo de graça! :)</h4>
                    <p className="text-center text-secondary">Faça o cadastro com seu email ou com suas redes sociais.</p>



                    <button className="btn text-center mb-2" id="botao-facebook"> <img src={LogoFacebook} alt="" />Continuar como Leo</button>
                    <button className="btn text-center mb-2" id="botao-google"> <img src={LogoGoogle} alt="" />Continue com o Google</button>
                    <p className="text-center text-secondary">ou</p>
                    <input type="text" placeholder="E-mail" className="mb-2" />
                    <input type="text" placeholder="Digite a sua senha" />
                    <button className="btn  mt-2 mb-2" id="botao-cadastrar">Cadastrar</button>

                    <p className="text-secondary text-center">Ao criar uma conta, você concorda com os <strong>termos de uso</strong> de Leo Porto.</p>
                    <hr />

                    <p className="text-secondary text-center">Já tem uma conta? Clique para <a href="#">ENTRAR</a></p>
                </div>


            </Login>


        </div>
    )
}