import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'
import FormControllLabel from '@material-ui/core/FormControlLabel'



export default props => {

    const [checked, setChecked] = useState(true)

    function changeChecked(e) {

        setChecked(e.target.checked)
        console.log(checked)

    }

    return (

        <div>


            <FormControllLabel control={<Switch inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" checked={checked} onChange={changeChecked} />
            } label={props.label} />


        </div>
    )
}