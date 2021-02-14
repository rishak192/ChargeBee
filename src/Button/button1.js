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
}));

const Button1 = (props) => {

    const [Space, setSpace] = useState("2px")
    const [Shad,setShad]=useState(true)

    const classes = useStyles()

    return (
        <ListItem button
            onMouseEnter={() => {setSpace("4px");setShad(false)}}
            onMouseLeave={() => {setSpace("2px");setShad(true)}}
            className={classes.button} 
            style={{
                transition:"all 0.3s",
                backgroundColor: props.bgcolor,
                color: props.tcolor,
                borderRadius:props.bradius,
                borderColor:props.bcolor,
                border:props.border,
                borderRadius:props.bradius,
                height:"50px",
                width:props.width,
                boxShadow:Shad?(props.showshad?props.bshadow:"none"):props.hshad
            }}>
            <Typography style={{fontSize:props.fsize}}>
                {props.text}  
            </Typography>
            <ArrowForward htmlColor={props.tcolor}
                        fontSize="small" 
                        style={{marginLeft:Space,marginBottom:"4px",transition:"all 0.3s"}}/>
        </ListItem>
    );
}

export default Button1
