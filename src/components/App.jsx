import React, { useState } from "react";
import './App.css'
import axios from 'axios'
import Svg from "./Svg";

export default props => {


  return (


    <div>

      <h1 className="text-center text-primary">Título da Página</h1>

      <div className="container">
        <div className="row">
          <div className="col-2">

            <Svg />

          </div>
        </div>
      </div>



    </div>
  );
};
