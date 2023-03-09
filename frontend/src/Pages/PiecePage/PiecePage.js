import { useLocation } from "react-router-dom";

const PiecePage = (props) => {

    const state = useLocation();

    const piece = state.state

    function checkSold(){
         if (piece.imageSold === true){
            return <h3>SOLD</h3>
            }
            else{
                return <h3>{piece.imagePrice}</h3>
            }
        }


    return ( 
        <div>
        <h1>{piece.imageTitle}</h1>
        <img src={piece.imageLocation} alt="Piece"></img>
        <h3>{piece.imageSize}</h3>
        {checkSold()}
        </div>
     )
}
 
export default PiecePage;