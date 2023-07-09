import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchFormSchemma = Z.object({
  query: Z.string(),
});

type SearchFormInput = Z.infer<typeof SearchFormSchemma>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchemma),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
