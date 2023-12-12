import React, { useState } from 'react';
import './Menu.css'; // Arquivo CSS para estilização do Sidebar
import hmb from '../../assets/hmb.jpg'
import Fab from '../fab';
import { List, X } from '@phosphor-icons/react';

interface MenuProps {
  // Defina as propriedades necessárias para o Sidebar, se houver
}

const Menu: React.FC<MenuProps> = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Fab icon={<List size={20} />} onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)} />

      <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <Fab icon={<X size={20}/>} onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)} />
  
        <div className="logo">
          <img src={hmb} alt="Logo" />
        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Meus Pedidos</a></li>
          <li><a href="">Carrinho</a></li>
          <li><a href="">Configurações</a></li>
          <li><a href="">Sair</a></li>
          {/* Adicione mais itens conforme necessário */}
        </ul>
      </div>
    </>
  );
};

export default Menu;