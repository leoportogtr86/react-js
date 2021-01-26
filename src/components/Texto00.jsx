import React from 'react'
import styled from 'styled-components'


const Text = styled.p`

    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    color: ${props => {

        return props.theme.colors.success
    }};

    font-weight: bold;

`

export default props => {



    return (


        <div>

            <Text>{props.title}</Text>

        </div>
    )
}