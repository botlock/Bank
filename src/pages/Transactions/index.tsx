import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  TransactionContainer,
  TransactionTable,
  PriceHighLight,
} from "./styles";
export function TransactionPages() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm/>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>

              <td>Venda</td>
              <td>05/07/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              </td>

              <td>Alimentação</td>
              <td>03/07/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
