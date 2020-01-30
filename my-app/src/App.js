import React from 'react';
import './App.css';
import { useTypingGame } from './useTypingGame';

function TypingGameApp() {
  const { textareaRef, text, timeRemaining, isTimeRunning, wordCount, handleChange, startGame } = useTypingGame(15);

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

export { TypingGameApp };
