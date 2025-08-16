import styled from "styled-components";

export const InicioContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
    background-color: rgb(208, 152, 235);
  
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .button-card {
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 20px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .button-card {
      font-size: 1.2rem;
    }
  }
`