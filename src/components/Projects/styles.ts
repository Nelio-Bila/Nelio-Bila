'use client'

import styled from 'styled-components'

export const Container = styled.section`
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 650px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 360px) {
    padding: 2rem 1.5rem;
  }
`

export const Heading = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;

    text-align: center;
    line-height: 3rem;
    text-shadow: 0rem 0.25rem 2.5rem rgba(202, 62, 71, 0.5);

    color: var(--primary-400);

    @media (max-width: 840px) {
      font-size: 2rem;
    }
  }

  button {
    background: none;

    transition: 0.3s all;

    &:hover {
      transform: scale(1.1);
      filter: brightness(0.85);
    }

    svg {
      color: var(--neutral-600);
    }
  }
`

export const Content = styled.div`
  padding-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`

export const ShowMoreButton = styled.button`
  margin-top: 4rem;
  padding: 0.8rem 4.2rem;

  font-size: 1.2rem;

  border: 2px solid var(--neutral-800);
  border-radius: 0.5rem;

  color: var(--neutral-300);
  background: var(--neutral-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);

    box-shadow: 0rem 0rem 1rem var(--primary-400);
    border-color: var(--primary-400);
  }
`
