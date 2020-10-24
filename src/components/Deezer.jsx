import React, { useState } from 'react'

export default props => {

    const [id, setId] = useState('6519365')

    function changeId(e) {

        setId(e.target.value)

    }

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div>
                        <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=EF5466&layout=dark&size=medium&type=album&id=${id}&app_id=1`} width="300" height="300"></iframe>
                    </div>
                </div>
            </div>

            <div className="row">
                <input type="text" placeholder="Id do álbum" value={id} onChange={changeId} />
            </div>

        </div>
    )
}