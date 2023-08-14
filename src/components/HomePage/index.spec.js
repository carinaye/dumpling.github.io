import '@testing-library/jest-dom/extend-expect';

import {render, screen} from '@testing-library/react';

import HomePage from './homepage.js';

test ('Render HomePage',() => {
  render (<HomePage />)
  const element = screen.getByText(/Order/)
  expect(element).toBeInTheDocument()
})