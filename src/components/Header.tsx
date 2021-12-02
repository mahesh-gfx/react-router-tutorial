import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>React router dom tutorial</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profiles</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
