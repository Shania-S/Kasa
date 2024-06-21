import { NavLink } from "react-router-dom";
import "./error-page.scss";

export function ErrorPage() {
  return (
    <div className="error-msg">
      <span className="four-error">404</span>
      <span className="txt-error">
        Oups! La page que<br className="responsive"></br> vous demandez n'existe
        pas.
      </span>
      <p>
        <NavLink className="returnHome-link">
          Retourner sur la page d’accueil
        </NavLink>
      </p>
    </div>
  );
}
