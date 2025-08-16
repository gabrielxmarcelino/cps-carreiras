import React from 'react'
import { ContatoContainer } from './Contato.styles'

export default function Contato() {
  return (
    <ContatoContainer>
      <h1>Entre em contato conosco</h1>
      <p>
        Através do formulário, nos conte um pouco sobre você para personalizar sua experiência.
      </p>
      <button
        className="button-card"
        onClick={() =>
          window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSc1F1dSXDZkPGn0MuadbRtdtPA0dgMGaYbzZFbyVgHDRD2How/viewform',
            '_blank'
          )
        }
      >
        Abrir formulário
      </button>
    </ContatoContainer>
  )
}
