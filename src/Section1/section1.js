import { Box, Container } from '@material-ui/core'
import Animated from './s1logo.svg'
import React from 'react'

const Section1 = () => {
    return (
        <Box mt={10}>
            <Container width="sm" align="center" style={{marginBottom:"200px"}}>
                <img height="70%" width="70%" src="https://raw.githubusercontent.com/rishak192/ChargeBee/01d11c8b454ce25fc7f93dea7f7b4ef36edd9182/src/Section1/s1logo.svg" />
                {/* <object type="image/svg+xml" data={Animated}>svg-animation</object> */}
                {/* <img src={Animated} alt=""/> */}
            </Container>
        </Box>
    )
}

export default Section1
