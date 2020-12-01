import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ZoomIn from '@material-ui/icons/ZoomIn'
import EditIcon from '@material-ui/icons/Edit'
import NavigateIcon from '@material-ui/icons/Navigation'



export default props => {

    return (

        <div>

            <div className="container m-5">
                <div className="row">
                    <div className="col-12">
                        <Fab color="secondary" aria-label="add">

                            Add

                            <AddIcon />
                        </Fab>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Fab color="primary">

                                ZoomIn

                                <ZoomIn />


                            </Fab>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Fab color="secondary">

                                <EditIcon />
                                Edit


                            </Fab>
                        </div>
                    </div>
                </div>
            </div>

            <Fab color="primary" variant="extended" style={{ width: 400 }}>

                <NavigateIcon />
                Navigate


            </Fab>


            <Fab size="small" color="primary" variant="extended" style={{ width: 200 }}>

                <NavigateIcon />
                Navigate


            </Fab>


            <Fab color="primary" variant="extended" style={{ width: 300 }} size="medium">

                <NavigateIcon />
                Navigate


            </Fab>


            <Fab color="primary" variant="extended" style={{ width: 500 }} size="large">

                <NavigateIcon />
                Navigate


            </Fab>

        </div>
    )
}