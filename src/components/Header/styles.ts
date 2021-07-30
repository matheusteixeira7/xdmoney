import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  height: 15rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  button {
    background: var(--blue-light);
    border: 0;
    height: 3rem;
    padding: 0 2rem;
    color: white;
    border-radius: 0.25rem;
    transition: filter 200ms ease;
    font-size: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
