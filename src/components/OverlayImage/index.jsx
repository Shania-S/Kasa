import "./OverlayImage.scss";

export function OverlayImage({ imgSource, imgText, imgDescription }) {
  return (
    <div className="overlayimg-container">
      <img
        src={imgSource}
        alt={imgDescription}
        // className="img-overlayed img-overlayed-sea"
        className={`img-overlayed  ${
          imgText ? "img-overlayed-sea" : "img-overlayed-mountains"
        }`}
      />
      <span className={`${imgText && "text-overlayed"}`}>{imgText}</span>
    </div>
  );
}
