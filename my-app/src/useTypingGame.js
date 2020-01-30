import React from 'react';

const useTypingGame = (startingTime = 10) => {
	const textareaRef = React.useRef(null);

	const [text, setText] = React.useState('');
	const [timeRemaining, setTimeRemaining] = React.useState(startingTime);
	const [isTimeRunning, setIsTimeRunning] = React.useState(false);
	const [wordCount, setWordCount] = React.useState(0);

	const calculateWordCount = text => text ? text.split(" ").filter(word => word !== '').length : 0;

	const handleChange = e => {
		const { value } = e.target;
		setText(value);
	};
	const startGame = () => {
		setTimeRemaining(startingTime);
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

	return { textareaRef, text, timeRemaining, isTimeRunning, wordCount, handleChange, startGame };
};

export { useTypingGame };