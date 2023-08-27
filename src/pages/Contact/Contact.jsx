import React from 'react'
import Sizing from './components/Sizing'
import Address from './components/Address'
import Question from './components/Question'
import Map from './components/Map'
import Accordion from './components/Accordion'
const Contact = () => {
  return (
    <div className='contact'>
      <Sizing/>
      <Address/>
      <Question/>
      <Map/>
      <Accordion/>
    </div>
  )
}

export default Contact