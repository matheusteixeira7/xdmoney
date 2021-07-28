import logoImg from '../../assets/logo.svg';

import { Container, Content } from "./styles"

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Company logo" />
        <button type="button" onClick={props.openNewTransactionModal}>New transaction</button>
      </Content>
    </Container>
  )
}
