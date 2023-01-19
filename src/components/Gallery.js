import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";


import '../components/gallery.css'
import image from '../img/salmon.jpg'

import Test from "./Test";





class Gallery extends React.Component {

    


    state = { 

        slide : 1,
        
     }

    //  project = [
    //     {
    //         photo:{image} ,
    //         text : 'salmon'
    //     },

    //     {
    //         photo:{image2} ,
    //         text : 'breakfast'
    //     },

        
    //     {
    //         photo:{image3} ,
    //         text : 'breakfast'
    //     },

        
    //     {
    //         photo:{image4} ,
    //         text : 'breakfast'
    //     }


    //  ]

    

    handleOnClick = () => {
    
        

       
        const imageBig = document.querySelector('.gallery-img')
        
        console.log(imageBig)
        imageBig.classList.toggle('imageBig')
       
       

      
       
        
      

    }
    render() { 

        const showNam = true
        const itemList = ["kev" , "lev" , "van"];
        const images  = itemList.map( (item,index) => 
            <li key={index}>{item}</li>
        )

      

       
        console.log(images);
    

        return (
            <div className="gallery-wrapper">
                <h1 className="gallery-head"> Gallery of our Products</h1>
                <div className="gallery">
                
                <Test></Test>
             
                </div>
            </div>
        );
    }
}
 
export default Gallery;