import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import Section1 from './Section1/section1';
import Section2 from './Section2/section2';
import Section3 from './Section3/section3';
import Section7 from './Section7/section7';
import Section4 from './Section4/section4';
import Section5 from './Section5/section5';
import Section6 from './Section6/section6';
import SendMes from './sendmes';
import SwipeableTextMobileStepper from './Section6/swipe';

const App = () => {

  const [mes, setMes] = useState(false)

  const sendMes = () => {
    setMes(()=>{
      return true
    })
  }

  const goBack = () => {
    setMes(()=>{
      return false
    })
  }

  return (
    <div>
      {
        mes ?
          <SendMes goBack={goBack}/> :
          <div className="App">
            <Header sendMes={sendMes}/>
            <Section1 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
