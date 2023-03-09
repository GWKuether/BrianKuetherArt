import { useLocation } from "react-router-dom";

const PiecePage = (props) => {

    const state = useLocation();

    const piece = state.state

    console.log(piece)


    return ( 
        <div>
        <p>This is where I'm going to display the individual art piece</p>
        <img src={piece.imageLocation} alt="Piece"></img>
        </div>

     );
}
 
export default PiecePage;