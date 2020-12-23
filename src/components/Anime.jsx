import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../gtr.json'

export default props => {

    const [isStoped, setIsStoped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (

        <div>

            <Lottie

                options={defaultOptions}
                height={400}
                width={400}
                isStopped={isStoped}
                isPaused={isPaused}
            />




        </div>
    )
}