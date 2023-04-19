import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/types';


const initialState: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    addresses: [],
    createdDt: undefined,
    updatedDt: undefined
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;