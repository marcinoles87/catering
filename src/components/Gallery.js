import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";


import '../components/gallery.css'
import image from '../img/salmon.jpg'

import Image from "./Image";





class Gallery extends React.Component {

    


    state = { 

        slide : 1,
        
     }



    

    handleOnClick = () => {
    

       
        const imageBig = document.querySelector('.gallery-img')
        
        console.log(imageBig)
        imageBig.classList.toggle('imageBig')
    }
    render() { 

      

       
        return (
            <div className="gallery-wrapper">
                <h1 className="gallery-head"> Gallery of our Products</h1>
                    <Image></Image>
            </div>
        );
    }
}
 
export default Gallery;