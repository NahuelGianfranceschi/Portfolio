import './App.css';
import { About } from './components/Item/AboutSlide';
import { Proyects } from './components/Item/ProyectContainer';
import { Welcome } from './components/Item/WelcomeSlide';
import { Contact } from './components/Item/ContactSlide';
import Navbar from './components/Navbar/Nav'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



function App() {

  return (
    <div className="App">
      <Navbar sticky="top"/>
      <Parallax id='WelcomeLayer' pages={4} 
      >
        <Welcome/>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer id='AboutLayer'
          offset={1}
          speed={1}
          factor={2}
          style={{
          
            
          }}
          ><About/>
          </ParallaxLayer>

        <ParallaxLayer id='ProyectsLayer'
          offset={2}
          speed={1}
          factor={4}
          
        ><h2 className='paraltext'>My Projects</h2>
        <Proyects/>
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
          {/* <h1>Welcome to my website!</h1>
          <h3> Front-End Developer Jr</h3> */}
        </ParallaxLayer>

        <ParallaxLayer id='ContactLayer'
          offset={3}
          speed={2}
          // onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='paraltext'>Contact Info.</h2>
          <Contact/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
