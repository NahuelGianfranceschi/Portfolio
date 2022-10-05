import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/WelcomeSlide.css'
import FotoCV from '../images/FotoCV.jpg'
//import fondoCyber from '..images/fondoCyber.gif'


export const Welcome = () =>{


return(

<div className='landing'>
    <h2 className='landingText'>Welcome to my Website!</h2>
    <h2 className='landingText'>Front-End Developer Jr</h2>
    <img className='retrato' src={FotoCV} alt="" />
          
          
</div>

);

}