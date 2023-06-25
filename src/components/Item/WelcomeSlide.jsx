import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/WelcomeSlide.css'
import FotoCV from '../images/FotoCV.jpg'
import LogoNG from '../images/LogoNG.png';


export const Welcome = () =>{


return(

<div className='landing'>
    <h2 className='landingText'>Nahuel Gianfranceschi</h2>
    <h2 className='landingText'>Front-End Developer Jr</h2>

    <div className='landingimgs'>
    <img className='logolanding' src={LogoNG} alt="" />
    <img className='retrato' src={FotoCV} alt="" />
    </div>
    

          
          
</div>

);

}