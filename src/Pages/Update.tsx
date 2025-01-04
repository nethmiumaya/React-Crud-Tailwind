import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateCustomer } from "../reducers/CustomerSlice.ts";
import { updateItem } from "../reducers/ItemSlice.ts";
import './Update.css';

export function Update() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customers.customers);
    const items = useSelector((state: RootState) => state.items.items);

    const [selectedCustomerEmail, setSelectedCustomerEmail] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [selectedItemName, setSelectedItemName] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    function handleCustomerSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const customer = customers.find(c => c.email === event.target.value);
        if (customer) {
            setSelectedCustomerEmail(customer.email);
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
        }
    }

    function handleItemSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const item = items.find(i => i.name === event.target.value);
        if (item) {
            setSelectedItemName(item.name);
            setItemName(item.name);
            setItemDescription(item.description);
            setItemPrice(item.price);
        }
    }

    function handleCustomerUpdate() {
        if (selectedCustomerEmail) {
            const updatedCustomer = { name, email, phone };
            dispatch(updateCustomer(updatedCustomer));
            navigate('/');
        }
    }

    function handleItemUpdate() {
        if (selectedItemName) {
            const updatedItem = { name: itemName, description: itemDescription, price: itemPrice };
            dispatch(updateItem(updatedItem));
            navigate('/');
        }
    }

    return (
        <div className="container">
            <div className="left">
                <div className="form-container">
                    <header className="form-header">Update Customer</header>
                    <select onChange={handleCustomerSelectChange} className="form-input">
                        <option value="">Select a customer</option>
                        {customers.map((customer) => (
                            <option key={customer.email} value={customer.email}>
                                {customer.name} ({customer.email})
                            </option>
                        ))}
                    </select>
                    {selectedCustomerEmail && (
                        <>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-input"
                            />
                            <button onClick={handleCustomerUpdate} className="form-button">Update</button>
                        </>
                    )}
                </div>
            </div>
            <div className="right">
                <div className="form-container">
                    <header className="form-header">Update Item</header>
                    <select onChange={handleItemSelectChange} className="form-input">
                        <option value="">Select an item</option>
                        {items.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    {selectedItemName && (
                        <>
                            <input
                                type="text"
                                placeholder="Name"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={itemDescription}
                                onChange={(e) => setItemDescription(e.target.value)}
                                className="form-input"
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                value={itemPrice}
                                onChange={(e) => setItemPrice(e.target.value)}
                                className="form-input"
                            />
                            <button onClick={handleItemUpdate} className="form-button">Update</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}