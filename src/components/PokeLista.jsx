import { useNavigate } from "react-router";

export default function PokeLista({ pokeList }) {
  const navigate = useNavigate();

  function handleDirecionaDetalhes() {
    navigate("/detalhes");
  }

  return (
    <div>
      {pokeList.map((item, index) => (
        <ul key={index}>
          <li>Nome: {item.name}</li>
          <button onClick={handleDirecionaDetalhes}>Ver Detalhes</button>
        </ul>
      ))}
    </div>
  );
}
