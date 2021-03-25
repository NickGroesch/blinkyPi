
import './App.css';
import ControlStick from "./components/ControlStick"
import RoboViewPort from "./components/RoboViewPort"
// INSPIRATION https://www.polygon.com/a/ps4-review/ps4-review/

function App() {
  const props = { chirality: 'left' }
  return (
    <div className="App">



      <ControlStick className="sized" chirality="left" />
      <RoboViewPort />
      <ControlStick className="sized" chirality="right" />


    </div>
  );
}

export default App;
