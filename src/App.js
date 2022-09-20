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
          offset={0}
          speed={1}
          factor={2}
          style={{
            // backgroundImage: `url(${moon})`,
            backgroundColor: 'black',
            backgroundSize: 'cover',
          }}
        />

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
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
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
