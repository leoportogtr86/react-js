import React, { useState } from 'react'

export default props => {

    const [num, setNum] = useState(0)


    function mais() {

        let x = num

        x += 1



        setNum(x)
        console.log(num)

    }


    function menos() {

        let x = num

        x -= 1

        setNum(x)


        console.log(num)

    }

    return (

        <div>
            <h1 className="text-center text-primary">Componente Contador</h1>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center text-info">{num}</h1>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col">
                        <button className="btn btn-danger btn-block" onClick={menos}>-</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-success btn-block" onClick={mais}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}