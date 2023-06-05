import { useLocation } from "react-router-dom";
import "./PiecePage.css"

const PiecePage = (props) => {
  const state = useLocation();

  const piece = state.state;

  const height = piece.imageSize.substring(0, 2) + "em";
  const width = piece.imageSize.substring(5, 7) + "em";

  function checkSold() {
    if (piece.imageSold === true) {
      return <h3>SOLD</h3>;
    } else {
      return <h3>{piece.imagePrice}</h3>;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>{piece.imageTitle}</h1>
      <img className="piece-box"
        style={{ height: `${height}`, width: `${width}`, margin: "1em", }}
        src={piece.imageLocation}
        alt="Piece"
      ></img>
      <h3>{piece.imageSize}</h3>
      {checkSold()}
    </div>
  );
};

export default PiecePage;
