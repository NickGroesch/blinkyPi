
import './App.css';
import ControlStick from "./components/ControlStick"
import RoboViewPort from "./components/RoboViewPort"
import Mask from "./components/Mask"
// INSPIRATION https://www.polygon.com/a/ps4-review/ps4-review/

function App() {
  // window.ScreenOrientation.lock("landscape")//ICEBOX: look into npm:express-device
  const props = { chirality: 'left' }
  return (
    <div className="App">
      <Mask />
      <iframe
        style={{
          width: "60%",
          left: "20%",
          height: "80%",
          top: "20%",
          position: 'fixed',
          // zIndex: 0,
          zIndex: 2,
        }}
        sandbox=""
        src={process.env.REACT_APP_ATOMIC_EMITTER_IP}
      />

    </div>
  );
}

export default App;
