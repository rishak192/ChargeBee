import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    chip: {
        transition:"all 0.5s",
        "&:hover": {
            marginLeft:"10px"
        }
        // "&:active": {
        //     backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
        //         emphasize(
        //             hoverBackgroundColor ? hoverBackgroundColor : backgroundColor,
        //             0.12
        //         )
        // }
    }
}))

const CusGrid = (props) => {

    const classes = useStyle()

    return (
        <Grid className={classes.chip} item sm={12} style={{ cursor: "pointer", color: "#500ad2", fontSize: "15px" }}>
            {props.text}
        </Grid>
    )
}

export default CusGrid
