import { useNavigate } from "react-router";

export default function PokeLista({ pokeList }) {
  const navigate = useNavigate();

  function handleDirecionaDetalhes(id) {
    navigate(`/detalhes/${id}`);
  }

  return (
    <div>
      {pokeList.map((item, index) => (
        <ul key={index}>
          <li>Nome: {item.name}</li>
          <button onClick={() => handleDirecionaDetalhes(index + 1)}>
            Ver Detalhes
          </button>
        </ul>
      ))}
    </div>
  );
}
