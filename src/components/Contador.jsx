import React, { useState } from 'react'

export default props => {

    const [num, setNum] = useState(0)
    const [passo, setPasso] = useState(1)



    function mais() {

        let x = num

        x += Number(passo)



        setNum(x)
        console.log(num)

    }


    function menos() {

        let x = num

        x -= Number(passo)

        setNum(x)


        console.log(num)

    }

    function changePasso(e) {

        setPasso(e.target.value)

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

                <div className="row">
                    <div className="col">
                        <input type="text" className="text-center w-100" placeholder="Passo" onChange={changePasso} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Nosso contador vai aumentar ou descer de {passo} em {passo}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}