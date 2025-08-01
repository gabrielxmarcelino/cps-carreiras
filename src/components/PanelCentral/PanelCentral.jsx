import React from 'react'
import {PanelCentralContainer} from './PanelCentral.styles'
import carreiras from '../images/carreiras.jpg'
import cps from '../images/cps.jpg'
import maleta from '../images/maleta.jpg'
import teapro from '../images/teapro.jpg'

export default function PanelCentral() {
  return (
    <PanelCentralContainer>
        <img src={carreiras} alt="" />
        <img src={cps} alt="" />
        <img src={maleta} alt="" />
        <img src={teapro} alt="" />
        <br />
        <button className='button-card'>Cadastre-se / Login</button>
    </PanelCentralContainer>
  )
}
