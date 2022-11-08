import "./style.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="nav_box">
      <NavLink to="/home" style={{color: 'white'}}>home</NavLink>
      <NavLink to="/carrinho" style={{color: 'white'}}>Carrinho <FiShoppingCart/></NavLink>
    </div>
  );
};

export default Navbar;

