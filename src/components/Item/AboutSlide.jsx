import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/AboutSlide.css";
import HTML from '../images/HTML.png'
import CSS from '../images/CSS.png'
import JS from '../images/JS.png'
import react from '../images/react.png'
import Node from '../images/Node.png'
import Sass from '../images/Sass.png'
import Git from '../images/Git.png'

export const About = () =>{


return(

<div className='presentation'>
<h2 className='aboutText'>About me</h2>
          <h3 className='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          <h3 className='aboutText'>Tools I use</h3>
          <div className='skillContainer'>
          <img className='skills' src={HTML} alt="HTML5-logo" />
          <img className='skills' src={CSS} alt="CSS-logo" />
          <img className='skills' src={JS} alt="JS-logo" />
          <img className='skills' src={react} alt="react-logo" />
          <img id='nodeimg' className='skills' src={Node} alt="Node-logo" />
          <img className='skills' src={Sass} alt="Sass-logo" />
          <img className='skills' src={Git} alt="Git-Logo" />
          
          </div>
</div>
);

}

