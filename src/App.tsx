import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";

export const App = () => {
  Modal.setAppElement("#root");

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsOpen(false);
  };
  
  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </div>
  );
};
