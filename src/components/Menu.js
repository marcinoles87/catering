import React from 'react'

import './Menu.css'
import image from '../img/ZD1.PNG'


class Menu extends React.Component {


    state = {  } 
    render() { 
        return (
        <div className='menu-main'>
                
            <div className='menu-card'>

                <div className='a'>
                    <h1>Fresh content</h1>
                        <img src={image} className='menu-img'></img>
                    <p>Tease people you know well 
                        because you are more likely to be in 
                        tune with what is sensitive to them. Certain topics should 
                        be off limits including but not limited to politics, religion, 
                        race, gender, cultural belief </p>

                    
                    
                </div>
                
                <div className='b'>
                    <h1>Mix flavour</h1>
                        <img src={image} className='menu-img'></img>
                    <p>Tease people you know well 
                        because you are more likely to be in 
                        tune with what is sensitive to them. Certain topics should 
                        be off limits including but not limited to politics, religion, 
                        race, gender, cultural belief </p>
                    
                </div>
                
                <div className='c'>
                    <h1>Exaited teaste and smell</h1>
                        <img src={image} className='menu-img'></img>
                    <p>Tease people you know well 
                        because you are more likely to be in 
                        tune with what is sensitive to them. Certain topics should 
                        be off limits including but not limited to politics, religion, 
                        race, gender, cultural belief </p>
                    
                </div>

            </div>
                
            </div>
        );
    }
}
 
export default Menu;