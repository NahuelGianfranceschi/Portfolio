import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./Styles/AboutSlide.css";
{/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} /> */}

export const About = () =>{


return(

<div className='presentation'>
<h2 className='aboutText'>About me</h2>
          <h3 className='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          <h3 className='aboutText'>Tools I use</h3>
  
<FontAwesomeIcon icon={("fa-brands fa-linkedin")} />
</div>
);

}

