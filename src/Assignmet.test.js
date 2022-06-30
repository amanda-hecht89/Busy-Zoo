import { screen } from '@testing-library/react';
const { render } = require('@testing-library/react');
import App from './App';

test('marlin should be added to the screen when loaded', () => {
  render(<App />);
  const marlinImage = screen.getByAltText(
    'marlin',
  );
  expect(marlinImage).toBeInTheDocument();

});
