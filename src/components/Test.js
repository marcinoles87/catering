import React from "react";
import { ReactDOM } from "react";
import ImageGallery from 'react-image-gallery'

import imgTest from '../img/salmon.jpg'
import imgTest2 from '../img/salad.jpg'




const Test = () => {
 

     const fruits = [
        { id:1, thumbnail : imgTest },
        { id:2, thumbnail : imgTest2 },

      
     ]

        return (
          <div className="gallery-card">
            {fruits.map( (item) => { 
                
                return <img key={item.id} src={item.thumbnail} className='gallery-img'></img>
                    } )}
            </div>
        );
    
}
 
export default Test;