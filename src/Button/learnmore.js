import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save'
import { ArrowForward, KeyboardArrowRight } from '@material-ui/icons';
import { Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    arrowanim:{
        transition:"all 5s"
    }
}));

const LearnButton = (props) => {

    const [Space, setSpace] = useState("6px")

    const classes = useStyles()

    return (
        <ListItem button
            onMouseEnter={() => setSpace("2px")}
            onMouseLeave={() => setSpace("6px")}
            className={classes.button} 
            style={{
                backgroundColor: props.bgcolor,
                color: "#000ff0",
                borderRadius:props.bradius,
                borderColor:props.bcolor,
                border:props.border,
                borderRadius:props.bradius,
                height:"40px",
                width:"130px",
            }}>
            <Typography style={{fontSize:"13px"}}>
                Learn More    
            </Typography>
            <ArrowForward htmlColor="#000ff0" 
                        fontSize="small" 
                        style={{marginLeft:Space,transition:"all 0.3s"}}/>
        </ListItem>
    );
}

export default LearnButton
