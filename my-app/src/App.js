import React from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 5;
  const textareaRef = React.useRef(null);

  const [text, setText] = React.useState('');
  const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);
  const [wordCount, setWordCount] = React.useState(0);

  const calculateWordCount = text => text ? text.split(" ").filter(word => word !== '').length : 0;

  const handleChange = e => {
    const { value } = e.target;
    setText(value);
  };
  const startGame = () => {
    setTimeRemaining(STARTING_TIME);
    setIsTimeRunning(true);
    setText('');
    console.log(textareaRef);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }
  const endGame = () => {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  React.useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
      }, 1000);
    }
    else if (!timeRemaining) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea ref={textareaRef} disabled={!isTimeRunning} value={text} onChange={handleChange} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start</button>
      <h1>Word count: {!timeRemaining ? wordCount : '???'}</h1>
    </div>
  );
}

export { App };
