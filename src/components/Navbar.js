import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Clã Brothers 🪖</div>
      <ul>
        <li><a href="#about">Sobre o Clã</a></li>
        <li><a href="#server">Nome do Servidor</a></li>
        <li><a href="#members">Membros</a></li>
        <li><a href="#banned">Jogadores Banidos</a></li>
        <li><a href="#social">Redes Sociais</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
