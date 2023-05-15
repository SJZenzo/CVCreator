import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/example" className="nav-link">
                Przykładowe CV
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
