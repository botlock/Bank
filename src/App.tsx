import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { TransactionPages } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionsContexts";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <TransactionPages />
      </TransactionProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
