import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  padding: 0 1rem;
  
  div {
    background: var(--shape);
    border-radius: .25rem;
    padding: 1.5rem 1.5rem;

    &:last-child {
      background: var(--green);

      & header, strong {
        color: #fff;
      }
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-title);
    }

    strong {
      margin-top: 1rem;
      display: block;
      
      font-size: 2rem;
      font-weight: 500;
      color: var(--text-title);
    }
  }
`;