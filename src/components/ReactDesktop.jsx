import React from 'react'
import { Button, Text, Window, TitleBar, Box } from 'react-desktop/macOs'


export default props => {

    return (

        <div>

            <Window chrome height="800" width="100%">
                <TitleBar controls title="Minha Janela"></TitleBar>
                <Box>

                    <Text className="m-5">Leo Porto</Text>
                    <Button color="blue" className="m-5" size={20}>Click Here</Button>
                </Box>

                <Box>

                    <Text className="m-5">Leo Porto</Text>
                    <Button color="blue" className="m-5" size={20}>Click Here</Button>
                </Box>

                <Box>

                    <Text className="m-5">Leo Porto</Text>
                    <Button color="blue" className="m-5" size={20}>Click Here</Button>
                </Box>
            </Window>


        </div>
    )
}