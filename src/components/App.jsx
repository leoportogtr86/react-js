import React from "react";
import Aleatorio from "./Aleatorio";



//poderiamos carregar a pagina e dar f5 para os numeros iremo mudando automaticamente
//ou fazer isso via hooks


setInterval(() => {

  window.location.reload()
  
}, 3000);


export default props => {

  
  
  return (
    <div>

    
        <Aleatorio
        
            max = {100}
            min = {50}

        />
       
        

    </div>
  );
};
