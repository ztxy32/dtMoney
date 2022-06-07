import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext, TransactionsProvider } from "./TransactionsContext";

ReactModal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(true)
    }
    function handleCloseNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(false)
    }
  return (
    <TransactionsProvider>
      
      <Header onOpenNewTransactionModalOpen={handleOpenNewTransactionModalOpen}/>
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen} />

    </TransactionsProvider>
    
  )
}

