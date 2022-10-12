import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, waitFor } from '@testing-library/react';
import OrdersTable from '../../components/Sections/OrdersTable';
import { CartItemsContext } from '../../components/context/CartContext';
import orderItemsMock from '../../test-data/orderItemsMock';

describe('Orders Table', () => {
  it('Populates the Orders Table with the correct amount', async () => {
    render(
      <CartItemsContext.Provider value={orderItemsMock}>
        <OrdersTable />
      </CartItemsContext.Provider>
    );

    await waitFor(() => screen.getAllByTestId('order-item'));

    expect(screen.queryAllByTestId('order-item')).toHaveLength(2);
  });
});
