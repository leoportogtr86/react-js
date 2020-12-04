import React from 'react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import Rotate from 'react-reveal/Rotate'
import Zoom from 'react-reveal/Zoom'
import RubberBand from 'react-reveal/RubberBand'

export default props => {



    return (

        <div>

            <Fade>
                <h1 className="m-5">Guitarra Blues</h1>
            </Fade>

            <Flip>
                <h1 className="text-danger m-5">Guitarra Jazz</h1>
            </Flip>

            <Rotate>
                <h1 className="text-primary m-5">Guitarra Fusion</h1>
            </Rotate>

            <Zoom>
                <h1 className="text-success m-5">Guitarra Erudita</h1>
            </Zoom>

            <RubberBand>
                <h1 className="text-warning m-5">Joe Satriani</h1>
            </RubberBand>



        </div>
    )
}