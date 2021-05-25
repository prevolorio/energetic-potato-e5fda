import React, { Component } from 'react'
import {InlineWidget} from 'react-calendly'

class Calendly extends Component {
  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/launchbh" />
      </div>
    );
  }
}

export default Calendly;