import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">NewsDaily</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/form">Create</Link>
          <Link to="/list">News</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
