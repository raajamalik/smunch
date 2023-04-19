import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItemType } from '@/types/types';


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

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<OrderItemType>) => {
            return action.payload;
        }
    }
})

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;