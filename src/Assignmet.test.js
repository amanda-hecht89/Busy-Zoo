import { fireEvent, screen } from '@testing-library/react';
const { render } = require('@testing-library/react');
import App from './App';



test('marlin should be added to the screen when loaded', () => {
  render(<App />);
  const marlinImage = screen.getByAltText('marlin',);
  expect(marlinImage).toBeInTheDocument();
});


test('there should be a greeting on page', () => {
  render(<App/>);
  const greeting = screen.getByText(/Welcome to my App!/i);
  expect(greeting).toBeInTheDocument();

});


test('if user clicks dory, then dory appears on screen at end of parade', () => {
  render(<App/>);

  const doryParade = screen.getAllByAltText(/dory|marlin|bruce|nigel|mine/i);
  expect(doryParade.length).toBe(5);
  const doryButton = screen.getByText(/Dory/i);
  fireEvent.click(doryButton);

  const doryAfterClick = screen.getAllByAltText(/dory|marlin|bruce|nigel|mine/i);
  expect(doryAfterClick.length).toBe(6);
});


test('if user clicks on the reef, it takes you to the dentist', () => {
  render(<App/>);
  const wheresNemo = screen.getByAltText('reef');
  expect(wheresNemo).toBeInTheDocument();

  const switchButton = screen.getByText(/WHERES NEMO?/i);
  fireEvent.click(switchButton);

  const theresNemo = screen.getByAltText('dentist');
  expect(theresNemo).toBeInTheDocument();
});