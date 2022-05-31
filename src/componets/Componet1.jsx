import React, { Component } from 'react'
import { Button, ConComponet1, Imagen2, Imagenes } from '../styles/Style'

export default class Componet1 extends Component {
  render() {
    return (
    <div>     
     <ConComponet1>
          <h1>We support your challenge in new areas</h1>
          <article>Our highly qualified headhunters, who have passed a rigorous Screeaning proces, will introduce you to your new career apportunity.</article>
          <Button>Try it Free</Button>
          <Button>Explore</Button>
      </ConComponet1>
      <Imagenes>
          <img width="700px" src=" https://res.cloudinary.com/estudiante-geek/image/upload/v1653953930/Vector_1_scc99k.png" alt="" />
          <Imagen2>
          <img width="400px" src="https://res.cloudinary.com/estudiante-geek/image/upload/v1653953880/Group_6_pnnee0.png" alt="" srcset="" />
          </Imagen2>
      </Imagenes>
      </div>
    )
  }
}
