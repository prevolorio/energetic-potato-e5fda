import React, { Component } from 'react'
import { InlineWidget } from 'react-calendly'

class Calendly extends Component {
  render(){
    return (
        <InlineWidget url="https://calendly.com/launchbh" />
    );
  }
}

export default Calendly;