import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea name='' value='' />
      <h4>Time remaining: 00:00</h4>
      <h1>Word count: 0</h1>
      <button>Start</button>
    </div>
  );
}

export { App };
