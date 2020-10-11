import React from 'react'
import axios from 'axios'


export default props=>{

    axios.get('http://localhost:8080/categorias').then((res)=>{

        console.log (res.data)
    })

    return (

        <div>
        
        
        
        </div>
    )
}