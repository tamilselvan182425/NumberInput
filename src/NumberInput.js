import React, { useState } from 'react';
import './App.css';

function NumberInput() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setInputValue(e.target.value);

    if (isNaN(value)) {
      setMessage('');
      return;
    }

    if (value < 0) {
      setMessage('Enter a positive value');
    } else if (value % 2 === 0) {
      setMessage(`Next 3 even numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    } else {
      setMessage(`Next 3 odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Number Input</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        className="p-2 border border-gray-600 rounded mb-4"
        placeholder="Enter a number"
      />
      <p className="text-lg text-blue-600">{message}</p>
    </div>
  );
}

export default NumberInput;