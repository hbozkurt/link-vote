import React from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="text-center">
      <header className="min-h-screen bg-blue-900 flex flex-col items-center justify-center text-white text-lg">
        <img src={logo} className="h-64 pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
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
