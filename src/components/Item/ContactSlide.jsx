import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/ContactSlide.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



export const Contact = () =>{


return(
        
<div className='contacto'>
    <div className='contacto1'>
<h3 className='contacttext'><FontAwesomeIcon className='contactIcons' icon={faEnvelope} />Nahuel.gianfra@gmail.com</h3>
<h3 className='contacttext'><FontAwesomeIcon className='contactIcons' icon={faMobileScreenButton} />+11 6975-5791</h3>
    </div>
    <div className='contacto2'>
<h3 className='contacttext'><FontAwesomeIcon className='contactIcons' icon={faLinkedin} />Nahuel Gianfranceschi</h3>
<h3 className='contacttext'><FontAwesomeIcon className='contactIcons' icon={faGithub} />NahuelGianfranceschi</h3>
    </div>
</div>

);
}