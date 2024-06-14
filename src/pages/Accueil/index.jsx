import { OverlayImage } from "../../components/OverlayImage";
import { ApartmentList } from "../../components/ApartmentList";
import img_sea from "../../assets/img-sea.png";

export function Accueil() {
  return (
    <>
      <OverlayImage
        imgSource={img_sea}
        imgText={"Chez vous, "}
        imgDescription={"Picture of sea"}
      ></OverlayImage>
      <ApartmentList></ApartmentList>
    </>
  );
}
