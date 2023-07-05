import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { TransactionPages } from "./pages/Transactions";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionPages/>
      <GlobalStyles/>
    </ThemeProvider>
  );
}

