import React from 'react'

import './Menu.css'
import image from '../img/logo.png'


class Menu extends React.Component {


    state = {  } 
    render() { 
        return (
            <div className='menu-main'>
                
                <div className='menu-card'>

                <div className='a'>
                    <h1>Fresh content</h1>

                    
                    
                </div>
                
                <div className='b'>
                    <h1>Mix flavour</h1>
                    
                </div>
                
                <div className='c'>
                    <h1>Exaited teaste and smell</h1>
                    
                </div>

                </div>
                
            </div>
        );
    }
}
 
export default Menu;