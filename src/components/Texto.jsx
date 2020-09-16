import React from "react";

export default props => {
  return (
    <div>
      <h1 className="text-danger m-5">{props.titulo}</h1>
      
      
      <div className="container-fluid">

          <div className="row">

              <div className="col-6 text-center justify-content-center">

                  {props.corpo}

              </div>
          </div>
      </div>
    </div>
  );
};
