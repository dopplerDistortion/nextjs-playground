import {Input} from '@/components/ui/input';
import {render} from '@testing-library/react';

const DummyInput = () => <Input />;

it('renders input unchanged', () => {
  const {container} = render(<DummyInput />);
  expect(container).toMatchSnapshot();
});
