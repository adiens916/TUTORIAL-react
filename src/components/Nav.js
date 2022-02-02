import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <li><Link to="/">Home</Link></li>
      </nav>
    </div>
  );
}

export default Nav;