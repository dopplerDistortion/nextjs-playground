import {LimitedInput} from '@/components/app/limited-input';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useState} from 'react';

const DummyLimitedInput = () => {
  const [value, setValue] = useState('123');
  return <LimitedInput setValue={setValue} />;
};

const setup = () => {
  const user = userEvent.setup();
  const utils = render(<DummyLimitedInput />);
  const input = screen.getByTestId('limited-input');
  return {
    input,
    ...utils,
  };
};

describe('LimitedInput', () => {
  it('it should not accept 0 as input', () => {
    const {input} = setup();
    expect(input.getAttribute('value')).toBe('');
    fireEvent.change(input, {target: {value: '0'}});
    expect(input.getAttribute('value')).toBe('');
  });

  it('it should not accept 1001 as input', () => {
    const {input} = setup();
    expect(input.getAttribute('value')).toBe('');
    fireEvent.change(input, {target: {value: '1001'}});
    expect(input.getAttribute('value')).toBe('');
  });

  it('minimum value should be 1', () => {
    const {input} = setup();
    expect(input.getAttribute('value')).toBe('');
    fireEvent.change(input, {target: {value: '1'}});
    expect(input.getAttribute('value')).toBe('1');
  });

  it('maximum value should be 1000', () => {
    const {input} = setup();
    expect(input.getAttribute('value')).toBe('');
    fireEvent.change(input, {target: {value: '1000'}});
    expect(input.getAttribute('value')).toBe('1000');
  });

  it('should not accept non-numeric input', () => {
    const {input} = setup();
    expect(input.getAttribute('value')).toBe('');
    fireEvent.change(input, {target: {value: 'abc'}});
    expect(input.getAttribute('value')).toBe('');
  });

  it('when user clicks on input, it should have focus', async () => {
    const user = userEvent.setup();
    const {input} = setup();
    expect(input.getAttribute('value')).toBe('');
    await user.click(input);
    expect(input).toHaveFocus();
  });
});
