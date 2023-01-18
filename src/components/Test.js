import React from "react";
import { ReactDOM } from "react";
import ImageGallery from 'react-image-gallery'

import imgTest from '../img/salmon.jpg'




const Test = () => {
 

     const fruits = [
        {
            id:1,
            orginal: '../img/salmon.jpg',
            thumbnail : imgTest
           
            
        },

        {
            id:2,
            orginal: '../img/salmon.jpg',
            thumbnail :  imgTest

            
        }
     ]

        return (
          <div>
            {fruits.map( (area) => { 
                return <img key={area.id} src={area.thumbnail}></img>
                    
                 } )}
            </div>
        );
    
}
 
export default Test;