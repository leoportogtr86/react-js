import React from 'react'
import {
    ThemeProvider, createTheme, Arwes, Button, Line, Words, Loading, Link
} from 'arwes'

export default props => {

    return (

        <div>

            <ThemeProvider theme={createTheme()}>
                <Arwes>

                    <Loading animate />
                    <h1 className="text-center m-5">
                        <Words>Meu Tema <Link href="#">Sci-fi</Link></Words>
                    </h1>
                    <Line layer="alert"></Line>
                    <Button animate layer="alert">Clique aqui</Button>
                    <p>

                        <Words animate>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
                            cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
                            nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
                            cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
                            nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet
                            cupiditate laboriosam sunt libero aliquam, consequatur alias ducimus adipisci
                            nesciunt odit? Odio tenetur et itaque suscipit atque officiis debitis qui.
                        </Words>

                    </p>

                </Arwes>
            </ThemeProvider>

        </div>
    )
}
