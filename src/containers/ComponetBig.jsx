import React, { Component } from 'react'
import Component2 from '../componets/Component2'
import Target from '../componets/Target'

export default class ComponetBig extends Component {
  render() {
    return (
        <div>
        <Component2/>
        <Target/>
        </div>
    )
  }
}
