import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const CusGrid=(props)=>{
    return (
        <Grid item sm={12} style={{color:"#500ad2",fontSize:"15px"}}>
            {props.text}     
        </Grid>
    )
}

export default CusGrid
