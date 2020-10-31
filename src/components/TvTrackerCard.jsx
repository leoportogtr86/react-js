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

    .container{

        width: 30%;
    }

`



export default props => {

    const [titulo, setTitulo] = useState('')
    const [subtitulo, setSubtitulo] = useState('')
    const [imgagem, setImagem] = useState('')

    let serie = 'breaking-bad'

    let url = 'http://api.tvmaze.com/search/shows?q=' + serie

    axios.get(url).then((res) => {

        console.log(res.data)
        setImagem(res.data[0].show.image.medium)

        setTitulo(res.data[0].show.name)

        let sub = res.data[0].show.summary.replace('<p>', '')
        sub = sub.replace('</p>', '')
        sub = sub.replace('</b>', '')
        sub = sub.replace('<b>', '')
        setSubtitulo(sub)
    })

    return (

        <div>

            <TvTrackerCard>

                <h1 className="text-center text-danger">Tracker Tv Series</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">

                                <div className="card-header">

                                    <img src={imgagem} alt="" className="card-img-top" />

                                    <h3 className="text-center text-danger mt-3">{titulo}</h3>
                                    <p className="card-subtitle">{subtitulo}</p>



                                </div>
                                <div className="card-body">




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TvTrackerCard>


        </div>
    )
}