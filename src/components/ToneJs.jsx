import React from 'react'
import * as Tone from 'tone'
import './ToneJs.css'

export default props => {



    document.addEventListener('keydown', (e) => {

        console.log(e)

        if (e.key === 'c') {
            synth.triggerAttackRelease('C4', '8n')

        } else if (e.key === 'd') {
            synth.triggerAttackRelease('D4', '8n')

        } else if (e.key === 'e') {
            synth.triggerAttackRelease('E4', '8n')

        } else if (e.key === 'f') {
            synth.triggerAttackRelease('F4', '8n')

        } else if (e.key === 'g') {
            synth.triggerAttackRelease('G4', '8n')

        } else if (e.key === 'a') {
            synth.triggerAttackRelease('A4', '8n')

        } else if (e.key === 'b') {
            synth.triggerAttackRelease('B4', '8n')

        }
    })

    const synth = new Tone.Synth().toDestination()

    function playC() {

        synth.triggerAttackRelease('C4', '8n')

    }

    function playD() {

        synth.triggerAttackRelease('D4', '8n')

    }
    function playE() {

        synth.triggerAttackRelease('E4', '8n')

    }
    function playF() {

        synth.triggerAttackRelease('F4', '8n')

    }
    function playG() {

        synth.triggerAttackRelease('G4', '8n')

    }
    function playA() {

        synth.triggerAttackRelease('A4', '8n')

    }
    function playB() {

        synth.triggerAttackRelease('B4', '8n')

    }

    function playC2() {

        synth.triggerAttackRelease('C5', '8n')

    }
    return (

        <div>

            <div className="container m-5">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-lg c" onClick={playC}>C</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-lg d" onClick={playD}>D</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-lg e" onClick={playE}>E</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-lg f" onClick={playF}>F</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-lg g" onClick={playG}>G</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-lg a" onClick={playA}>A</button>
                    </div>

                    <div className="col">
                        <button className="btn btn-lg b" onClick={playB}>B</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-lg c" onClick={playC2}>C</button>
                    </div>
                </div>
            </div>



        </div>
    )
}