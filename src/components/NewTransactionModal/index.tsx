import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="new-transaction-modal"
      overlayClassName="new-transaction-modal-overlay"
    >
      <Container>
        <img
          src={closeImg}
          alt="Close Modal Button"
          onClick={onRequestClose}
          className="btn-close"
        />
        <h2>Register Transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType("deposit");
            }}
            isActive={transactionType === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType("withdraw");
            }}
            isActive={transactionType === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Category" />
        <button type="submit" className="btn-submit">
          Register
        </button>
      </Container>
    </Modal>
  );
};
