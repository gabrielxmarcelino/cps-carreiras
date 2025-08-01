import React from 'react'
import { Link } from 'react-router-dom';
import {MenubarContainer} from './MenuBar.styles'

export default function menubar() {
  return (
    <MenubarContainer>
        <Link>
            <label className='cursorLabel'>Tela inicial</label>
        </Link>
        <Link>
            <label className='cursorLabel'>Cadastro</label>
        </Link>
        <Link>
            <label className='cursorLabel'>Perfil</label>
        </Link>
        <Link>
            <label className='cursorLabel'>Vagas</label>
        </Link>
        <Link>
            <label className='cursorLabel'>Trilha</label>
        </Link>
        <Link>
            <label className='cursorLabel'>Inovação</label>
        </Link>
    </MenubarContainer>
  )
}
