import {Input} from '../ui/input';

type LimitedInputProps = {
  setValue: (value: string) => void;
};

export function LimitedInput({setValue}: LimitedInputProps) {
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
      className="mt-2 placeholder:opacity-50"
      placeholder="Number between 1 and 1000"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      max={'1000'}
      min={'1'}
    />
  );
}
