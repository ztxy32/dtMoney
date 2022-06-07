import { useState } from "react"
import ReactModal from "react-modal";
import LogoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps{
    onOpenNewTransactionModalOpen: () => void; 
}

export function Header({onOpenNewTransactionModalOpen}:HeaderProps){
    return(
        <Container>
            <Content>
                <a href="#"><img src={LogoImg} alt="dt money" /></a>
                <button type="button" onClick={onOpenNewTransactionModalOpen}>Nova Transação</button>   
            </Content>
        </Container>
    )
}