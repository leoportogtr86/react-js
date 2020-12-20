import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

export default props => {

    const [open, setOpen] = useState(true)


    function close() {

        setOpen(false)

    }



    return (

        <div>

            <Snackbar autoHideDuration={6000} open={open} onClose={close}>
                <Alert severity="success" onClose={close}>Alerta dentro de uma snack bar</Alert>
            </Snackbar>


        </div>
    )
}