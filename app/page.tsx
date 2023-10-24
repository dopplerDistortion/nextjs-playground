'use client';
import {useState} from 'react';

export default function Home() {
  const [value, setValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;
    // Allow Backspace key
    if (keyValue === 'Backspace') {
      return;
    }
    // Only allow numbers
    if (!/^\d+$/.test(keyValue)) {
      event.preventDefault();
      return;
    }
    const newValue = event.currentTarget.value + keyValue;
    // Only allow numbers between 1 and 1000
    if (parseInt(newValue, 10) < 1 || parseInt(newValue, 10) > 1000) {
      event.preventDefault();
      return;
    }
    setValue(newValue);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;
    // Update value state if Backspace key is released
    if (keyValue === 'Backspace') {
      setValue(event.currentTarget.value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 sm:p-0">
      <div className="text-4xl font-bold mb-4 h-24">{value}</div>
      <input
        type="number"
        placeholder="Enter a number between 1 and 1000"
        className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        max="1000"
      />
    </div>
  );
}
