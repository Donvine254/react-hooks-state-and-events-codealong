import React from 'react'

function ControlledToggle({isOn, handleToggle}) {
const color = isOn ? 'green' : 'white';
  return (
    <button onClick={handleToggle} style={{ background: color }}>
    {isOn ? 'ON' : 'OFF'}
  </button>
  );
}
//this toggle is controlled by the parent element
export default ControlledToggle
