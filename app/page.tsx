'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
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

  const convertToRoman = (num: number) => {
    const units = {
      I: 1,
      V: 5,
    };
    const tens = {
      X: 10,
      L: 50,
    };
    const hundreds = {
      C: 100,
      D: 500,
    };
    const thousands = {
      M: 1000,
    };
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-8 sm:p-0">
      <Card>
        <CardHeader>
          <CardTitle>Roman Numeral Converter</CardTitle>
          <CardDescription>
            Type number between 1 to 1000 inclusive
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="number"
            placeholder="Enter a number between 1 and 1000"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            max="1000"
          />
        </CardContent>
        <CardContent>
          <CardTitle className="text-sm">Converted Value</CardTitle>
          <CardDescription>
            {value === '' ? 'Please type a value' : value}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
