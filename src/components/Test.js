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
            price : 3.04
        }
     ]
    render() { 

        const owoce = this.fruits.map( (item,index) => {

        return <li key={item.price}>{item.name} -cena : {item.price} </li>
            
        })

        console.log(owoce)
        return (
            <div>test
                {owoce}
            </div>
            
        );
    }
}
 
export default Test;