import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

test('renders learn react link', () => {
  const { getByText } = render(<Page />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
