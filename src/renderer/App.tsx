import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import './App.css';
import NewPage from './pages/NewPage';
import Mqtt from './pages/Mqtt';

function Hello() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1> 
      <h2>TestF23</h2>
      <button onClick={() => navigate('/new')}>
        Go to New Page
      </button>
            <button onClick={() => navigate('/mqtt')}>
        Go to MQTT Page
      </button>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/mqtt" element={<Mqtt />} />
      </Routes>
    </Router>
  );
}
