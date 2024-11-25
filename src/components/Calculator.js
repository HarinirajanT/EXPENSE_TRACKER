import React, { useState } from 'react';
import '../App.css'; // Assuming styles are in App.css

const Calculator = () => {
  // State to hold the current display value and the humanoid's message
  const [display, setDisplay] = useState('');
  const [message, setMessage] = useState("Hello! I’m your humanoid calculator. Let’s do some math!");

  // Function to append numbers or operations to display
  const appendToDisplay = (value) => {
    setDisplay(prev => prev + value);
    humanoidTalk(value);
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay('');
    humanoidTalk('Cleared!');
  };

  // Function to delete the last character from the display
  const deleteLast = () => {
    setDisplay(prev => prev.slice(0, -1));
    humanoidTalk('Deleted last entry');
  };

  // Function to calculate the expression
  const calculate = () => {
    try {
      const result = eval(display.replace(/×/g, '*').replace(/÷/g, '/'));
      setDisplay(result.toString());
      humanoidTalk('Here’s your result!');
    } catch (error) {
      setDisplay('Error');
      humanoidTalk('Oops! Something went wrong.');
    }
  };

  // Function to update the humanoid's message
  const humanoidTalk = (action) => {
    if (!isNaN(action)) {
      setMessage(`You pressed ${action}. What’s next?`);
    } else {
      switch (action) {
        case '+':
          setMessage(`Let’s add!`);
          break;
        case '-':
          setMessage(`Time to subtract!`);
          break;
        case '*':
        case '×':
          setMessage(`Multiplying!`);
          break;
        case '/':
        case '÷':
          setMessage(`Dividing numbers!`);
          break;
        case 'Cleared!':
          setMessage(`Starting fresh!`);
          break;
        case 'Deleted last entry':
          setMessage(`Undoing...`);
          break;
        default:
          setMessage(`Ready for the next step!`);
      }
    }
  };

  return (
    <div className="container">
      <div className="humanoid-face">
        <div className="eyes">
          <div className="eye left-eye"></div>
          <div className="eye right-eye"></div>
        </div>
        <div className="mouth"></div>
      </div>

      <div className="bubble">
        <p>{message}</p>
      </div>

      <div className="calculator">
        <input type="text" value={display} readOnly id="display" />
        <div className="buttons">
          <button onClick={clearDisplay}>C</button>
          <button onClick={deleteLast}>←</button>
          <button onClick={() => appendToDisplay('/')}>÷</button>
          <button onClick={() => appendToDisplay('*')}>×</button>
          <button onClick={() => appendToDisplay('7')}>7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
          <button onClick={() => appendToDisplay('-')}>−</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button onClick={() => appendToDisplay('+')}>+</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => appendToDisplay('0')}>0</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
