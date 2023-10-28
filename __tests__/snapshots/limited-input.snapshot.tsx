import {LimitedInput} from '@/components/app/limited-input';
import {render} from '@testing-library/react';
import {useState} from 'react';

const DummyLimitedInput = () => {
  const [value, setValue] = useState('123');
  return <LimitedInput setValue={setValue} />;
};
it('renders separator unchanged', () => {
  const {container} = render(<DummyLimitedInput />);
  expect(container).toMatchSnapshot();
});
