import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/billGates.jpg" alt="profil-pic" />
          <h3>Guillaume L'Hullier</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <i className="fab fa-linkedin"></i>
            {/* <a
              href="https:www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
  </a>*/}
          </li>
          <li>
            <i className="fab fa-github"></i>
            {/* <a
              href="https:www.github.com"              
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
</a>*/}
          </li>
          <li>
            <i className="fab fa-twitter"></i>
            {/* <a
              href="https:www.twitter.com"              
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
</a>*/}
          </li>
          <li>
            <i className="fab fa-codepen"></i>
            {/*<a
              href="https:WwW.codepen.io"              
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
</a>*/}
          </li>
        </ul>
        <div className="signature">
          <p>Guillaume L'Hullier-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
