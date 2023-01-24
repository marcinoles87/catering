import React, { useState } from "react";
import { ReactDOM } from "react";


import img1 from '../img/salmon.jpg'
import img2 from '../img/salad.jpg'
import img3 from '../img/breakfast.jpg'
import img4 from '../img/dinner.jpg'
import img5 from '../img/salad.jpg'

const Image = () => {
 
   const [active,setActive] = useState(false);

     const fruits = [
        { id:1, thumbnail : img1 , info:'salmon'},
        { id:2, thumbnail : img2 , info:'salad'},
        { id:3, thumbnail : img3 , info:'breakfast'},
        { id:4, thumbnail : img4 , info:'dinner'},
        { id:5, thumbnail : img5 , info:'salad2'},
        { id:6, thumbnail : img5 , info:'salad2'},

      
     ]

     const handleOnClick = (e) =>{
      // e.preventDefault()
      console.log(e)
      alert('dziala',e)
      
      const i = document.querySelector('.gallery-img')
      i.classList.toggle('imageBig')
      
      
     }

        return (
          
          <div className="gallery" >
            {fruits.map( (item) => { 
                
                return <div className="gallery-card" key={item.id}>

                    {/* <a href="/" > */}
                       <img  src={item.thumbnail} onClick={ () => handleOnClick(item.id)} className='gallery-img' alt={item.info}></img>
                      
                    {/* </a> */}
                      </div>
                    } )}
            </div >
        );
    
}
 
export default Image;