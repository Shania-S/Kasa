import { OverlayImage } from "../../components/OverlayImage";
import { Collapse } from "../../components/Collapse";
import "./Apropos.scss";
import img_mountains from "../../assets/img-mountains.png";
import { aboutList } from "../../data/aboutList";

export function Apropos() {
  return (
    <>
      <OverlayImage
        imgSource={img_mountains}
        imgText={""}
        imgDescription={"Picture of moutains"}
      ></OverlayImage>
      <ul className="about-content">
        {aboutList.map(({ title, content }, index) => (
          <div key={index} className="">
            <Collapse
              header={title}
              content={content}
              classCollapse={""}
              classContent={"about-content-list"}
            />
          </div>
        ))}
      </ul>
    </>
  );
}
