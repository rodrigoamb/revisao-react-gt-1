import { useParams, useSearchParams } from "react-router";
import LayoutWrapper from "../components/LayoutWrapper";

export default function DetalhesPage() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <LayoutWrapper>
      <h1>Meu componente pagina de detalhes</h1>
      <p>meu id: {id}</p>
      <p>Nome do pokemon: {name}</p>
    </LayoutWrapper>
  );
}
