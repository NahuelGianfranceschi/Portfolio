import './App.css';
import Navbar from './components/Navbar/Nav'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  return (
    <div className="App">
      <Navbar sticky="top"/>
      <Parallax pages={4} >
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            // backgroundImage: `url(${moon})`,
            backgroundColor: 'black',
            backgroundSize: 'cover',
            
          }}
          ><h2 className='About'>About me</h2>
          <h3 className='About'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          <h3 className='About'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
          </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            // backgroundImage: `url(${land})`,
            backgroundColor: 'orange',
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          factor={3}
          //sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center',
          backgroundColor: 'pink' }}
        >
          {/* <img src={cat} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          // onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          // onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Contact Info.</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
