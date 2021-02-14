import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save'
import { ArrowForward, KeyboardArrowRight } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const AllButton = (props) => {

    const [Arrow, setArrow] = useState(false)

    const classes = useStyles()

    return (
        <Button
            onMouseEnter={() => setArrow(true)}
            onMouseLeave={() => setArrow(false)}
            className={classes.button}
            endIcon={Arrow ? <ArrowForward /> : <KeyboardArrowRight />}
            style={{
                backgroundColor: props.bgcolor,
                color: props.tcolor,
                textTransform: "none",
                borderRadius: props.bradius,
                borderColor: props.bcolor,
                height: props.height,
                width: props.width,

            }}
            variant={props.variant}
            size={props.size}>

            <Typography
                className={classes.imageTitle}
                style={{
                    borderRadius: props.bradius,
                    fontWeight: props.bold,
                    fontSize: props.fsize,

                }}>
                {props.text}
            </Typography>
        </Button>
    );
}

export default AllButton
