import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrderItem from '../OrderItem';

describe('OrderItem component', () => {
  const mockOrder = {
    id: 1,
    productId: 1,
    restaurantId: 1,
    product: 'Product',
    price: 10.0,
    quantity: 2,
    purchaseDate: '2022-01-01',
    review: null,
  };

  it('renders order details correctly', () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByText(/product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10.00/i)).toBeInTheDocument();
    expect(screen.getByText(/purchased on 1\/1\/2022/i)).toBeInTheDocument();
    expect(screen.getByText(/2 items/i)).toBeInTheDocument();
  });

  it('displays add review button when review is not available', () => {
    render(<OrderItem order={mockOrder} />);
    expect(screen.getByRole('button', { name: /add review/i })).toBeInTheDocument();
  });

  it('dispatches setOrder action and navigates to new review page on add review button click', () => {
    const mockDispatch = jest.fn();
    jest.mock('@/lib/redux/hooks', () => ({
      useAppDispatch: () => mockDispatch,
    }));
    const mockRouter = { push: jest.fn() };
    jest.mock('next/router', () => ({
      useRouter: () => mockRouter,
    }));
    render(<OrderItem order={mockOrder} />);
    fireEvent.click(screen.getByRole('button', { name: /add review/i }));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'order/setOrder',
      payload: mockOrder,
    });
    expect(mockRouter.push).toHaveBeenCalledWith('/review/new-review');
  });

  it('matches snapshot', () => {
    const { container } = render(<OrderItem order={mockOrder} />);
    expect(container).toMatchSnapshot();
  });
});
