import React from 'react'
import "../App.css"

const ImageList = ({images}) => {


    const preparedImageList = images.map(image =>{
        console.log(image);
        return(
            <div key={image.id}> 
            <img src={image.urls.small} alt=""/>
            <p>{image.color}</p>
            </div>
            
        )
    })

    return (
        <div className="image-list-container">
            {preparedImageList}
        </div>
    )
}

export default ImageList
