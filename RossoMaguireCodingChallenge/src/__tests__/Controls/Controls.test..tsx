import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import productsMock from '../../test-data/productsMock';
import Controls from '../../components/Sections/Controls';

describe('Product Select Controls', () => {
  it('Populates the dropdown correctly after products are fetched', async () => {
    const mockedRes = { json: jest.fn().mockResolvedValueOnce(productsMock) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedRes);
    global.fetch = mockedFetch;

    render(<Controls />);

    await waitFor(() => screen.getAllByTestId('product-select-item'));

    expect(screen.queryAllByTestId('product-select-item')).toHaveLength(5);
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mockedRes.json).toBeCalledTimes(1);
  });

  it('Enables the Add to Cart button and slider when product is selected', async () => {
    const mockedRes = { json: jest.fn().mockResolvedValueOnce(productsMock) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedRes);
    global.fetch = mockedFetch;

    render(<Controls />);

    await waitFor(() => screen.getAllByTestId('product-select-item'));
    await waitFor(() => screen.getByText('Add to Cart').closest('button'));

    // Is disabled by default
    expect(screen.getByText('Add to Cart').closest('button')).toBeDisabled();
    expect(
      screen.getByTestId('slider-amount').getAttribute('aria-disabled')
    ).toBe('true');

    fireEvent.change(screen.getByTestId('product-select'), {
      target: { value: '3ab4c6bc-8920-11ec-a5e9-939419c56813' },
    });

    // Is enabled now
    expect(
      screen
        .getByText('Add to Cart')
        .closest('button')
        ?.getAttribute('disabled')
    ).toBe('');

    expect(screen.getByTestId('slider-amount')).toBeEnabled();
  });
});
