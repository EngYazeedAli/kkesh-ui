import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>KKESH UI</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/installation">Installation</Link></li>
        <li><Link to="/components">Components</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
