import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px' }}>
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '10px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onClick={handleToggle}
      >
        <div>{title}</div>
        <div>{isCollapsed ? '+' : '-'}</div>
      </div>
      {!isCollapsed && (
        <div style={{ padding: '10px' }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
