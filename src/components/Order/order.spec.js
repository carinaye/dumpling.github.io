import React from 'react'
import {render, screen} from '@testing-library/react';

import Order from './order.js';

// test ('Render HomePage',() => {
//   render (<HomePage />)
//   const element = screen.getByText(/Order/)
//   expect(element).toBeInTheDocument()
// })

describe('Order component', () => {
  test('renders without errors', () => {
    render(<Order />);
  });
});