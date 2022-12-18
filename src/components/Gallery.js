import React from "react";

import '../components/gallery.css'
import image from '../img/logo.png'

class Gallery extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="gallery-wrapper">
                <h1 className="gallery-head"> Gallery of our Products</h1>
                <div className="gallery">
                <div className="gallery-card">1</div>
                <div className="gallery-card">2</div>
                <div className="gallery-card">3</div>
                <div className="gallery-card">4</div>
                <div className="gallery-card">5</div>
                <div className="gallery-card">6</div>
                </div>
            </div>
        );
    }
}
 
export default Gallery;