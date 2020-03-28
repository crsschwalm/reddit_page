import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';
import mocks from './mocks/reddit-page-mock'

jest.mock('./components/RedditPageProvider', () => ({
  useRedditPage: () => ({
    ...mocks, deleteComment: jest.fn()
  })
}))

test('should render', () => {
  const subject = render(<Page />);

  expect(subject).toMatchSnapshot();
});
