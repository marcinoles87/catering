import React from "react";
import { useState } from "react";

import '../components/gallery.css'
import image from '../img/salmon.jpg'

class Gallery extends React.Component {

    


    state = {  } 

    const [isActive , setIsActive] = useState('ss');

    handleOnClick = () => {

        console.log('dziala')
        const imageBig = document.getElementsByClassName('gallery-img')
        console.log(imageBig)
      

    }
    render() { 
        return (
            <div className="gallery-wrapper">
                <h1 className="gallery-head"> Gallery of our Products</h1>
                <div className="gallery">
                <div className="gallery-card"><img src={image} onClick={this.handleOnClick} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} alt='salmon' className="gallery-img"></img></div>
               
                </div>
            </div>
        );
    }
}
 
export default Gallery;