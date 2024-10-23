'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-200: #D06C73;
    --primary-400: #CA3E47;

    --neutral-100: #D2D2D2;
    --neutral-300: #979797;
    --neutral-500: #7E7E7E;
    --neutral-600: #666666;
    --neutral-700: #525252;
    --neutral-800: #414141;
    --neutral-900: #313131;
    --neutral-900-opacity-80: rgba(49, 49, 49, 0.8);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  @media (max-width: 450px) {
    html {
      font-size: 81.25%; //13px
    }
  }

  body {
    background: var(--neutral-900);
  }

  body, input, textarea, button {

    border: 0;

    color: var(--neutral-300);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--neutral-100);
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button, a {
    text-decoration: none;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* ===== Scrollbar ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--primary-400) var(--neutral-800);
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.2rem;
  }

  *::-webkit-scrollbar-track {
    background: var(--neutral-800);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-400);
  }

  ::-webkit-scrollbar-thumb:horizontal{
    background-color: var(--neutral-600);
  }
`