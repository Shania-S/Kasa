import "./Footer.scss";
import kasalogofooter from "./../../assets/kasa-logo-footer.png";

export function Footer() {
  return (
    <div className="kasa-footer">
      <img
        src={kasalogofooter}
        alt="logo of kasa"
        className="logo-kasa-footer"
      />
      <span className="text-footer">
        © 2024 Kasa. All <br className="responsive"></br>rights reserved
      </span>
    </div>
  );
}
