import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;
    
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .new-transaction-modal {
    background: var(--shape);
    border-radius: .25rem;
    color: var(--text-title);
    max-width: 36rem;
    width: 100%;

    position: relative;

    .btn-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      transition: filter 200ms ease;

      &:hover {
        filter: brightness(0.5);
        cursor: pointer;
      }
    }
  }

  .new-transaction-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
