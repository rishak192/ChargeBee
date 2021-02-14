import { Box, Button, Container, Grid, ListItem, ListItemText, ListItemIcon, makeStyles, Typography, } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons';
import DoneIcon from '@material-ui/icons/Done';
import React from 'react'
import AllButton from '../Button/button';
import LearnButton from '../Button/learnmore';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cont1: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    cont2: {
        flex: 1,
        marginTop: "200px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    bottom: {
        display: "flex",
        flexDirection: "column"
    },
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2px 0"
    },
    listbox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    li: {
        listStyle: "none"
    },
    grid: {
        marginTop:"200px",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column-reverse"
        }
    }
}))

const Section4 = () => {

    const classes = useStyles()

    return (
            <Grid container xs={12} spacing={4} alignItems="center" className={classes.grid} justify="center" direction="row">
                <Grid item xs={5} >
                    <img height="100%" width="100%" alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/subscription-graphic.svg"></img>
                </Grid>
                <Grid container item xs={5} spacing={1} style={{minWidth:"450px"}}>
                    <Grid item xs={12} direction="row" alignItems="flex-end">
                        <Typography align="left" variant="h8" style={{ color: "#500ad2", fontSize: "15px" }}>No more developer dependency</Typography>
                        <Typography align="left" variant="h6" style={{ fontWeight: "bold", marginTop: "20px" }}>Smarter Subscription Management </Typography>
                        <Typography style={{ marginTop: "10px", fontSize: "17px" }}>
                            Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.
                            </Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={1} style={{marginTop:"40px"}}>
                        <Grid item xs={6}>
                            <Box className={classes.list}>
                                <DoneIcon style={{ color: "green" }} fontSize="small" />
                                <ListItemText primary="Price modeling" />
                            </Box>
                            <Box className={classes.list}>
                                <DoneIcon style={{ color: "green" }} fontSize="small" />
                                <ListItemText primary="Trial management" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className={classes.list}>
                                <DoneIcon style={{ color: "green" }} fontSize="small" />
                                <ListItemText primary="Product Catalog" />
                            </Box>
                            <Box className={classes.list}>
                                < DoneIcon style={{ color: "green" }} fontSize="small" />
                                <ListItemText primary="Lifecycle automation" />
                            </Box>
                        </Grid>
                    </Grid>
                    <LearnButton border="1px solid #000ff0" bradius="3px" />
                </Grid>
            </Grid>
    )
}

export default Section4
