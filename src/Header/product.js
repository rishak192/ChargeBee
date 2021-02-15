import { Box, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CusGrid from '../Grid/griditem'
import CusGridHead from '../Grid/gridhead'

const useStyle = makeStyles(theme => ({
    product: {
        background: "linear-gradient(180deg,#ecf3f7 0,#fff 99.92%)",
        backgroundRepeat: "no-repeat",
        paddingBottom: "30px",
        paddingTop: "30px",
        boxShadow: "0px 200px 200px 100px gray",
    }
}))

const Product = () => {

    const classes = useStyle()

    return (
        <Box className={classes.product}>
            <Grid container sm={12} justify="space-around">
                <Grid container item sm={2} direction="column">
                    <Grid container item spacing={2}>
                        <CusGridHead text="Subscription Management" />
                        <CusGrid text="Overview" />
                        <CusGrid text="Create & Manage Plans" />
                        <CusGrid text="Pricing Management" />
                        <CusGrid text="Handle Trial Subscriptions" />
                        <CusGrid text="Customer Self-service Portal" />
                        <CusGrid text="Mobile Solutions" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} direction="column">
                    <Grid container item spacing={2}>
                        <CusGridHead text="Billing Automation" />
                        <CusGrid text="Overview" />
                        <CusGrid text="Usage Based Billing" />
                        <CusGrid text="Invoicing Automation" />
                        <CusGrid text="Quotes" />
                        <CusGrid text="Proration" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2} direction="column">
                    <Grid container item spacing={2}>
                        <CusGridHead text="Recurring Payments" />
                        <CusGrid text="Overview" />
                        <CusGrid text="Multiple Payment Methods" />
                        <CusGrid text="Multiple Payment Gateways" />
                        <CusGrid text="Handle Trial Subscriptions" />
                        <CusGrid text="Smart Dunning" />
                        <CusGrid text="Chargeback Management" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2} direction="column">
                    <Grid container item spacing={2}>
                        <CusGridHead text="Accounting & Taxes" />
                        <CusGrid text="Overview" />
                        <CusGrid text="Revenue Recognition" />
                        <CusGrid text="Manage Sales Tax" />
                        <CusGrid text="One-Click Reconciliation" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2} direction="column">
                    <Grid container item spacing={2}>
                        <CusGridHead text="Reporting & Analytics" />
                        <CusGrid text="Overview" />
                        <CusGrid text="Deferred Revenue Reporting" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Product
