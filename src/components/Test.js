import React from "react";
import { ReactDOM } from "react";

class Test extends React.Component {
    state = { 

      
    
     } 

     fruits = [
        {
            name : 'jablko' ,
            price : 4.04
        },

        {
            name : 'pomarancz' ,
            price : 3.04
        }
     ]
    render() { 

        const owoce = this.fruits.map( (item,index) => {

        return <p>{item.name} {item.price}</p>
            
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