import { Item } from "../model/Item.ts";

export const initialState: Item[] = [];

export function ItemReducer(state: Item[], action: { type: string, payload: Item }) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'UPDATE_ITEM':
            return state.map((item: Item) =>
                item.name === action.payload.name ?
                    { ...item, description: action.payload.description, price: action.payload.price }
                    : item
            );
        case 'DELETE_ITEM':
            return state.filter((item: Item) => item.name !== action.payload.name);
        default:
            return state;
    }
}