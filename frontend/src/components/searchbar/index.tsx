import { useState } from "react";
import { DivSearchBar, InputSearch, IconSearch } from "./SearchBar.style";
import { Hero } from "../hero";

interface TypeSearch {
  onSearch: (cidade: string) => void;
}

export const Searchbar = ({ onSearch }: TypeSearch) => {
  const [cidade, setCidade] = useState("");

  const handleSearch = () => {
    onSearch(cidade);
  };
  return (
    <div>
      <Hero />
      <DivSearchBar>
        <InputSearch
          type="text"
          onChange={(e) => setCidade(e.target.value)}
          value={cidade}
          placeholder="Digite a cidade que deseja..."
        />
        <IconSearch src={"../src/assets/procurar.png"} onClick={handleSearch} />
      </DivSearchBar>
    </div>
  );
};
