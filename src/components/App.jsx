import React from "react";

export default props => {

  let array = ['Leo', 'Davi', 'Liz', 'Chris', 'Juca', 'Jurandir', 'Maria']

  const elementos = array.map((e) => {

    return (

      <div>

        <div className="container-fluid m-3">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-title"><h1 className="text-center text-primary">{e}</h1></div>
                <div className="card-body">
                  <p>Corpo do Card.</p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    )

  })
  return (
    <div>

      <h1 className="text-center text-primary">Título da Página</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            {elementos}
          </div>
        </div>
      </div>




    </div>
  );
};
