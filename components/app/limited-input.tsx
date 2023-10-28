import {Input} from '../ui/input';

type LimitedInputProps = {
  value: string;
  setValue: (value: string) => void;
};

export function LimitedInput({value, setValue}: LimitedInputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;
    if (keyValue === 'Backspace') {
      return;
    }
    if (!/^\d+$/.test(keyValue)) {
      event.preventDefault();
      return;
    }
    const newValue = event.currentTarget.value + keyValue;
    if (parseInt(newValue, 10) < 1 || parseInt(newValue, 10) > 1000) {
      event.preventDefault();
      return;
    }
    setValue(newValue);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyValue = event.key;
    if (keyValue === 'Backspace') {
      setValue(event.currentTarget.value);
    }
  };
  return (
    <Input
      type="number"
      className="mt-2"
      placeholder="Enter a number between 1 and 1000"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      max="1000"
    />
  );
}
