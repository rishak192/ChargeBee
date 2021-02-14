import { Box, Container } from '@material-ui/core'
import Animated from './s1logo.svg'
import React from 'react'

const Section1 = () => {
    return (
        <Box mt={10}>
            <Container width="sm" align="center" style={{marginBottom:"200px"}}>
                <img height="70%" width="70%" src="https://raw.githubusercontent.com/rishak192/ChargeBee/f5bb8d22efb15c084f7aaba54f1a8af95b6a2d32/public/s1logo.svg" />
                {/* <object type="image/svg+xml" data={Animated}>svg-animation</object> */}
                {/* <img src={Animated} alt=""/> */}
            </Container>
        </Box>
    )
}

export default Section1
