import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../model/Item';

interface ItemState {
    items: Item[];
}

const initialState: ItemState = {
    items: [],
};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Item>) {
            state.items.push(action.payload);
        },
        updateItem(state, action: PayloadAction<Item>) {
            const index = state.items.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;