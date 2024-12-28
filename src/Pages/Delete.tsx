import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import './Delete.css';

export function Delete() {
    const navigate = useNavigate();
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);
    const [selectedCustomerEmail, setSelectedCustomerEmail] = useState("");
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleCustomerDelete() {
        customerDispatch({ type: 'DELETE_CUSTOMER', payload: { email: selectedCustomerEmail } });
        navigate('/');
    }

    function handleItemDelete() {
        itemDispatch({ type: 'DELETE_ITEM', payload: { name: selectedItemName } });
        navigate('/');
    }

    return (
        <div className="container">
            <div className="left">
                <div className="form-container">
                    <header className="form-header">Delete Customer</header>
                    <select onChange={(e) => setSelectedCustomerEmail(e.target.value)} className="form-input">
                        <option value="">Select a customer</option>
                        {customers.map((customer, index) => (
                            <option key={index} value={customer.email}>
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
                        {items.map((item, index) => (
                            <option key={index} value={item.name}>
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