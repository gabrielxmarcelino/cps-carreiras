import React from 'react'
import { Link } from 'react-router-dom';
import { InicioContainer } from './Inicio.styles'
import carreiras from '../../components/images/carreiras.jpg'
import cps from '../../components/images/cps.jpg'
import maleta from '../../components/images/maleta.jpg'
import teapro from '../../components/images/teapro.jpg'

// This component currently does not render any content.
// You can add your desired content or components here in the future.
export default function Inicio() {
  return (
    <InicioContainer>
      <img src={carreiras} alt="" />
      <img src={cps} alt="" />
      <img src={maleta} alt="" />
      <img src={teapro} alt="" />
      <br />
      <Link to="/perfil">
        <button className='button-card'>Começar</button>
      </Link>
    </InicioContainer>
  )
}
