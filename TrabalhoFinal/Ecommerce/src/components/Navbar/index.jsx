import "./style.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="nav_box">
      <NavLink to="/home">home</NavLink>
      <NavLink to="/carrinho">Carrinho <FiShoppingCart/></NavLink>
    </div>
  );
};

export default Navbar;

