import {Label} from '@radix-ui/react-label';
import {queryByLabelText, render} from '@testing-library/react';

const DummyLabel = () => <Label>Your email address</Label>;
it('renders label unchanged', () => {
  const {container} = render(<DummyLabel />);
  expect(container).toMatchSnapshot();
});
