import React, { useState } from "react";
import './App.css'
import Penta from "./Penta";




export default props => {

  return (


    <div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Penta

              nota1="5"
              nota2="8"
              nota3="5"
              nota4="7"
              nota5="5"
              nota6="7"
              nota7="5"
              nota8="7"
              nota9="5"
              nota10="8"
              nota11="5"
              nota12="8"
              shape="1"

            />
          </div>

          <div className="col">
            <Penta

              nota1="5"
              nota2="8"
              nota3="5"
              nota4="7"
              nota5="5"
              nota6="7"
              nota7="5"
              nota8="7"
              nota9="5"
              nota10="8"
              nota11="5"
              nota12="8"
              shape="1"

            />
          </div>
        </div>
      </div>

    </div>
  );
};
