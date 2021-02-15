import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { ArrowForward, TranslateRounded } from '@material-ui/icons'
import React from 'react'
import AllButton from '../Button/button'
import Button1 from '../Button/button1'
import LearnButton from '../Button/learnmore'
import SwipeableTextMobileStepper from './swipe'
import LabTabs from './swipe'

const useStyles = makeStyles(theme => ({
    ds: {
        marginTop: 150,
        backgroundColor: "#8a2be2",
        height: 100,
        transform: "rotateZ(-4deg)",
        marginLeft: -10,
        zIndex: -1,
        position: "absolute",
    },
    ds1: {
        marginTop: 160,
        backgroundImage: "linear-gradient(180deg,#381c82 0,#1a0c4b 100%)",
        height: 2500,
        transform: "rotateZ(-3deg)",
    },
    maincont: {
        height: 2500,
    },
    contbox: {
        position: "absolute",
        transform: "rotateZ(3deg)",
        backgroundImage: "linear-gradient(180deg,#381c82 0,#1a0c4b 100%)",
        backgroundRepeat: "no-repeat",
        // backgroundColor:"red",
        top: 50,
        left: -5,
        height: 2500
    },
    headcol: {
        color: "#ff7846",
        fontSize: 14,
    },
    textco: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    concol: {
        color: "white",
        fontSize: 18,
    },
    botrot: {
        backgroundColor: "#8a2be2",
        height: 100,
        width: "110%",
        transform: "rotateZ(3deg)",
        marginLeft: -10,
        zIndex: -2,
    },
    tbotro: {
        backgroundColor: "#1a0c4b",
        height: 100,
        width: "110%",
        transform: "rotateZ(2deg)",
        marginLeft: -10,
        position: "absolute",
        zIndex: -1
    },
    contgrid: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column"
        }
    },
    contgridc: {
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    }
}))

const Section6 = () => {

    const classes = useStyles()

    return (
        <Box className={classes.maincont}>
            <Box style={{ height: "8px" }}>
                <Box width="110%" className={classes.ds} />
            </Box>
            <Box width="110%" className={classes.ds1}>
                <Box width="100%" className={classes.contbox} width={1}>
                    <Box width={1 / 2} mt={15} ml={30}>
                        <Typography align="left" variant="h3" style={{ color: "white" }}>
                            Works With Your<br />
                            Revenue Management Stack
                        </Typography>
                        <Box mt={3}>
                            <Typography style={{ color: "white" }}>
                                Managing sales, payments, customer experience or your books:<br />
                            if it affects your revenue cycle, Chargebee works with it.
                            </Typography>
                        </Box>
                    </Box>
                    <Box width={1} ml={-10} display="flex" justifyContent="center">
                        <Box width={2 / 3}>
                            <img alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/revenue-management.svg" />
                        </Box>
                    </Box>

                    <Container width="lg" style={{ margin: "auto" }}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Grid container xs={12} spacing={10} className={classes.contgrid} >
                                <Grid item xs={5} className={classes.contgridc}>
                                    <Box width={1}>
                                        <Typography className={classes.headcol}>
                                            Quote-to-Cash Automation
                                    </Typography>
                                        <Box mt={2}>
                                            <Typography className={classes.textco}>
                                                Powers Sales and Marketing CRM
                                    </Typography>
                                        </Box>
                                        <Box mt={2} mb={2} width={1} display="flex" justifyContent="flex-start">
                                            <img height="50px" width="80%" alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/crm-logos.png" />
                                        </Box>
                                        <Box mb={4} width={1}>
                                            <Typography className={classes.concol}>
                                                Handle quotes, approvals, acceptance, and<br />
                                            collections seamlessly from within the CRM.
                                    </Typography>
                                        </Box>
                                        <LearnButton bgcolor="white" bradius="3px" />
                                    </Box>
                                </Grid>
                                <Grid item xs={5} className={classes.contgridc}>
                                    <Box width={1}>
                                        <Typography className={classes.headcol}>
                                            Offer More Payment Methods
                                    </Typography>
                                        <Box mt={2}>
                                            <Typography className={classes.textco}>
                                                25+ Payment Gateways
                                    </Typography>
                                        </Box>
                                        <Box mt={2} width={1 / 4} display="flex" justifyContent="center" borderRadius={5} style={{ backgroundColor: "#1f0d52" }}>
                                            <Typography style={{ color: "#bea7ff", fontSize: "10px" }}>
                                                Preferred Partners
                                    </Typography>
                                        </Box>
                                        <Box mt={2} width={5/6} style={{ borderBottom: "1px solid #1b094a" }}></Box>
                                        <Box mt={2} mb={2} width={1} display="flex" justifyContent="flex-start">
                                            <img height="82px" width="80%" alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/pg-logos.png" />
                                        </Box>
                                        <Box mb={4} width={1}>
                                            <Typography className={classes.concol}>
                                                Accept payments across a wide array of<br />
                                        gateways, geographies, and currencies.
                                    </Typography>
                                        </Box>
                                        <LearnButton bgcolor="white" bradius="3px" />
                                    </Box>
                                </Grid>
                                <Grid item xs={5} className={classes.contgridc}>
                                    <Box width={1}>
                                        <Typography className={classes.headcol}>
                                            Streamline Finance Operations
                                    </Typography>
                                        <Box mt={2}>
                                            <Typography className={classes.textco}>
                                                Syncs with Accounting<br /> Software
                                        </Typography>
                                        </Box>
                                        <Box mt={2} mb={2} width={1} display="flex" justifyContent="flex-start">
                                            <img height="70px" width="80%" alt="Give marketing automation a boost" class="img-responsive fancy" src="https://webstatic.chargebee.com/assets/web/352/images/home/lemon/acc-logos.png" />
                                        </Box>
                                        <Box mb={4} width={1}>
                                            <Typography className={classes.concol}>
                                                Reconcile books in seconds, handle<br /> compliance, and recognize revenue<br /> painlessly.
                                        </Typography>
                                        </Box>
                                        <LearnButton bgcolor="white" bradius="3px" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>

                    <Box align="center">
                        <Box width={1 / 3} mt={20} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                            <Box>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Talk to us today about<br />
                                    your revenue workflow
                                </Typography>
                            </Box>
                            <Box>
                                <Button1 showshad={true}
                                    hshad="0px 5px 20px 1px gray"
                                    bshadow="0 2px 10px 0 rgba(0,4,48,.08),0 8px 8px 0 rgba(0,4,48,.12),0 12px 21px 0 rgba(0,4,48,.24)"
                                    text="Schedule a Demo"
                                    tcolor="white"
                                    bradius="3px"
                                    bgcolor="#500ad2"
                                    size="large"
                                    variant="contained"
                                    fsize="20px"
                                    width="230px" />
                            </Box>
                        </Box>
                    </Box>
                    <Box ml={15} mt={8} margin="auto" width={3 / 4} style={{ border: "1px solid rgba(255,255,255,.12)" }}></Box>
                    <Box ml={-15} mt={30}>
                        <Typography align="center" variant="h4" style={{ fontSize: "40px", fontWeight: "bold", color: "white" }}>
                            Great Products Deserve Hyper Growth.<br />
                            Chargebee Makes it Easy.
                        </Typography>
                    </Box>
                    {/* <LabTabs/> */}
                </Box>
            </Box>
            <Box mt={1} className={classes.tbotro} height="10px"></Box>
            <Box mt={4} className={classes.botrot} height="10px"></Box>
            <SwipeableTextMobileStepper/>
        </Box>
    )
}

export default Section6
