import React from 'react';
import './App.css';

function App() {
  const [text, setText] = React.useState('');
  const [timeRemaining, setTimeRemaining] = React.useState(5);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);

  const calculateWordCount = text => text ? text.trim().split(" ").length : 0;

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };
  const handleClick = () => setIsTimeRunning(true);

  React.useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
      }, 1000);
    } else if (!timeRemaining) { setIsTimeRunning(false); }
    console.log({ isTimeRunning });
  }, [timeRemaining, isTimeRunning]);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word count: {calculateWordCount(text)}</h1>
    </div>
  );
}

export { App };
