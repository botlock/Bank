import { Header } from "../../components/Header";
import { useContext } from "react";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  TransactionContainer,
  TransactionTable,
  PriceHighLight,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContexts";

export function TransactionPages() {
  const {transactions} = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                    R${transaction.price}
                    </PriceHighLight>
                  </td>

                  <td>{transaction.category}</td>
                  <td>{transaction.createdAT}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
