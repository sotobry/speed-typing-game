import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('');

  const calculateWordCount = text => text ? text.trim().split(" ").length : 0;

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  console.log({ text });
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: 00:00</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: {calculateWordCount(text)}</h1>
    </div>
  );
}

export { App };
