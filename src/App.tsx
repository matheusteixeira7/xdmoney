import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

export const App = () => {
  Modal.setAppElement('#root');

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
      <NewTransactionModal
        isOpen={isOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </div>
  );
};
