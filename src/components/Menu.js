import React from 'react'

import './Menu.css'
import image from '../img/logo.png'

class Menu extends React.Component {


    state = {  } 
    render() { 
        return (
            <div className='menu-main'>
                
                <div className='menu-card'>

                <div className='a'>1
                    <h1>Fresh content</h1>
                </div>
                
                <div className='b'>2
                    <h1>Mix flavour</h1>
                </div>
                
                <div className='c'>3
                    <h1>Exaited teaste and smell</h1>
                </div>

                </div>
                
            </div>
        );
    }
}
 
export default Menu;