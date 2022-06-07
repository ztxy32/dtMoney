import { useContext } from "react";
import IncomeImage from "../../assets/income.svg"
import OutcomeImage from "../../assets/outcome.svg"
import TotalImage from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";


export function Summary(){
    const { transactions } = useContext(TransactionsContext)
    return(
        <Container>
            <div draggable>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImage} alt="Entradas" />
                </header>
                <strong>R$100,00</strong>
            </div>
            <div draggable>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImage} alt="Entradas" />
                </header>
                <strong>R$ -1400,00</strong>
            </div>
            <div className="highlight-background" draggable>
                <header>
                    <p>Total</p>
                    <img src={TotalImage} alt="Entradas" />
                </header>
                <strong>R$ -1300,00</strong>
            </div>
        </Container>
    )
}