import React from "react";
import { ReactDOM } from "react";

import imgTest from '../img/salmon.jpg'

class Test extends React.Component {
    state = { 

      
    
     } 

     fruits = [
        {
            name : 'jablko' ,
            price : 4.04 ,
            img : {imgTest}
        },

        {
            name : 'pomarancz' ,
            price : 3.04 ,
            img : {imgTest}
        }
     ]
    render() { 

        const owoce = this.fruits.map( (item) => {

         <li key={item.price}>{item.name} -cena : {item.price}
        <p>{item.img}</p></li> 
        
            
        })

        console.log(owoce)
        return (
            <div>
                {owoce}
            </div>
            
        );
    }
}
 
export default Test;