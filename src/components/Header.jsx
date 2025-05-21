import { ListIcon } from "@phosphor-icons/react";
import MenuFlutuante from "./MenuFlutuante";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenOrCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-gray-800 text-white text-3xl font-bold flex flex-row justify-between items-center px-10 py-8">
      <div className="relative">
        <ListIcon
          className="cursor-pointer"
          onClick={handleOpenOrCloseMenu}
          size={32}
          weight="bold"
        />
        {isMenuOpen && <MenuFlutuante />}
      </div>
      <p>Pokedex</p>
    </header>
  );
}
