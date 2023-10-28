import {Separator} from '@radix-ui/react-separator';
import {render} from '@testing-library/react';

const DummyLabel = () => <Separator />;
it('renders separator unchanged', () => {
  const {container} = render(<DummyLabel />);
  expect(container).toMatchSnapshot();
});
