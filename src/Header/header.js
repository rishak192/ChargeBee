import { AppBar, Button, ButtonGroup, Grid, Icon, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React, { useState, useHook, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import AllButton from '../Button/button';
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import './header.css';
import { ArrowForward, BorderStyle, KeyboardArrowRight, Lock } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuIcon from '@material-ui/icons/Menu';
import Product from './product';
import Solutions from './solution';
import Resources from './resources';
import Button1 from '../Button/button1';
import GoogleLogin from 'react-google-login'

const useStyles = makeStyles((theme, props) => ({
    menuButton: {
        display: "none",
        [theme.breakpoints.down('md')]: {
            display: "block",
        }
    },
    title: {
        [theme.breakpoints.down('md')]: {
            width: "100%"
        }
    },
    linkbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            display: "none",
        }
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: "#ff7846",
        borderColor: "#ff7846",
        color: "white",
        fontWeight: "bold",
        boxShadow: "none",
        borderRadius: "2px",
        fontSize: "12px",
        '&:hover': { boxShadow: "none", backgroundColor: "#ff7846" },
    },
    linkMargin: {
        marginLeft: 16,
        color: "black"
    },
    heading: {
        marginLeft: 16,
        marginRight: 16,
        color: "black",
    },
    appbar: {
        boxShadow: "none",
    },
    sbro: {
        marginTop: 150,
        fontWeight: "bolder",
        color: "#500ad2",
        fontSize: 40
    },
    fgbs: {
        marginTop: 10,
        fontWeight: "bolder",
        color: "black",
        fontSize: 40
    },
    destext: {
        marginTop: 20,
        borderWidth: 1,
        fontSize: 20
    },
    bgc: {
        marginTop: 30,
        width: 650,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    auth1: {
        backgroundColor: "#500ad2",
        color: "white",
        fontWeight: "bold",
    },
    auth2: {
        marginLeft: 30,
        color: "#000ff0",
        borderColor: "#000ff0"
    },
    appshad: {
    },
    send: {
        cursor: "pointer",
        marginLeft: "50px",
        color: "black",
        backgroundColor: "lighblue",
        border: "1px solid blue",
        padding: "4px",
        boxShadow: "0 0 5px 5px rgba(0,0,0,0.3)"
    },
    sol: {
        position: "absolute",
        top: "70px",
        left: "0",
        transition: "all 1s",
        opacity: 0
    }
}));

const HideOnScroll = (props) => {
    const classes = useStyles()
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    if (props.pos <= 144) {
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    } else if (props.pos > 144) {
        return (
            <Slide className={classes.appshad} appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Header = (props) => {

    const classes = useStyles(props);

    const [Arrow, setArrow] = useState(false);
    const [Sol, setSol] = useState(false)
    const [osol,setOsol]=useState(false)
    const [Res, setRes] = useState(false)
    const [Prod, setProd] = useState(false)
    const [opro,setOpro]=useState(false)

    const [Pos, setPos] = useState(0)

    const Shad = true

    const innerRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            setPos(scrollTop)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const response = (res) => {
        console.log(res.profileObj);
        var user = res.profileObj
        if (user !== undefined) {
            fetch('https://chargebeeback.herokuapp.com/saveUser', {
                method: 'post',
                body: JSON.stringify({
                    "email": user.email,
                    "name": user.name,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(res => {
                    console.log(res);
                })
        }
    }

    return (
        <React.Fragment>
            <HideOnScroll pos={Pos} {...props}>
                <AppBar className={classes.appbar} style={{
                    backgroundColor: Pos > 144 ? "rgba(255,255,255,1)" : "rgba(0,0,0,0)",
                }}>
                    <Toolbar>
                        <Box ml={1} mr={4} mt={1} className={classes.title}>
                            <Link href="#" underline="none">
                                {/* <Typography style={{ color: "black", fontSize: "22px",fontWeight:"bold" }}>
                                    Chargebee
                                </Typography> */}
                                {Pos < 144 ? <img height="60px" width="115px" src="https://webinars.chargebee.com/hubfs/chargebee-logo-black.svg" /> :
                                    <img height="35px" margin-bottom="5px" width="30px" src="https://www.chargebee.com/static/resources/brand/chargebee-icon-brand.png" />}
                            </Link>
                        </Box>
                        <Box width={1} className={classes.linkbar}>
                            <Box>
                                <Link href="#" underline="none"
                                    onMouseEnter={() => { setProd(true) }}
                                    onMouseLeave={()=>{opro?setProd(true):setTimeout(()=>setProd(false),200)}}>
                                    <Typography variant="h12" className={classes.linkMargin}>
                                        Product
                                    </Typography>
                                </Link>
                                <div onMouseEnter={()=>{if(Prod) {setOpro(true)}}} onMouseLeave={()=>{setOpro(false);setPos(false)}} className={classes.sol} style={{marginLeft: (Prod || opro) ? "0" : "-20px" ,zIndex: (Prod || opro) ? 1 : -1, opacity: (Prod || opro) ? 1 : 0 }}>
                                    <Product />
                                </div>
                                <Link href="#" underline="none">
                                    <Typography variant="h12" className={classes.linkMargin}>
                                        Pricing
                                    </Typography>
                                </Link>
                                <Link href="#" underline="none"
                                    onMouseEnter={() =>  {setSol(true)} }
                                    onMouseLeave={()=>{osol?setSol(true):setTimeout(()=>setSol(false),200)}}
                                    >
                                    <Typography variant="h12" className={classes.linkMargin}>
                                        Solutions
                                    </Typography>
                                </Link>
                                <div onMouseEnter={()=>{if(Sol){setOsol(true)}}} onMouseLeave={()=>{setOsol(false);setSol(false)}} className={classes.sol} style={{marginLeft: (Sol || osol) ? "0" : "-30px" ,zIndex: (Sol || osol) ? 1 : -1, opacity: (Sol || osol) ? 1 : 0 }}>
                                    <Solutions />
                                </div>
                                <Link href="#" underline="none">
                                    <Typography variant="h12" className={classes.linkMargin}>
                                        Customers
                                    </Typography>
                                </Link>
                                <Link href="#" underline="none"
                                    onMouseEnter={() => { setRes(true) }}
                                    onMouseLeave={() => { setRes(false) }}>
                                    <Typography variant="h12" className={classes.linkMargin}>
                                        Resources
                                    </Typography>
                                </Link>
                                {/* {Res?<Resources/>:null} */}
                            </Box>
                            <Link onClick={props.sendMes} underline="none"
                                onMouseEnter={() => { setRes(true) }}
                                onMouseLeave={() => { setRes(false) }}>
                                <Typography variant="h12"
                                    className={classes.send}>
                                    Send Message
                                    </Typography>
                            </Link>
                            <Box>
                                <Box display="flex" justifyContent="flex-end" alignItems="center" width={1}>
                                    <GoogleLogin
                                        clientId="1059988160831-ob4qb4o03s8d9pbfnmlb5dql33u14t00.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <Link onMouseEnter={() => { setArrow(true) }}
                                                onMouseLeave={() => { setArrow(false) }} onClick={renderProps.onClick} underline="none">
                                                <Grid container item sm={12} direction="row" >
                                                    {Pos > 144 ? <Lock style={{ marginTop: "2px", marginRight: "3px", fontSize: "15px" }} htmlColor="green" />
                                                        : <Lock style={{ marginTop: "2px", marginRight: "3px", fontSize: "15px" }} htmlColor="#ff7846" />}
                                                    <Grid>
                                                        <Typography variant="h8" style={{ color: "black", cursor: "pointer" }}>
                                                            Log in
                                                    </Typography>
                                                    </Grid>
                                                    {Arrow
                                                        ? <ArrowForward fontSize="small" htmlColor="black" />
                                                        : <KeyboardArrowRight fontSize="small" htmlColor="black" />}
                                                </Grid>
                                            </Link>
                                        )}
                                        buttonText="Login"
                                        onSuccess={response}
                                        onFailure={response}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                    <Link>
                                        <AllButton
                                            bgcolor="#ff7846"
                                            text="Schedule a Demo"
                                            size="small"
                                            tcolor="white"
                                            bradius="2px"
                                            height="35px"
                                            width="160px"
                                            fsize="14px"
                                            bold="bold" />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon htmlColor="Black" fontSize="large" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

            <Typography className={classes.sbro} variant="h3" align="center">Subscription Billing & Revenue Operations</Typography>
            <Typography className={classes.fgbs} variant="h3" align="center">for Fast-growth B2B SaaS</Typography>
            <Typography className={classes.destext} variant="h6" align="center">
                Get the operational sophistication to achieve, sustain,<br></br>
                        and scale recurring revenue.
            </Typography>
            <Container className={classes.bgc}>
                <Button1
                    showshad={true}
                    hshad="none"
                    bshadow="0 2px 10px 0 rgba(0,4,48,.08),0 8px 8px 0 rgba(0,4,48,.12),0 12px 21px 0 rgba(0,4,48,.24)"
                    width="230px"
                    bradius="5px"
                    fsize="20px"
                    tcolor="white"
                    size="large"
                    text="Schedule a Demo"
                    variant="contained"
                    bgcolor="#500ad2"
                    className={classes.auth1} />
                <Button1 bradius="5px"
                    width="200px"
                    border="1px solid #000ff0"
                    fsize="20px"
                    tcolor="#000ff0"
                    size="large"
                    text="Sign up for free"
                    variant="outlined"
                    className={classes.auth2} bcolor="#000ff0" />
            </Container>
        </React.Fragment>
    );
}

export default Header;

