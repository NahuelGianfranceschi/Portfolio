import './App.css';
import { About } from './components/Item/AboutSlide';
import { Projects } from './components/Item/ProjectContainer';
import { Welcome } from './components/Item/WelcomeSlide';
import { Contact } from './components/Item/ContactSlide';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navibar from './components/Navbar/Nav';




function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
      <Navibar/>
      <Parallax className='parallaxmedia' id='WelcomeLayer' pages={4} 
      >
        <Welcome/>

        <ParallaxLayer id='AboutLayer'
          offset={1}
          speed={1}
          factor={2}
          style={{
          
            
          }}
          ><About/>
          </ParallaxLayer>

        <ParallaxLayer id='ProjectsLayer'
          offset={2}
          speed={2}
          factor={4}
          
        ><h2 className='paraltext'>My Projects</h2>
        <Projects/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={1}
          factor={3}
          //sticky={{ start: 0.9, end: 2.5 }}
         
        >
          {/* <img src={cat} /> */}
        </ParallaxLayer>

        <ParallaxLayer  
          offset={0.2}
          speed={0.05}
          // onClick={() => ref.current.scrollTo(3)}
        >
          
        </ParallaxLayer>

        <ParallaxLayer id='ContactLayer'
          offset={3}
          speed={2}
          // onClick={() => ref.current.scrollTo(0)}
        >
          <h2 id='contactText' className='paraltext'>Contact Info.</h2>
          <Contact/>
        </ParallaxLayer>
    
      </Parallax>
      </BrowserRouter>
      
    </div>
    
      
  );
}

export default App;
