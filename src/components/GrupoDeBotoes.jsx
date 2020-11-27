import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'


export default props => {

    return (

        <div>

            <div className="container m-5">
                <div className="row">
                    <div className="col-12">
                        <ButtonGroup variant="outlined" color="secondary" size="small">
                            <Button>C</Button>
                            <Button>D</Button>
                            <Button>E</Button>
                            <Button>F</Button>
                            <Button>G</Button>
                            <Button>A</Button>
                            <Button>B</Button>
                        </ButtonGroup>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <ButtonGroup variant="contained" color="primary">
                            <Button>C</Button>
                            <Button>D</Button>
                            <Button>E</Button>
                            <Button>F</Button>
                            <Button>G</Button>
                            <Button>A</Button>
                            <Button>B</Button>
                        </ButtonGroup>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <ButtonGroup variant="contained" size="large" color="secondary">
                            <Button>C</Button>
                            <Button>D</Button>
                            <Button>E</Button>
                            <Button>F</Button>
                            <Button>G</Button>
                            <Button>A</Button>
                            <Button>B</Button>
                        </ButtonGroup>

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <ButtonGroup variant="contained" size="large" color="secondary" orientation="vertical">
                            <Button>C</Button>
                            <Button>D</Button>
                            <Button>E</Button>
                            <Button>F</Button>
                            <Button>G</Button>
                            <Button>A</Button>
                            <Button>B</Button>
                        </ButtonGroup>

                    </div>
                </div>
            </div>


        </div>
    )
}