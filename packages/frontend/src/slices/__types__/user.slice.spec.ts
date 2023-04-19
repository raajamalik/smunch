import userReducer, { setUser } from '../user.slice';

describe('user slice', () => {
  test('setUser should update the user state', () => {
    const initialState = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      addresses: [],
      createdDt: undefined,
      updatedDt: undefined,
    };
    const user = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'password',
      addresses: [],
      createdDt: '2022-05-01',
      updatedDt: '2022-05-01',
    };

    const newState = userReducer(initialState, setUser(user));
    expect(newState).toEqual(user);
  });
});
