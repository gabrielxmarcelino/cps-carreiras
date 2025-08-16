import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenubarContainer,
  MenuItems,
  HamburgerButton,
  Bar
} from './MenuBar.styles';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <MenubarContainer>
      <HamburgerButton onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerButton>

      <MenuItems isOpen={isOpen}>
        <Link to='/'><label className="cursorLabel">Tela inicial</label></Link>
        {/* <Link><label className="cursorLabel">Cadastro</label></Link> */}
        <Link to='/perfil'><label className="cursorLabel">Perfil</label></Link>
        {/* <Link><label className="cursorLabel">Vagas</label></Link> */}
        <Link to='/contato'><label htmlFor="" className="cursorLabel">Contate-nos</label></Link>
        <Link><label className="cursorLabel">Trilha</label></Link>
        <Link><label className="cursorLabel">Inovação</label></Link>
      </MenuItems>
    </MenubarContainer>
  );
}