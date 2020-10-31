import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const TvTrackerCard = styled.div`

    img{

        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

   

`



export default props => {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')



    let url = 'http://api.tvmaze.com/search/shows?q=' + props.serie

    axios.get(url).then((res) => {

        console.log(res.data)
        setImagem(res.data[0].show.image.medium)

        setTitulo(res.data[0].show.name)

        setDescricao(res.data[0].show.summary)
    })

    return (

        <div>

            <TvTrackerCard>


                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-header">

                                    <img src={imagem} alt="" className="card-img-top" />

                                    <h3 className="text-center text-danger mt-3">{titulo}</h3>

                                </div>
                                <div className="card-body">

                                    {/* retirando as tags com replace e regex */}

                                    {descricao.replace(/<p>|<\/p>|<b>|<\/b>/g, '')}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TvTrackerCard>


        </div>
    )
}