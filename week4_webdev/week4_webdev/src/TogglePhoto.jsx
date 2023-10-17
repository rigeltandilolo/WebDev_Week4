import React, { useState } from 'react';

const TogglePhoto = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Photo</button>
      {isVisible && (
        <div>
          <img
            src= {"./src/Rigel Foto.jpg"}
            alt="Sample"
            style={{ display: 'block', margin: '10px auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default TogglePhoto;