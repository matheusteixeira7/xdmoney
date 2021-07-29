import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  padding: 0 1rem;

  table {
    width: 100%;
    max-width: 1120px;
    color: var(--text-body);
    border-spacing: 0 0.5rem;
    margin: 0 auto;

    th {
      text-align: left;
      padding: 1rem;
    }

    td {
      background: var(--shape);
      padding: 1rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
