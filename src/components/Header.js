import React from 'react'
import  './Header.css'


class Header extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <div className='header-logo'>
                    <a href='/'>
                        <img src='../img/logo.png' alt='logo'></img>
                    </a>

                <nav className='header-nav-right'>
                    <ul>Menu
                        <li>About Me</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>

                </nav>

                <div className='header-main'>
                    <h1>Hello and Welcome !</h1>
                    <h4> This website is my second project , I hope se you enyoi it !
                        Search , Add and teaste with flavour with smile 
                    </h4>
                </div>

                </div>
            </div>
        );
    }
}
 
export default Header;