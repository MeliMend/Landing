import React, { Component } from 'react'
import { Button,  EtiqA, NavbarOp, NavbarP } from '../styles/Style'

export default class Navbar extends Component {
  render() {
    return (
      <NavbarP>
        <a><img src='https://res.cloudinary.com/estudiante-geek/image/upload/v1653945264/logo_khajl0.png'/></a>
        <NavbarOp>
        <EtiqA>Joe Seaech</EtiqA>
        <EtiqA>About</EtiqA>
        <EtiqA>Pricing</EtiqA>
        <EtiqA>Contact</EtiqA>
        </NavbarOp>
        <div>
        <Button type="button">Log in</Button>
        <Button type="button" >Try it Free</Button>
        </div>
      </NavbarP>
    )
  }
}

