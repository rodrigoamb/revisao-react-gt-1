export default function PokeLista({ pokeList }) {
  function handleAdicionaCarrinho() {
    console.log("Adicionando ao carrinho");
  }

  return (
    <div>
      {pokeList.map((item, index) => (
        <ul key={index}>
          <li>Nome: {item.name}</li>
          <button onClick={handleAdicionaCarrinho}>Ver Detalhes</button>
        </ul>
      ))}
    </div>
  );
}
