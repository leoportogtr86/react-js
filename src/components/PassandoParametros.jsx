import React from "react";

export default props => {
  return (
    <div>


      {/* componente ira receber o texto do componente pai via props  */}
      <h1 className="text-center text-primary">{props.text}</h1>
    </div>
  );
};
