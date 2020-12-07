import React, { useState } from 'react'
import Pulse from 'react-reveal/Pulse'
import Logo from '../components/assets/img/heart'
export default props => {

    const [ligado, setLigado] = useState(false)

    function animar() {

        setLigado(true)



    }

    return (

        <div>

            <Pulse when={ligado} forever>
                <img src={Logo} alt="" />
            </Pulse>



            <button className="btn btn-lg btn-block btn-danger" onClick={animar}>Animar</button>

            <img src="https://www.google.com/search?q=coracao+svg&tbm=isch&source=iu&ictx=1&fir=OKTeJMQ8nkq99M%252CjuWuLiYH4gLlzM%252C_&vet=1&usg=AI4_-kQK-h8CppyoeWz7XtSwGnww4UyVzQ&sa=X&ved=2ahUKEwi2htaS3LbtAhXmGLkGHcdQBT0Q9QF6BAgIEAE#imgrc=OKTeJMQ8nkq99M" alt="" />




        </div>
    )
}