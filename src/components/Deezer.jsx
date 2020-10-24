import React, { useState } from 'react'
import axios from 'axios'

export default props => {



    const [id, setId] = useState('150451572')
    const [titulo, setTitulo] = useState('')

    axios.get('http://localhost:3001/album/' + id).then((res) => {

        console.log(res.data)
        setTitulo(res.data.title)

    })

    function changeId(e) {

        setId(e.target.value)

    }

    return (

        <div className="container">

            <h1 className="text-center text-danger">{titulo}</h1>
            <div className="row">
                <div className="col">
                    <div>
                        <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=500&color=EF5466&layout=dark&size=medium&type=album&id=${id}&app_id=1`} width="700" height="350"></iframe>
                    </div>
                </div>
            </div>

            <div className="row">
                <input type="text" placeholder="Id do álbum" onChange={changeId} />
            </div>

        </div>
    )
}