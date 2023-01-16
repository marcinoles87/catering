import React from "react";
import { ReactDOM } from "react";
import ImageGallery from 'react-image-gallery'

import imgTest from '../img/salmon.jpg'




class Test extends React.Component {
    state = { 

    
     } 

     fruits = [
        {
            orginal: '../img/salmon.jpg',
            thumbnail :  './img/salmon.jpg'
           
            
        },

        {
           
            orginal: '../img/salmon.jpg',
            thumbnail :  './img/salmon.jpg'
            
        }
     ]
    render() { 

        const owoce = this.fruits.map( ({name,price}) => { 
        return <li key={price}>{name} -cena : {price} i </li>
            
        })

        console.log(owoce)
        console.log(this.fruits)
        return (
            <div>
                {owoce}
                <ImageGallery items={this.fruits}></ImageGallery>
            </div>
            
        );
    }
}
 
export default Test;