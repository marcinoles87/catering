import React from "react";

import '../components/gallery.css'
import image from '../img/salmon.jpg'

class Gallery extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="gallery-wrapper">
                <h1 className="gallery-head"> Gallery of our Products</h1>
                <div className="gallery">
                <div className="gallery-card"><img src={image} alt='salmon' className="gallery-img"></img></div>
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