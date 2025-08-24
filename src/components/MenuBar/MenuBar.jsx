import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import {
  MenubarContainer,
  MenuItems,
  HamburgerButton,
  Bar
} from './MenuBar.styles';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleUserMenu = () => setShowUserMenu(prev => !prev);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowUserMenu(false);
    navigate('/');
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <MenubarContainer>
      <HamburgerButton onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerButton>

      <MenuItems isOpen={isOpen}>
        <Link to='/'><label className="cursorLabel">Tela inicial</label></Link>
        <Link to='/perfil'><label className="cursorLabel">Perfil</label></Link>
        <Link to='/contato'><label className="cursorLabel">Contate-nos</label></Link>
        <Link><label className="cursorLabel">Trilha</label></Link>
        <Link><label className="cursorLabel">Inovação</label></Link>

        {!user && (
          <>
            <Link to='/cadastro'><label className="cursorLabel">Cadastro</label></Link>
            <Link to='/login'><label className="cursorLabel">Login</label></Link>
          </>
        )}

        {user && (
          <div style={{ position: 'relative' }}>
            <label className="cursorLabel" onClick={toggleUserMenu}>
              Olá, {user.user_metadata?.nome || user.email}
            </label>

            {showUserMenu && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px',
                zIndex: 100
              }}>
                <label className="cursorLabel" onClick={handleLogout}>Deslogar</label>
              </div>
            )}
          </div>
        )}
      </MenuItems>
    </MenubarContainer>
  );
}
