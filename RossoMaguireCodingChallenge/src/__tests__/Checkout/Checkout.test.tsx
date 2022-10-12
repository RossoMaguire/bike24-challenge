import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import OrdersTable from '../../components/Sections/OrdersTable';
import Checkout from '../../components/Sections/Checkout';
import { CartItemsContext } from '../../components/context/CartContext';
import orderItemsMock from '../../test-data/orderItemsMock';

describe('Checkout', () => {
  it('The buy button launched a modal with the correct total amount', async () => {
    render(
      <CartItemsContext.Provider value={orderItemsMock}>
        <OrdersTable />
        <Checkout />
      </CartItemsContext.Provider>
    );

    await waitFor(() => screen.getAllByTestId('buy-button'));

    fireEvent.click(screen.getByTestId('buy-button'));
    expect(screen.getByText('Confirm Purchase')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('confirm-button'));
    expect(
      screen.getByText('A confirmation of your order has been emailed to you.')
    ).toBeInTheDocument();
  });
});
