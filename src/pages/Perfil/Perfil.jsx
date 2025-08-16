import React from 'react'
import { InicioContainer } from './Perfil.styles'
import pc from '../../components/images/pc2.png'
import calm from '../../components/images/calm2.png'
import repeat from '../../components/images/repeat2.png'
import team from '../../components/images/hands.png'

export default function Perfil() {
  return (
    <InicioContainer>
      <h1>Escolha o que você prefere no trabalho:</h1>

      <div className="informs">
        <div className="teste2">
          <img src={calm} alt="Imagem de um ambiente calmo" />
          <b>Ambiente calmo</b>
          <p>Sem ruídos, pouca luz, sem multidão.</p>
        </div>
        <div className="teste2">
          <img src={repeat} alt="Imagem de repetição" />
          <b>Tarefas repetitivas</b>
          <p>Fazer a mesma tarefa com rotina clara.</p>
        </div>
        <div className="teste2">
          <img src={team} alt="Imagem de uma equipe" />
          <b>Trabalho em equipe</b>
          <p>Gosto de conversar e colaborar.</p>
        </div>
        <div className="teste2">
          <img src={pc} alt="Imagem de um computador" />
          <b>Trabalho com computador</b>
          <p>Programação, digitação, design.</p>
        </div>
      </div>
    </InicioContainer>
  )
}
