
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">Create</Link>
      <Link to="/list">News</Link>
    </nav>
  </header>
);

export default Header;

