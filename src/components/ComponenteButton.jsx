import React from 'react'
import { Button } from '@material-ui/core'

export default props => {

    function clique(event) {

        console.log('clicou')
        console.log(event)
        alert('Você clicou no botão')

    }

    return (

        <div>

            <Button size="large" className="m-5" variant="contained" color="primary" onClick={clique}>Botão Criado com Material UI</Button>

            <Button size="small" variant="outlined" color="secondary" href="https://material-ui.com/pt/components/buttons/">Link</Button>

            <Button variant="contained" color="secondary" disableElevation >Elevação Desabilitada</Button>

            <Button color="primary">Um simples botão</Button>
        </div>
    )
}