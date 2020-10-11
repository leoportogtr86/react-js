import React from 'react'
import Nintendo from './assets/img/nintendo.jpg'
import  './HeaderNintendo.css'
import Davi from './assets/img/davi.jpeg'


export default props=>{


    return (

        <div>

            <div className="container-fluid bg-danger">
                <div className="row m-5">

                    <div className="col">
                        <img src={Nintendo} className = "img-fluid" alt=""/>
                    </div>

                </div>
               
            </div>

            <h1 className = "text-center text-danger animate__animated animate__pulse animate__infinite">Davi Porto</h1>
            <h2 className = "text-center text-primary">O melhor jogador de Mario do Mundo</h2>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center animate__animated animate__rotateIn animate__infinite">
                        <img src={Davi} className = "davi" alt=""/>
                    </div>
                </div>
            </div>


        </div>
    )
}