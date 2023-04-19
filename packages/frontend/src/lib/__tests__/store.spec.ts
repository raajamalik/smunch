import { store } from '../redux/store';

describe('store', () => {
  it('should have a user reducer', () => {
    const state = store.getState();
    expect(state.user).toBeDefined();
  });

  it('should have an order reducer', () => {
    const state = store.getState();
    expect(state.order).toBeDefined();
  });
});
