import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewPage() {
    const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h1>New Page</h1>
      <h2>Test alfa 2</h2>
      <p>This is a new page in the Electron React Boilerplate app.</p>
      <button onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default NewPage;
