import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    footer: {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#500ad2",
        fontSize: 15,
        height:55,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    border:{
        position: "fixed",
        bottom: 0,
        height:55
    },
    chat:{
        borderWidth:1,
        borderStyle:"solid",
        BorderColor:"blue",
        backgroundImage:"url('https://s3.amazonaws.com/drift-public-prod/111481/0e7f2d0056838fa37f43a2a7c51b1e47mak9x376tv49')",
        position:'absolute',
        right:50,
        bottom:40,
        backgroundColor:"black",
        width:65,
        height:65,
        borderRadius:10
    }
}))

const Footer = () => {

    const classes = useStyles()

    return (
        <Box width="1" className={classes.border}>
            <Typography variant="h6" className={classes.footer} align="center">
                Adapting to a membership-first revenue model for publications — An in-depth chat with Zetland's CEO, Tav Klitgaard. Save your free spot →
            </Typography>
            <Box className={classes.chat}>
            </Box>
        </Box>
    )
}

export default Footer
