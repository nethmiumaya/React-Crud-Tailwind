import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../model/Customer';

interface CustomerState {
    customers: Customer[];
}

const initialState: CustomerState = {
    customers: [],
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer(state, action: PayloadAction<Customer>) {
            state.customers.push(action.payload);
        },
        updateCustomer(state, action: PayloadAction<Customer>) {
            const index = state.customers.findIndex(customer => customer.email === action.payload.email);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        },
        deleteCustomer(state, action: PayloadAction<string>) {
            state.customers = state.customers.filter(customer => customer.email !== action.payload);
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;