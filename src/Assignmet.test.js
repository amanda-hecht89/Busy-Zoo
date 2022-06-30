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

test('there should be a greeting on page', () => {
  render(<App/>);
  const greeting = screen.getByText(/Welcome to my App!/i);
  expect(greeting).toBeInTheDocument();

});
