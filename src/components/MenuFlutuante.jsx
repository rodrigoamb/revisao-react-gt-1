export default function MenuFlutuante() {
  const listMenu = ["Home", "Produtos", "Categoria", "Meus Pedidos", "Outro"];

  return (
    <div className="bg-red-300 absolute top-6 left-6 w-[500px] h-[500px]">
      {listMenu.map((item, index) => (
        <div key={index}>
          <button>{item}</button>
        </div>
      ))}

      <button className="mt-10">Outro botao</button>
    </div>
  );
}
