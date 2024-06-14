import "./Banner.scss";
import { NavLink } from "react-router-dom";
import kasalogobanner from "./../../assets/Kasa-logo.png";

export function Banner({ clickedLink, setClickedLink }) {
  return (
    <div className="kasa-banner">
      <img className="kasa-logo-banner" src={kasalogobanner} />
      <ul className="kasa-nav__list">
        <li className="kasa-nav__item">
          <NavLink
            to="/"
            className="nav__link"
            onClick={() => setClickedLink("Accueil")}
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "1px solid black",
                  }
                : {}
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            className="nav__link"
            onClick={() => setClickedLink("Apropos")}
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "1px solid black",
                  }
                : {}
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
