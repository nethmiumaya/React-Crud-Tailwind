import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteCustomer } from "../reducers/CustomerSlice.ts";
import { deleteItem } from "../reducers/ItemSlice.ts";
import './Delete.css';

export function Delete() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customers.customers);
    const items = useSelector((state: RootState) => state.items.items);
    const [selectedCustomerEmail, setSelectedCustomerEmail] = useState("");
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleCustomerDelete() {
        dispatch(deleteCustomer(selectedCustomerEmail));
        navigate('/');
    }

    function handleItemDelete() {
        dispatch(deleteItem(selectedItemName));
        navigate('/');
    }

    return (
        <div className="container">
            <div className="left">
                <div className="form-container">
                    <header className="form-header">Delete Customer</header>
                    <select onChange={(e) => setSelectedCustomerEmail(e.target.value)} className="form-input">
                        <option value="">Select a customer</option>
                        {customers.map((customer) => (
                            <option key={customer.email} value={customer.email}>
                                {customer.name} ({customer.email})
                            </option>
                        ))}
                    </select>
                    <button onClick={handleCustomerDelete} className="form-button bg-red-600 hover:bg-red-700">Delete</button>
                </div>
            </div>
            <div className="right">
                <div className="form-container">
                    <header className="form-header">Delete Item</header>
                    <select onChange={(e) => setSelectedItemName(e.target.value)} className="form-input">
                        <option value="">Select an item</option>
                        {items.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleItemDelete} className="form-button bg-red-600 hover:bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
}