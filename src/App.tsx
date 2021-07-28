import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import ReactModal from "react-modal"
import { useState } from "react"

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsOpen(false);
  }
  
  return (
    <div>
      <Header openNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <ReactModal 
        isOpen={isOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        New transaction
      </ReactModal>
      <GlobalStyle />
    </div>
  )
}
