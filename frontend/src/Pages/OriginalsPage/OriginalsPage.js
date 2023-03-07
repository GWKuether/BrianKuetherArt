import React, { useEffect, useState } from "react";
import axios from "axios";


const OriginalsPage = (props) => {

    const [artWork, setArtWork] = useState([])

    useEffect(() => {
        fetchArtwork();
      }, []);

    const fetchArtwork = async () => {
        let response = await axios.get("http://127.0.0.1:8000/api/art")
        console.log(response.data)
        setArtWork(response.data)
    }



    return ( 
        <div>
        <p>This is the originals page</p>
        {/* <p>{artWork[0].image}</p> */}
        <img style={{height: "10em", width:"10em"}} src={artWork[1]?.image} alt="owls"></img>
        <img style={{height: "10em", width:"10em"}} src={artWork[0]?.image} alt="buffalo"></img>
        {/* <p>{artWork[0].price}</p> */}
        </div>
     );
}
 
export default OriginalsPage;