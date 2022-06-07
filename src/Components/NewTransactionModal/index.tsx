import { FormEvent, useContext, useState } from "react";
import ReactModal from "react-modal";
import { Container, RadioBox, TransationTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("deposit")

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()
        await createTransaction({ title, amount, category, type })
        setTitle("")
        setCategory("")
        setType("")
        setAmount(0)
        onRequestClose()
    }
    

  return (
      <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content"> 
          
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close-button"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação </h2>
            <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
            <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>

            <TransationTypeContainer>
                <RadioBox type="button" onClick={() => {setType("deposit")}} isActive={type === "deposit"} activeColor="green">
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox type="button" onClick={() => {setType("withdraw")}} isActive={type === "withdraw"} activeColor="red">
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransationTypeContainer>

            <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
            <button type="submit">Cadastrar</button>
          </Container>
      </ReactModal>
  )
}