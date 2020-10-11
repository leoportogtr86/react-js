import React from "react";

export default props => {

  let array = [0, 1, 2, 3, 4, 5]

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
