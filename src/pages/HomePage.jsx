import { useEffect, useState } from "react";
import ListaTenis from "../components/PokeLista";
import PokeLista from "../components/PokeLista";

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

  console.log(pokeList);

  return (
    <div>
      <h1>Meu componente APP</h1>
      <PokeLista pokeList={pokeList} />
    </div>
  );
}
