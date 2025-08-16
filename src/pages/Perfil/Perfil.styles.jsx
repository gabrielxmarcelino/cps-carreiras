import styled from "styled-components";

export const InicioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .informs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px; /* espaçamento entre os cards */
    max-width: 1000px;
  }

  .teste2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
  }

  .teste2 img {
    width: 200px; /* tamanho do ícone */
    height: 200px;
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
