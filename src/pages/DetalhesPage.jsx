import { useParams, useSearchParams } from "react-router";

export default function DetalhesPage() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div>
      <h1>Meu componente pagina de detalhes</h1>
      <p>meu id: {id}</p>
      <p>Nome do pokemon: {name}</p>
    </div>
  );
}
