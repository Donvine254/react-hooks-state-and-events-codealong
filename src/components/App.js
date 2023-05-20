import React,{useState} from "react";
import Toggle from "./Toggle";
import ControlledToggle from "./ControlledToggle";

function App() {
  const [isOn, setIsOn] = useState(false);
  function handleControlledToggle(){
    setIsOn((isOn)=>!isOn);
  };

  return (
    <div>
      <h3>Toggle is {isOn ? 'ON' : 'OFF'}</h3>
      <Toggle />
      <ControlledToggle handleToggle={handleControlledToggle} isOn={isOn}/>
    </div>
  );
}

export default App;
