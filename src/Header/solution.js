import { Box, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CusGrid from '../Grid/griditem'
import CusGridHead from '../Grid/gridhead'

const useStyle = makeStyles(theme => ({
    product: {
        background: "linear-gradient(180deg,#ecf3f7 0,#fff 99.92%)",
        backgroundRepeat: "no-repeat",
        paddingBottom:"30px",
        paddingTop:"30px",
        boxShadow:"0px 200px 200px 100px gray"
    }
}))

const Solutions = () => {

    const classes = useStyle()

    return (
        <Box className={classes.product}>
            <Grid container sm={12} justify="space-around">
                <Grid container item sm={2} spacing={2}>
                    <CusGridHead text="By Role" />
                    <Grid container item spacing={1}>
                        <CusGrid text="Finance" />
                        <CusGrid text="Sales" />
                        <CusGrid text="RevOps" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2}>
                    <CusGridHead text="By Industry" />
                    <Grid container item spacing={1}>
                        <CusGrid text="B2B SaaS" />
                        <CusGrid text="Ecommerce" />
                        <CusGrid text="E-learning" />
                        <CusGrid text="Publishing" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2}>
                    <CusGridHead text="By Strategy" />
                    <Grid container item spacing={1}>
                        <CusGrid text="Roll Out New" />
                        <CusGrid text="Pricing" />
                        <CusGrid text="Expand Globally" />
                        <CusGrid text="Move Upmarket" />
                        <CusGrid text="Shift to Subscriptions" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2}>
                    <CusGridHead text="By Business Size" />
                    <Grid container item spacing={1}>
                        <CusGrid text="Startup" />
                        <CusGrid text="ScaleUp" />
                        <CusGrid text="Enterprise" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2}>
                    <CusGridHead text="By Business Model " />
                    <Grid container item spacing={1}>
                        <CusGrid text="Self-serve" />
                        <CusGrid text="Sales-driven" />
                    </Grid>
                </Grid>
                <Grid container item sm={2} spacing={2}>
                    <CusGridHead text="By Geography" />
                    <Grid container item spacing={1}>
                        <CusGrid text="Europe" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Solutions
