import orderReducer, { setOrder } from '../order.slice';
import { OrderItemType } from '@/types/types';

describe('orderSlice', () => {
  const initialState: OrderItemType = {
    id: 0,
    product: '',
    productId: 0,
    restaurantId: 0,
    price: 0,
    quantity: 0,
    purchaseDate: '',
    review: undefined
  }

  const orderItem: OrderItemType = {
    id: 1,
    product: 'Burger',
    productId: 1,
    restaurantId: 1,
    price: 10,
    quantity: 1,
    purchaseDate: '2022-05-01',
    review: null
  }

  it('should return the initial state', () => {
    expect(orderReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setOrder', () => {
    const actual = orderReducer(initialState, setOrder(orderItem));
    expect(actual).toEqual(orderItem);
  });
});
