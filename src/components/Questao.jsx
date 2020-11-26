import React from 'react'
import styled from 'styled-components'

const Questao = styled.div`

    img{

        width: 100%;
        border-radius: 9px;
    }

    .card{

        width: 30%;
    }

    #q1{

        background-color: red;
        
    }

     #q2{

        background-color: #1543db;
        
    }

     #q3{

        background-color: #ffe600;
        
    }

     #q4{

        background-color: #8c929e;
        
    }

    h6{

        border-radius: 5px;
        width: 200px;
        margin-left:0px;
    }

    



`


export default props => {

    return (

        <Questao>

            <div className="container">
                <div className="row">
                    <div className="col-12">


                        <div className="card">

                            <div className="card-header">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eric_%22slowhand%22_Clapton.jpg/250px-Eric_%22slowhand%22_Clapton.jpg" alt="" className="card-img-top" />
                                <h3 className="text-center text-danger">Em que ano nasceu o guitarrista Eric Clapton?</h3>

                            </div>

                            <div className="card-body m-5">

                                <div className="container">
                                    <div className="row">
                                        <div className="col">

                                            <h6 id="q1">1) 1940</h6>

                                        </div>
                                        <div className="col">

                                            <h6 id="q2">2) 1945</h6>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">

                                            <h6 id="q3">3) 1947</h6>

                                        </div>
                                        <div className="col">

                                            <h6 id="q4">4) 1950</h6>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Questao>
    )
}