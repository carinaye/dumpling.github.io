import {render, screen} from '@testing-library/react';

import '../../../node_modules/@testing-library/jest-dom/extend-expect'

import HomePage from './homepage.js';

test ('Render HomePage',() => {
  render (<HomePage />)
  const element = screen.getByText(/Order/)
  expect(element).toBeInTheDocument()
})