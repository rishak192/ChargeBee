import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const CusGridHead = (props) => {
    return (
        <Grid item style={{ color: "black"}}>
            {props.text}
        </Grid>
    )
}

export default CusGridHead
