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


    function displayArt(){
        let results = artWork.map((image) =>{
            return <img style={{height: "10em", width:"10em"}} src={image.image} alt="art" ></img>
        })
        return results
    }



    return ( 
        <div>
        <p>This is the originals page</p>
        {displayArt()}
        </div>
     );
}
 
export default OriginalsPage;