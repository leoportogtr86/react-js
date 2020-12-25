import React, { useState } from 'react'
import Lottie from 'react-lottie'
import erro from './erro.json'


export default props => {

    const [isStoped, setIsStoped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)



    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: erro,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (

        <div>

            <Lottie
                options={defaultOptions}
                isPaused={isPaused}
                isStoped={isStoped}
                width={400}
                height={400}
            />


        </div>
    )
}