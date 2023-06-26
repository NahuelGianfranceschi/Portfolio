import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/ProjectsSlide.css';
import Libreta from '../images/Libreta.png';
import GoT from '../images/GoT.png';
import Tailored from '../images/Tailored.png';
import CristalesSaenz from '../images/CristalesSaenz.png';

export const Projects = () =>{


    return(
        
    <div className='contenedorT'>
        
    <div>
    <a href="https://github.com/NahuelGianfranceschi/got-libros"><img className='trabajos' src={GoT} alt="" /></a>
        <h2 className='textoT'>GoT Libros</h2>
    </div>

    <div>
    <a href="https://github.com/NahuelGianfranceschi/Agenda-MI-JavaScript"><img className='trabajos' src={Libreta} alt="" /></a>
        <h2 className='textoT'>Libreta Mi</h2>
    </div>

    <div>
        <a href="https://github.com/NahuelGianfranceschi/Tailored-React"><img className='trabajos' src={Tailored} alt="" /></a>
        <h2 className='textoT'>Tailored</h2>
    </div>

    <div>
    <a href="https://github.com/NahuelGianfranceschi/CristalesSaenz"><img className='trabajos' src={CristalesSaenz} alt="" /></a>
        <h2 className='textoT'>CristalesSaenz</h2>
    </div>
        
    </div>
    );
    
    }
    