import React from 'react'

import  './Header.css'
import image from '../img/logo.png'



class Header extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <div className='header-logo'>
                    <a href='/'>
                        <img src={image} alt='a-logo' className='logo'></img>
                    </a>
                    </div>

                <nav className='header-nav-right'>
                    <ul>Menu
                        <li>About Me</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>

                </nav>

                <div className='header-main'>
                    <h1>Hello , and Welcome !</h1>
                    <h2> This website is my second project , I hope se you enyoi it ! <br></br>
                        Search , Add and teaste with flavour with smile 
                    </h2>
                    <button>Join To Me</button>
                    <button> Teaste My Recipe</button>
                </div>

                
            </div>
        );
    }
}
 
export default Header;