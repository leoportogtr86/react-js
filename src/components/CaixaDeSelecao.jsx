import React, { useState } from 'react'
import { Checkbox } from '@material-ui/core'

export default props => {

    const [checked, setChecked] = useState(false)

    function changeCheckbox(e) {

        setChecked(e.target.checked)
        console.log(checked)

    }

    return (

        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Checkbox />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Checkbox checked={checked} onChange={changeCheckbox} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                    </div>
                </div>
            </div>

        </div>
    )
}