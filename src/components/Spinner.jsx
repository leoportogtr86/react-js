import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress'

export default props => {


    return (


        <div>

            <CircularProgress

                className="m-5"
                color="secondary"

            />

            <CircularProgress

                variant="determinate"
                color="primary"
                value={50}
                className="m-5"
            />

            <LinearProgress

                color="secondary"
                className="m-5"

            />

            <LinearProgress

                color="primary"
                variant="determinate"
                value={75}
                className="m-5"

            />

            <LinearProgress

                color="secondary"
                className="m-5"
                variant="buffer"
                valueBuffer={75}
                value={50}
            />




        </div >
    );
};
