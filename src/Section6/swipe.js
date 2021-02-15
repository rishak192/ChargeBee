import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { Box, Container, Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cur = [
  {
    label: 'Achieved',
    desc: 'ROI with chargebee.',
    bacimg: 'linear-gradient(180deg,#438b8b 0,#124e4e 100%)',
    content: '“Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun.”',
    name: 'Nathan Field',
    prof: 'Marketing',
    imgPath:
      'https://webstatic.chargebee.com/assets/web/352/images/home/testimonial/lemon/drawboard-20x.svg',
    botimg: 'https://webstatic.chargebee.com/assets/web/352/images/case-study/drawboard/logo.svg'
  },
  {
    label: 'Saved',
    desc: 'in manual accounting.',
    bacimg: 'linear-gradient(180deg,#47499b 0,#242565 100%)',
    content: '“Our finance and accounting teams now save up to 105 hours of manual accounting every month. We now have more time to do financial analysis and make strategic business decisions.”',
    name: 'Ayush Patel',
    prof: 'Finance',
    imgPath:
      'https://webstatic.chargebee.com/assets/web/352/images/home/testimonial/lemon/fishburners-105.svg',
    botimg: 'https://webstatic.chargebee.com/assets/web/352/images/customers/logos/fishburners.png'
  },
  {
    label: 'Grew MRR by',
    desc: 'and expanded globally from Europe.',
    bacimg: 'linear-gradient(180deg,#f2a720 0,#bc7e0f 100%)',
    content: '“As a European company selling in Europe but also outside of Europe, it was critical for us to be able to have two currencies - euros and dollars. VAT was another aspect we really wanted to be automated. This was a gamechanger with Chargebee. ”',
    name: 'Valentin Huang',
    prof: 'Co-founder',
    imgPath:
      'https://webstatic.chargebee.com/assets/web/352/images/home/testimonial/lemon/harvestr-15percent.svg',
    botimg: 'https://webstatic.chargebee.com/assets/web/352/images/case-study/harvestr/logo.png'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  button:{
    height:"60px",
    width:"50px",
    position:"absolute",
    backgroundColor:"white",
    borderRadius:"50%",
    marginTop:"-210px",
    boxShadow:"0 0 10px 1px gray"
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = cur.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" xs={12}>
        <Grid item xs={4} style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px", borderTopRightRadius:"50px",borderBottomRightRadius:"50px", backgroundImage: cur[activeStep].bacimg }}>
          <Box m={5}>
            <Box>
              <Typography style={{fontSize:"15px",color:"white",padding:"5px 0"}}>{cur[activeStep].label}</Typography>
            </Box>
            <Box>
              <img src={cur[activeStep].imgPath} />
            </Box>
            <Box>
              <Typography style={{fontSize:"20px",color:"white",padding:"10px 0"}}>{cur[activeStep].desc}</Typography>
            </Box>
          </Box>
          <Box width={1} m={5} mb={20} display="flex" flexDirection="row">
            <Box width={1 / 4} display="flex" alignItems="center" justifyContent="center">
              <Box mr={2} width={1} height={0} style={{border:"1px solid white"}}/>
            </Box>
            <Box width={1 / 2}>
              <Button variant="outlined" style={{ borderColor: "white", color: "white" }} endIcon={<ArrowForward />}>Read Story</Button>
            </Box>
          </Box>
        </Grid>

        <Grid container item xs={6} direction="column" alignItems="center" justify="space-between" style={{ backgroundColor: "white"}}>
          <Grid item >
            <Box>
              <Typography style={{fontSize:"25px",padding:"50px"}}>
                {cur[activeStep].content}
              </Typography>
            </Box>
          </Grid>
          <Grid container item direction="row" alignItems="center" justify="space-between">
            <Grid item>
              <Box>
                <Typography style={{marginLeft:"50px", fontSize:"25px",fontWeight:"bold"}}>
                  {cur[activeStep].name}
                </Typography>
              </Box>
              <Box>
                <Typography style={{marginLeft:"50px", fontSize:"20px"}}>
                  {cur[activeStep].prof}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <img height="50px" width="200px" src={cur[activeStep].botimg} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button className={classes.button} style={{marginLeft:"60px"}} onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === 'rtl' ? <ArrowForward /> : <ArrowBack />}
      </Button>
      <Button className={classes.button} style={{right:"125px"}} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        {theme.direction === 'rtl' ? <ArrowBack color=""/> : <ArrowForward />}
      </Button>
    </Container>
  );
}

export default SwipeableTextMobileStepper;
