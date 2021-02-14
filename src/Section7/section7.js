import { Box, Button, Container, Grid, ListItem, ListItemIcon, ListItemText, makeStyles, SvgIcon, Typography } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import FB from './fb.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react'
import AllButton from '../Button/button';

const useStyles = makeStyles(theme => ({
    mc: {
        marginTop: 500,
        marginBottom: 100
    },
    griditem: {
        color: "#000ff0",
        fontSize: "15px"
    },
    gridhead: {
        color: "#00000a",
        fontSize: "17px",
        fontWeight: "lighter"
    }
}))

const Section7 = () => {

    const classes = useStyles()

    return (
        <Container maxWidth="xl" className={classes.mc} >
            <Grid container sm={12} justify="center">
                <Grid container item sm={7}>
                    <Container>
                        <Typography variant="h4" style={{ fontWeight: "bolder" }}>
                            Still unsure? Step Inside and See<br />
                        What The Future Looks Like.
                    </Typography>
                    </Container>
                </Grid>
                <Grid container item sm={3} alignItems="center">
                    <Container>
                        <AllButton text="Schedule a Demo"
                            tcolor="white"
                            bgcolor="#500ad2"
                            size="large"
                            variant="contained"
                            fsize="20px" />
                    </Container>
                </Grid>
            </Grid>
            <Box width={1} mt={10} style={{ border: "1px solid #e0e3e6" }} />
            <Box mt={10} margin="auto" width={4 / 5} >
                <Grid container sm={12}>
                    <Grid container sm={3}>
                        <Grid container item spacing={2}>
                            <Grid container item>
                                <Typography className={classes.gridhead}>Product</Typography>
                                <KeyboardArrowRight />
                            </Grid>
                            <Grid className={classes.griditem} container item spacing={1}>
                                <Grid container item>
                                    Price Modeling
                                </Grid>
                                <Grid container item>
                                    Recurring Billing and Invoicing
                                </Grid>
                                <Grid container item>
                                    Recurring Payments
                                </Grid>
                                <Grid container item>
                                    Accounting and Taxes
                                </Grid>
                                <Grid container item>
                                    SaaS Reporting
                                </Grid>
                                <Grid container item>
                                    Enterprise Billing
                                </Grid>
                                <Grid container item>
                                    Integrations
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm={3}>
                        <Grid container item spacing={3}>
                            <Grid container item direction="row">
                                <Typography className={classes.gridhead}>Help & Support</Typography>
                                <KeyboardArrowRight />
                            </Grid>
                            <Grid className={classes.griditem} container item spacing={1}>
                                <Grid container item>
                                    Security
                            </Grid>
                                <Grid container item>
                                    FAQs
                            </Grid>
                                <Grid container item>
                                    Status
                            </Grid>
                                <Grid container item>
                                    Product Documentation
                            </Grid>
                                <Grid container item>
                                    API Documentation
                            </Grid>
                                <Grid container item>
                                    Supported Payment Gateways
                            </Grid>
                                <Grid container item>
                                    Sitemap
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm={3}>
                        <Grid container item spacing={3}>
                            <Grid container item direction="row">
                                <Typography className={classes.gridhead}>Resources</Typography>
                                <KeyboardArrowRight />
                            </Grid>
                            <Grid className={classes.griditem} container item spacing={1}>
                                <Grid container item>
                                    Blog
                            </Grid>
                                <Grid container item>
                                    Compare Payment Gateways
                            </Grid>
                                <Grid container item>
                                    Tackling Payment Failures
                            </Grid>
                                <Grid container item>
                                    Enterprise Billing Guide
                            </Grid>
                                <Grid container item>
                                    Webinars
                            </Grid>
                                <Grid container item>
                                    Glossaries
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm={3}>
                        <Grid container item spacing={3}>
                            <Grid container item direction="row">
                                <Typography className={classes.gridhead}>Company</Typography>
                                <KeyboardArrowRight />
                            </Grid>
                            <Grid className={classes.griditem} container item spacing={1}>
                                <Grid container item>
                                    Customers
                            </Grid>
                                <Grid container item>
                                    Partners
                            </Grid>
                                <Grid container item>
                                    Careers
                            </Grid>
                                <Grid container item>
                                    Press
                            </Grid>
                                <Grid container item>
                                    Terms
                            </Grid>
                                <Grid container item>
                                    Privacy
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={12} margin="auto" width={80 / 100} display="flex" alignItems="center" justifyContent="center">
                <Grid container item sm={12}>
                    <Grid container item sm={6}>
                        {/* <Typography style={{ color: "black", fontSize: "22px", fontWeight: "bold" }}>
                            Chargebee
                        </Typography> */}
                        <img height="60px" width="115px" src="https://webinars.chargebee.com/hubfs/chargebee-logo-black.svg"/>
                    </Grid>
                    <Grid container item sm={6} spacing={6} justify="flex-end">
                        <Grid conatiner item sm={1}>
                            <TwitterIcon />
                        </Grid>
                        <Grid conatiner item sm={1}>
                            <YouTubeIcon />
                        </Grid>
                        <Grid conatiner item sm={1}>
                            <LinkedInIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Section7
