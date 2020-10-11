import React from "react";

let p = {
  nome: "Davi Porto",
  altura: 1.5,
  idade: 5,
  peso: 25
};

export default props => {
  return (
    <div>
      <div className="container-fluid bg-danger">
        <div className="row">
          <div className="col">
            <h2>Nome: {p.nome}</h2>
          </div>

          <div className="col">
            <h2>Altura: {p.altura}</h2>
          </div>

          <div className="col">
            <h2>Idade: {p.idade}</h2>
          </div>

          <div className="col">
            <h2>Peso: {p.peso}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
