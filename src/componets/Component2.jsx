import React, { Component } from 'react'
import { Btn, Nav, StyleA, StyleComponent2 } from '../styles/Style'


export default class Component2 extends Component {
  render() {
    return (
      <StyleComponent2>
          <Nav>
           <StyleA href="">Trusted by the world's leading companies</StyleA>
           <Btn><img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1653955303/HAREE_cukeko.png" alt="" srcset="" /></Btn>
           <Btn><img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1653955303/logo_jobona_fxqcvi.png" alt="" srcset="" /></Btn>
           <Btn><img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1653955303/logo_perman_tlldcv.png" alt="" srcset="" /></Btn>
           <Btn><img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1653955303/logo_jobona_fxqcvi.png" alt="" srcset="" /></Btn>
           <Btn><img src="https://res.cloudinary.com/estudiante-geek/image/upload/v1653955303/logo_workctrl_hamr0a.png" alt="" srcset="" /></Btn>
          </Nav>
          <h1> Search for you area of interest</h1>
          <h4>Please enter you desired industry,job titke,and skills</h4>
        <form >
        <input type="search" placeholder="Search" aria-label="Search"/>
        <button  type="submit">Search</button>
      </form>
      </StyleComponent2>
    )
  }
}
