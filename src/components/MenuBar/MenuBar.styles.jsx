import styled from "styled-components";

export const MenubarContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// Botão hamburguer no canto direito
export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
`;

// Menu de links, aparece abaixo do botão hamburguer no mobile
export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  .cursorLabel {
    cursor: pointer;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 16px; /* mesmo padding do container */
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    z-index: 10;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

    .cursorLabel {
      font-size: 1.1rem;
    }
  }
`;
