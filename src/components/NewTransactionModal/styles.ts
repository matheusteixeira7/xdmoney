import styled from "styled-components";
import { darken, opacify } from "polished";

export const Container = styled.div`
  padding: 4rem 3rem;

  h2 {
    margin-bottom: 2rem;
  }

  input,
  button {
    width: 100%;
  }

  input {
    background: var(--background);
    padding: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    margin: 0.5rem 0;

    &::placeholder {
      color: var(--text-body);
    }
  }

  .btn-submit {
    background: var(--green);
    color: #fff;
    height: 4rem;
    border: none;
    border-radius: 0.25rem;
    font-weight: 600;
    transition: background 200ms ease;

    &:hover {
      background: ${darken(0.1, "#33CC95")};
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: opacify(0.1, "rgba(51, 204, 149, .1)"),
  red: opacify(0.1, "rgba(229, 46, 77, .1)"),
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};

  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  color: var(--text-title);
  margin: 0.5rem 0;
  padding: 1rem;
  transition: border-color 200ms ease;

  &:hover {
    border-color: ${darken(0.3, "#d7d7d7")};
  }

  &:first-child {
    margin-right: 1rem;
  }

  img {
    height: 1.25rem;
    margin-right: 1rem;
  }
`;
