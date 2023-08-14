import {render, screen} from '@testing-library/react';

import App from './App.js';

test ('Render App',() => {
  render (<App />)
  const element = screen.getByText('Order')
  expect(element).toBeInTheDocument()
})