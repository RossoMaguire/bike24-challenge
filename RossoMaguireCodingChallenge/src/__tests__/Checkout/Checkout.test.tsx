import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import OrdersTable from '../../components/Sections/OrdersTable';
import Checkout from '../../components/Sections/Checkout';
import Controls from '../../components/Sections/Controls';
import { CartProvider } from '../../components/context/CartContext';
import productsMock from '../../test-data/productsMock';

describe('Checkout', () => {
  it('The buy button launched a modal with the correct total amount', async () => {
    const mockedRes = { json: jest.fn().mockResolvedValueOnce(productsMock) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedRes);
    global.fetch = mockedFetch;

    render(
      <CartProvider>
        <Controls />
        <OrdersTable />
        <Checkout />
      </CartProvider>
    );

    await waitFor(() => screen.getAllByTestId('product-select-item'));
    await waitFor(() => screen.getAllByTestId('buy-button'));

    fireEvent.change(screen.getByTestId('product-select'), {
      target: { value: '3ab4c6bc-8920-11ec-a5e9-939419c56813' },
    });

    //Add item to cart
    fireEvent.click(screen.getByTestId('add-to-cart-button'));

    fireEvent.change(screen.getByTestId('product-select'), {
      target: { value: '2fdc8b4e-8920-11ec-aadd-cbe09129765b' },
    });

    //Add item to cart
    fireEvent.click(screen.getByTestId('add-to-cart-button'));

    fireEvent.click(screen.getByTestId('buy-button'));
    expect(screen.getByText('Confirm Purchase')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('confirm-button'));
    expect(
      screen.getByText('A confirmation of your order has been emailed to you.')
    ).toBeInTheDocument();

    // Check the order total is correct after the confirmation
    expect(screen.getByText('Cart Total: €11.94')).toBeInTheDocument();
    expect(screen.getByTestId('order-total-confirmation')).toHaveTextContent(
      'Order Total: €11.94'
    );
  });
});
