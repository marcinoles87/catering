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
        return <li key={item.price}>{item.name} -cena : {item.price} {item.img}</li>
            
        })

        console.log(owoce)
        console.log(this.fruits)
        return (
            <div>
                {owoce}
            </div>
            
        );
    }
}
 
export default Test;