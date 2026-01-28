import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

const PhotoAlbum = () => {
   
  const [gallery, setGallery] = useState([])
   
    

  const fetchData = () => {
    // Request for images tagged xmas       
    axios.get(`https://res.cloudinary.com/${process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/list/devfestlondon.json`)
        .then(res => {
            // console.log(res.data.resources);
            setGallery(res.data.resources);
        });
} 
useEffect(() => {
    fetchData()

  }, [])
    return (
        <div className="main">
            <h1>Photo Album</h1>
            <div className="gallery">
                <CloudinaryContext cloudName={process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}>
                    {
                        gallery.map(data => {
                            return (
                                <div className="responsive" key={data.public_id}>
                                    <div className="img">
                                        <a target="_blank" rel="noreferrer" href={`https://res.cloudinary.com/${process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1697634463/${data.public_id}.${data.format}`}>
                                            <Image publicId={data.public_id}>
                                                <Transformation
                                                    crop="scale"
                                                    width="300"
                                                    height="200"
                                                    dpr="auto"
                                                    responsive_placeholder="blank"
                                                />
                                            </Image>
                                        </a>
                                        <div className="desc"> {data.public_id.substring('devfestlondon/'.length)}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </CloudinaryContext>
                <div className="clearfix"></div>
            </div>
        </div>

    ); 
    
                  };

export default PhotoAlbum;