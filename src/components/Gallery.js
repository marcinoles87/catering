import React from "react";

import '../components/gallery.css'

class Gallery extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="gallery-wrapper">
                <div className="gallery-card">1</div>
                <div className="gallery-card">2</div>
                <div className="gallery-card">3</div>
                <div className="gallery-card">4</div>
                <div className="gallery-card">5</div>
                <div className="gallery-card">6</div>
            </div>
        );
    }
}
 
export default Gallery;