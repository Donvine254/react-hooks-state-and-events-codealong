import React,{useState} from "react";

function Toggle() {
  const [isOn, setIsOn]=useState("false")
  function handleToggle(){
    setIsOn((isOn) => !isOn)
    console.log(isOn)
  }
  const color = !isOn ? "red" : "white"
  return <button onClick={handleToggle} style={{background:color}}>{!isOn?"ON":"OFF"}</button>;
}
//this toggle is uncontrolled by default
export default Toggle;
