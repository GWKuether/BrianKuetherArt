import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    function handleImageClick(image){
        let imageID = {
            imageID : image.id,
            imageTitle: image.title,
            imageLocation: image.image,
            imagePrice: image.price,
            imageSold: image.sold,
            imageSize: image.size
          };
        navigate("/piece", { state: imageID });
    }


    function displayArt(){
        let results = artWork.map((image) =>{
            return <img style={{height: "10em", width:"10em"}} onClick={() => handleImageClick(image)} src={image.image} alt="art" ></img>
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