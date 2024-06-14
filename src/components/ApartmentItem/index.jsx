import "./ApartmentItem.scss";
import { Link } from "react-router-dom";

export function ApartmentItem({
  id,
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <li key={id} className="kasa-apartment-item">
      <Link to={`/apartment/${id}`}>
        <img
          src={cover}
          className="kasa-apartment-item-cover"
          alt={`${title} cover`}
        />
      </Link>
      <span className="kasa-apartment-item-title">{title}</span>
    </li>
  );
}
