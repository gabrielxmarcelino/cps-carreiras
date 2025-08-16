import React from 'react'
import {PanelCentralContainer} from './PanelCentral.styles'


export default function PanelCentral({ children }) {
  return (
    <PanelCentralContainer>
       { children }
    </PanelCentralContainer>
  )
}
