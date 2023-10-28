import {useState} from 'react';
import {Input} from '../ui/input';

type LimitedInputProps = {
  setValue: (value: string) => void;
};

export function LimitedInput({setValue}: LimitedInputProps) {
  const [value, setLocalValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    if (newValue === '') {
      setLocalValue(newValue);
      setValue(newValue);
      return;
    }
    if (!/^\d+$/.test(newValue)) {
      event.preventDefault();
      return;
    }
    if (parseInt(newValue, 10) >= 1 && parseInt(newValue, 10) <= 1000) {
      setLocalValue(newValue);
      setValue(newValue);
    } else {
      event.preventDefault();
      return;
    }
  };

  return (
    <Input
      data-testid="limited-input"
      value={value}
      onChange={handleChange}
      type="number"
      className="mt-2 placeholder:opacity-50"
      placeholder="Number between 1 and 1000"
      max={'1000'}
      min={'1'}
    />
  );
}
