import { useNavigate } from "react-router";

export default function PokeLista({ pokeList }) {
  const navigate = useNavigate();

  function handleDirecionaDetalhes(id, pokeName) {
    navigate(`/detalhes/${id}?name=${pokeName}`);
  }

  return (
    <div>
      {pokeList.map((item, index) => (
        <ul key={index}>
          <li>Nome: {item.name}</li>
          <button onClick={() => handleDirecionaDetalhes(index + 1, item.name)}>
            Ver Detalhes
          </button>
        </ul>
      ))}
    </div>
  );
}
