import React from 'react';
import { useNavigate } from 'react-router-dom';

function Mqtt() {
    const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h1>Mqtt</h1>
      <p>This is a new page in the Electron React Boilerplate app.</p>
      <button onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default Mqtt;
