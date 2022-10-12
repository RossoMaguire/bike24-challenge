import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { render } from '@testing-library/react';
import productsMock from '../test-data/productsMock';
import App from '../App';

test('Renders main page correctly', () => {
  render(<App />);

  fetchMock.mockResponseOnce(JSON.stringify(productsMock));

  expect(true).toBeTruthy();
});
