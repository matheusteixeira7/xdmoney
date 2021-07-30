import { Container, Content } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary = () => {
  return (
    <Container>
      <Content>
        <div>
          <header>
            <p>Income</p>
            <img src={incomeImg} alt='Income logo' />
          </header>
          <strong>$ 3.000,00</strong>
        </div>
        <div>
          <header>
            <p>Outcome</p>
            <img src={outcomeImg} alt='Income logo' />
          </header>
          <strong>- $ 1.000,00</strong>
        </div>
        <div>
          <header>
            <p>Total</p>
            <img src={totalImg} alt='Income logo' />
          </header>
          <strong>$ 2.000,00</strong>
        </div>
      </Content>
    </Container>
  );
};
