import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav id="nav-ul">
            <ul className="nav-ul">
              <li className="nav-link">
                <NavLink to="/" className="link" data-filter="content-about">
                  <i className="fas fa-user" />
                  <br />
                  About
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to="/resume"
                  className="link"
                  data-filter="content-resume"
                >
                  <i className="fas fa-poll-h" />
                  <br />  
                  Resume
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to="/portfolio"
                  className="link"
                  data-filter="content-portfolio"
                >
                  <i className="fas fa-pencil-alt" />
                  <br />
                  PortFolio
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/blog" className="link" data-filter="content-blog">
                  <i className="fab fa-stack-exchange" />
                  <br />
                  Blog
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to="/contact"
                  className="link"
                  data-filter="content-contact"
                >
                  <i className="fas fa-envelope"></i> <br />
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
