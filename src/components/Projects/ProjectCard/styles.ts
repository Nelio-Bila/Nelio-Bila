'use client'

import styled from 'styled-components'

export const Container = styled.div`
  max-width: 20rem;
  min-height: 26.85rem;

  border: 2px solid var(--neutral-800);
  border-radius: 0.625rem;

  background: var(--neutral-900-opacity-80);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.02);

    border-color: var(--primary-400);
    box-shadow: 0rem 0rem 1rem var(--primary-400);
  }

  :hover .project-card-actions {
    opacity: 1;
  }
`

export const Content = styled.div`
  height: 100%;
  padding: 0.875rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Cover = styled.div`
  width: 100%;

  position: relative;

  img {
    max-width: 18rem;
    max-height: 10rem;

    border-radius: 0.625rem;
  }
`

export const CoverActions = styled.div`
  opacity: 0;

  width: 100%;
  height: 100%;
  max-width: 18rem;
  max-height: 10rem;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 0.625rem;

  background-color: rgba(0, 0, 0, 0.6);

  transition: 0.3s opacity;

  a {
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;

    background: var(--neutral-900);

    transition: 0.3s filter;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      color: var(--primary-400);
    }
  }

  @media (max-width: 450px) {
    width: 18.5rem;
    height: 10rem;
  }
`

export const Information = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.h2`
  margin-top: 0.5rem;
`

export const Divider = styled.div`
  width: 4.5rem;
  height: 1px;
  margin: 0.5rem 0;

  border-radius: 100%;

  background: var(--neutral-800);
`

export const TechnologiesRow = styled.div`
  width: 100%;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;

  overflow-wrap: break-word;

  span {
    font-size: 0.875rem;

    color: var(--primary-200);
  }
`

export const FeaturedInformation = styled.div``

export const SeparateRow = styled.div`
  margin-top: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.8rem;
  }
`
