import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContexts";
import {memo} from "react"

/* Por que um componente renderiza ?
  1-  Hooks change (Mudou estado, reducer , contexto ou algo assim)
  2- Props Chnged(mudou propriedades)
  3- Parent rerendered(componente pai renderizou e o componente filho vai renderizar também)


  *- Qual o fluxo de renderização ?
  1- O react recria o HTML da interface daquele componente 
  2- Compara a versão do HTML recriada com a versão anterior 
  3- SE mudou alguma coisa ele rescreve o HTML na tela

  *Memo:
  Passo 0: Mudou alguma coisa nos hooks change, ou props changed (deep comparison) ? 
  passo 0.1: Comparar a versão anterior dos hooks e das props 
  passo 0.2: SE mudou algo ele vai permitir q o componente renderize ou a nova renderização

*/






const SearchFormSchemma = Z.object({
  query: Z.string(),
});

type SearchFormInput = Z.infer<typeof SearchFormSchemma>;

 function SearchFormComponent() {

  const {FetchTransactions} = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchemma),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    
   await FetchTransactions(data.query)
    console.log(data)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent)