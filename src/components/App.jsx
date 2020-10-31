import React, { useState } from "react";
import TvTrackerCard from "./TvTrackerCard";



export default props => {


  return (


    <div>

      <div className="container">
        <div className="row">
          <div className="col">
            <TvTrackerCard serie="dinotrux" />
          </div>

          <div className="col">
            <TvTrackerCard serie="homeland" />
          </div>

          <div className="col">
            <TvTrackerCard serie="dexter" />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <TvTrackerCard serie="la casa de papel" />
          </div>

          <div className="col">
            <TvTrackerCard serie="vis a vis" />
          </div>

          <div className="col">
            <TvTrackerCard serie="breaking bad" />
          </div>

        </div>



      </div>



    </div>
  );
};
