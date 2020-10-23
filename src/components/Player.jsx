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
            <button className="btn btn-danger m-5" onClick={play}>Play</button>
            <audio src={Audio} controls></audio>

        </div>
    )
}