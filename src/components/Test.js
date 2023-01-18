import React from "react";
import { ReactDOM } from "react";
import ImageGallery from 'react-image-gallery'

import imgTest from '../img/salmon.jpg'




class Test extends React.Component {
    state = { 

    
     } 

     fruits = [
        {
            id:1,
            orginal: '../img/salmon.jpg',
            thumbnail :  './img/salmon.jpg'
           
            
        },

        {
           id:2,
            orginal: '../img/salmon.jpg',
            thumbnail :  './img/salmon.jpg'
            
        }
     ]
    render() { 

        const owoce = this.fruits.map( ({item}) => { 
        return <img key={item.id} src={requestAnimationFrame(item.thumbnail)}></img>
            
         } )

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