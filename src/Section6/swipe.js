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
import { Box } from '@material-ui/core';

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
    bacimg: 'linear-gradient(180deg,#438b8b 0,#124e4e 100%)',
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
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box width={1 / 2}>
        <Box  height="100%" width={1} style={{ border: "1px solid red" }}>
          <Box display="flex" flexDirection="row">
            <Box backgroundColor={cur[activeStep].bacimg}>
              <Box>
                <Box>
                  <Typography>{cur[activeStep].label}</Typography>
                </Box>
                <Box>
                  <img src={cur[activeStep].imgPath} />
                </Box>
                <Box>
                  <Typography>{cur[activeStep].desc}</Typography>
                </Box>
              </Box>
              <Box width={1} display="flex" flexDirection="row">
                <Box width={1 / 4} display="flex" alignItems="center" justifyContent="center" style={{ border: "1px solid white" }}>
                  <Box width={1} height={0} style={{ border: "1px solid white" }} />
                </Box>
                <Box width={1 / 2}>
                  <Button variant="outlined" style={{ borderColor: "white", color: "white" }} endIcon={<ArrowForward />}>Read Story</Button>
                </Box>
              </Box>
            </Box>
            <Box width={3/4} style={{ backgroundColor: "white" }} display="flex" flexDirection="column" justifyContent="space-between">
              <Box display="flex" flexDirection="column">
                <Box>
                  <Typography>
                    {cur[activeStep].content}
                  </Typography>
                </Box>
              </Box>
              <Box style={{border:"1px solid red"}} width={1} display="flex" flexDirection="row" justifyContent="space-between">
                <Box>
                  <Box>
                    <Typography>
                      {cur[activeStep].name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      {cur[activeStep].prof}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img height="25px" width="auto" src={cur[activeStep].botimg} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <ArrowForward /> : <ArrowBack />}
        </Button>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          {theme.direction === 'rtl' ? <ArrowBack /> : <ArrowForward />}
        </Button>
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
