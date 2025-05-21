import { useEffect, useState } from "react";
import PokeLista from "../components/PokeLista";
import LayoutWrapper from "../components/LayoutWrapper";

export default function HomePage() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    async function fetchDataPokemon() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      const data = await response.json();
      setPokeList(data.results);
    }

    fetchDataPokemon();
  }, []);

  return (
    <LayoutWrapper>
      <h1>Pokedex</h1>
      <PokeLista pokeList={pokeList} />
    </LayoutWrapper>
  );
}
