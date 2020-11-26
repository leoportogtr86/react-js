import { Slider } from '@material-ui/core'
import React, { useState } from 'react'


export default props => {

    const [volume, setVolume] = useState(0)

    function changeVolume(event, value) {

        setVolume(value)
        console.log(volume)

    }


    return (

        <div>

            <h1 className="text-center text-danger m-5">{volume}</h1>

            <div className="container m-5">
                <div className="row">

                    <div className="col-6">
                        <Slider onChange={changeVolume} value={volume} marks={true} step={10} />
                    </div>
                </div>
            </div>

        </div>
    )
}