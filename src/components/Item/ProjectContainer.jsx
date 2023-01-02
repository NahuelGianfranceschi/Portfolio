import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/ProjectsSlide.css';
import Libreta from '../images/Libreta.png'
import GoT from '../images/GoT.png'

export const Projects = () =>{


    return(
        
    <div className='contenedorT'>
        
    <div>
        <img className='trabajos' src={GoT} alt="" />
        <h2 className='textoT'>GoT Libros</h2>
    </div>

    <div>
        <img className='trabajos' src={Libreta} alt="" />
        <h2 className='textoT'>Libreta Mi</h2>
    </div>

    <div>
        <img className='trabajos' src="" alt="" />
        <h2 className='textoT'>Tailored</h2>
    </div>
    
    </div>
    );
    
    }
    