import { apartmentsList } from "../../data/apartmentsList";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Carousel } from "../../components/Carousel";
import { Collapse } from "../../components/Collapse";
import "./ViewApartment.scss";

export function ViewApartment() {
  const { apartmentId } = useParams();
  const apartmentInfo = apartmentsList.filter((item) => item.id == apartmentId);
  const numbers = 5;
  const ratings = [];

  for (let i = 0; i < numbers; i++) {
    ratings.push(i);
  }
  // console.log(Object.keys(apartmentsList[0]));

  return (
    <div>
      {apartmentInfo.map(
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
          <div key={id}>
            <section className="carousel-images">
              <Carousel data={pictures} title={title} />
            </section>
            <section className="general-info">
              <div className="left-side">
                <div className="upper">
                  <h2>{title}</h2>
                  <h3>{location}</h3>
                </div>

                <div className="item-tags">
                  {tags.map((tag) => (
                    <span key={`${id + tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="right-side">
                <div className="host-info">
                  <span>{host.name}</span>
                  <img src={host.picture} alt="Picture of the host" />
                </div>
                <div className="item-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={`${id + index}`}
                      color={index < rating ? "#ff6060" : "gray"}
                      size={25}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className="collapsed-info">
              <Collapse
                header={"Description"}
                content={description}
                classCollapse={"descriptionCollapsed"}
                classContent={"apartmentContent"}
              />
              <Collapse
                header={"Équipements"}
                content={equipments}
                classCollapse={"equipmentsCollapsed"}
                classContent={"apartmentContent"}
              />
            </section>
          </div>
        )
      )}
    </div>
  );
}
