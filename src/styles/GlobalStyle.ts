import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    text-decoration: none;
    list-style: none;
  }

  :root {
    --general-blue: #52B6FF;
    --darker-blue: #126BA5;
    --general-border-style: 1px solid #D4D4D4;
    --border-radius: 5px;
    --general-white: #FFF;
    --placeholder-color: #DBDBDB;
    --calendar-gray-color: #CFCFCF;
    --inactive-check-color: #e7e7e7;
    --active-check-color: #8FC549;
    --body-background-color: #f2f2f2;
  }
  
  body {
    font-family: 'Lexend Deca', sans-serif;
  }
  
  button {
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    background: #52B6FF;
    border-radius: 4.63636px;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.95);
    }
  }

  .react-modal-overlay {
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--general-white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
  
`;
