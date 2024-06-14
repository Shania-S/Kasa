import { apartmentsList } from "../../data/apartmentsList";
import { ApartmentItem } from "../ApartmentItem";
import "./ApartmentList.scss";

export function ApartmentList() {
  return (
    <div>
      <ul className="kasa-apartment-list">
        {apartmentsList.map(
          ({
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
          }) => (
            <div key={id} className="apartment-item-container">
              <ApartmentItem
                id={id}
                title={title}
                cover={cover}
                pictures={pictures}
                description={description}
                host={host}
                rating={rating}
                location={location}
                equipments={equipments}
                tags={tags}
              />
            </div>
          )
        )}
      </ul>
    </div>
  );
}
