import React from 'react'



export default props => {

    const utterance = new SpeechSynthesisUtterance()
    utterance.lang = 'pt-br'
    utterance.text = props.texto

    function falar() {

        speechSynthesis.speak(utterance)

    }


    return (

        <div>

            <button className="btn btn-danger m-5" onClick={falar}>Falar</button>


        </div>
    )
}