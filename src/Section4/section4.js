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
        display: "flex",
        flexDirection: "row",
        marginTop: "200px"
    },
    bottom: {
        display: "flex",
        flexDirection: "column"
    },
    list: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    listbox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    li: {
        listStyle: "none"
    }
}))

const Section4 = () => {

    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.cont2}>
            <Box width={1 / 2} display="flex" alignItems="flex-start" justifyContent="flex-start">
                <img alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/subscription-graphic.svg"></img>
            </Box>
            <Box ml={10} className={classes.cont1} width={1/2}>
                <Box width={1} display="flex" justifyContent="flex-start">
                    <Box width={3 / 4}>
                        <Typography align="left" variant="h8" style={{ color: "#500ad2", fontSize: "15px" }}>No more developer dependency </Typography>
                        <Typography align="left" variant="h6" style={{ fontWeight: "bold", marginTop: "10px" }}>Smarter Subscription Management </Typography>
                        <Box width={4 / 5} mt={2}>
                            <Typography style={{ fontSize: "17px" }}>
                                Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.
                        </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" width={1}>
                    <Box width={500} mt={5}>
                        <Box width={1} display="flex" justifyContent="flex-end">
                            <Grid container item xl={12}>
                                <Grid item xl={5}>
                                    <ListItem li>
                                        <ListItemIcon>
                                            <DoneIcon style={{ color: "green" }} fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Price modeling" />
                                    </ListItem>
                                    <ListItem li>
                                        <ListItemIcon>
                                            <DoneIcon style={{ color: "green" }} fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Trial management" />
                                    </ListItem>
                                </Grid>
                                <Grid item xl={5}>
                                    <ListItem li>
                                        <ListItemIcon>
                                            <DoneIcon style={{ color: "green" }} fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Product Catalog" />
                                    </ListItem>
                                    <ListItem li>
                                        <ListItemIcon>
                                            < DoneIcon style={{ color: "green" }} fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Lifecycle automation" />
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box mt={3} width={1/3}>
                        <LearnButton border="1px solid #000ff0" bradius="3px"/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Section4
