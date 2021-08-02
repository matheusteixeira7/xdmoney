import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('deposit');
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      amount,
      transactionType,
      category,
    };

    api.post('/transactions', data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='new-transaction-modal'
      overlayClassName='new-transaction-modal-overlay'
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <img
          src={closeImg}
          alt='Close Modal Button'
          onClick={onRequestClose}
          className='btn-close'
        />
        <h2>Register Transaction</h2>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type='number'
          placeholder='Value'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setTransactionType('deposit');
            }}
            isActive={transactionType === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Income' />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => {
              setTransactionType('withdraw');
            }}
            isActive={transactionType === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Outcome' />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type='text'
          placeholder='Category'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type='submit' className='btn-submit'>
          Register
        </button>
      </Container>
    </Modal>
  );
};
