import React from 'react'
import './about.scss'
import Mission from './components/Mission/Mission'
import Grant from './components/Grant/Grant'
import Commitment from './components/Commitment/Commitment'
import Values from './components/Values/Values'
const About = () => {
  return (
    <div className="about">
      <Mission />
      <Grant />
      <Values />
      <Commitment/>
    </div>
  );
}

export default About