import React from "react";
import { useState } from "react";

import '../components/gallery.css'
import image from '../img/salmon.jpg'
import image2 from '../img/breakfast.jpg'
import image3 from '../img/dinner.jpg'
import image4 from '../img/salad.jpg'


const Gal = () => {

    const showNam = true
    const names = ['kev' , 'lev' , 'van']
    const images  = names.map( name => {
        <li key={name}>{name}</li>
    })


    return (


        <div>
            {showNam ?<li>{images}</li> : 'brak wyswietlenia'}
            </div>
    )
}


class Gallery extends React.Component {

    


    state = { 
        
     }

     project = [
        {
            photo:{image} ,
            text : 'salmon'
        },

        {
            photo:{image2} ,
            text : 'breakfast'
        },

        
        {
            photo:{image3} ,
            text : 'breakfast'
        },

        
        {
            photo:{image4} ,
            text : 'breakfast'
        }


     ]

    

    handleOnClick = (e) => {
    
        console.log(e)
        const imageBig = document.querySelector('.gallery-img')
        console.log(imageBig)
        imageBig.classList.toggle('imageBig')

        this.project.map((e)=> {
            <div>{e.photo} {e.text}</div>
            
            console.log(e)

        })
       
        
      

    }
    render() { 
    

        return (
            <div className="gallery-wrapper">
                <h1 className="gallery-head"> Gallery of our Products</h1>
                <div className="gallery">
                <div className="gallery-card"><img src={image} onClick={this.handleOnClick} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image2} onClick={this.handleOnClick} alt='salad' className="gallery-img" ></img></div>
                <div className="gallery-card"><img src={image3} onClick={this.handleOnClick} alt='dinner' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image4} onClick={this.handleOnClick} alt='breakfast' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} onClick={this.handleOnClick} alt='salmon' className="gallery-img"></img></div>
                <div className="gallery-card"><img src={image} onClick={this.handleOnClick} alt='salmon' className="gallery-img"></img></div>
                <Gal />
             
                </div>
            </div>
        );
    }
}
 
export default Gallery;