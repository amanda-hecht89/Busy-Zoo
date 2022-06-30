import { screen } from '@testing-library/react';
const { render } = require('@testing-library/react');

test('if user clicks on the marlin button, marlin should be added to the screen', () => {
  render(<App />);
  const marlinButton = screen.getAllByAltText(
    text: TextMatch,
    options?: {
      exact?: boolean = true,
      normalizer?: NormalizerFn,
    }): HTMLElement
  )
});