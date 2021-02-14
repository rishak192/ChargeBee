import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { ArrowForward, ArrowRightSharp } from '@material-ui/icons'
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
        marginTop:"50px"
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

const Section3 = () => {

    const classes = useStyles()

    return (
        <Container maxWidth="md" className={classes.cont2}>
            <Box className={classes.cont1} width={100}>
                <Box width={1}>
                    <Typography align="left" variant="h8" style={{ color: "#500ad2", fontSize: "15px" }}>No more spreadsheet errors</Typography>
                    <Typography align="left" variant="h6" style={{ fontWeight: "bold",marginTop:"10px" }}>Automate Recurring Billing </Typography>
                    <Box width={4/5} mt={2}>
                        <Typography style={{ fontSize: "17px" }}>
                            Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="flex-start" width={1 / 2}>
                    <Box width={500} mt={5}>
                        <Grid container item xl={12}>
                            <Grid item xl={5}>
                                <ListItem li>
                                    <ListItemIcon>
                                        <DoneIcon style={{ color: "green" }} fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Billing Schedules" />
                                </ListItem>
                                <ListItem li>
                                    <ListItemIcon>
                                        <DoneIcon style={{ color: "green" }} fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Tax management" />
                                </ListItem>
                            </Grid>
                            <Grid item xl={5}>
                                <ListItem li>
                                    <ListItemIcon>
                                        <DoneIcon style={{ color: "green" }} fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Proration & Invoicing" />
                                </ListItem>
                                <ListItem li>
                                    <ListItemIcon>
                                        < DoneIcon style={{ color: "green" }} fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Payment Methods" />
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={3} width={75/100}>
                        <LearnButton border="1px solid #000ff0" bradius="3px"/>
                    </Box>
                </Box>
            </Box>
            <Box width={1 / 2}>
                <img alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/recurring-billing-graphic.svg"></img>
            </Box>
        </Container>
    )
}

export default Section3
