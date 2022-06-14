import React, { useState } from 'react';
import '../assets/scss/ToggleBox.scss';

const ToggleBox = ({ value = true, onChange }) => {
  const [toggle, setToggle] = useState(value);
  const handleToggle = () => {
    onChange();
    setToggle(!toggle);
  }
  return (
    <div className={`togglebox-container ${value && `active`}`} onClick={handleToggle} onselectionstart="return false">
      <div className="tooglebox-dot" />
    </div>
  )
}

export default ToggleBox;