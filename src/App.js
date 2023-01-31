import React from 'react'

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Info from './components/Info.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


import './App.css';




class App extends React.Component {
  state = {  } 
  render() { 
    return (
      <div>
    <Header></Header>
    <Menu></Menu>
    <Info></Info>
    <Gallery></Gallery>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    );
  }
}
 
export default App;

