import React from "react";

export default props => {

  let array = ['Leo', 'Davi', 'Liz', 'Chris']

  const elementos = array.map((e) => {

    return <h1>{e}</h1>

  })
  return (
    <div>

      <h1 className="text-center text-primary">Título da Página</h1>

      <ul>{elementos}</ul>




    </div>
  );
};
