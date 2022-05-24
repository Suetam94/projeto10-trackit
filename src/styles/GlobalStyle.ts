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
    --body-background-color: #e7e7e7;
  }
  
  body {
    font-family: 'Lexend Deca', sans-serif;
  }
  
  button {
    border: none;
    font-family: 'Lexend Deca', sans-serif;
    background: #52B6FF;
    border-radius: 4.63636px;
  }
  
`;
