import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme['--background']};
    color: ${props => props.theme['--base-text']};
    -webkit-font-smoothing: antialiased;
    padding: 0 0.5rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input, button {
    border: 0;
    background: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`