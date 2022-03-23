import logo from './logo.svg';
import './App.css';
import OpenTabs from './components/openTabs';
import { useEffect } from 'react';

function App() {
  
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OpenTabs />
        <p>
        Choose what you want most, over what you want now.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
