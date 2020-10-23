import React, { useState } from 'react'
import ReactHowler from 'react-howler'
import Audio from './assets/audio/gtr.wav'

export default props => {

    const [playing, setPlaying] = useState(false)

    function play() {

        setPlaying(true)

    }


    return (

        <div>

            <ReactHowler src={Audio} playing={playing}></ReactHowler>
            <button className="btn btn-danger" onClick={play}>Play</button>

        </div>
    )
}