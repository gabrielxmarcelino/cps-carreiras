import styled from "styled-components";

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .informs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px; /* espaçamento entre os cards */
    max-width: 1000px;
  }

  .teste2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 220px;
    text-align: center;
  }

  .teste2 img {
    width: 100px; /* deixa os ícones maiores */
    height: 100px;
    margin-bottom: 15px;
  }

  .teste2 b {
    font-size: 1rem;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .teste2 p {
    font-size: 0.9rem;
    color: #333;
  }
`;
