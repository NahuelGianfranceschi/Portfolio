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
          <h3 className='aboutText'>Jr. Front-End Developer and student of Web Development Technical Degree with experience in
assembling and prototyping web pages. I am interested in everything related to the IT world (object-oriented programming, Machine learning, AI) and I look to be able to learn and perform in a position
that allows me to grow in this field.</h3>
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

