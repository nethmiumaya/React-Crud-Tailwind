import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Customer } from "../model/Customer.ts";
import { Item } from "../model/Item.ts";
import './Update.css';

export function Update() {
    const navigate = useNavigate();
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    function handleCustomerSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const customer = customers.find(c => c.email === event.target.value);
        if (customer) {
            setSelectedCustomer(customer);
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
        }
    }

    function handleItemSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const item = items.find(i => i.name === event.target.value);
        if (item) {
            setSelectedItem(item);
            setItemName(item.name);
            setItemDescription(item.description);
            setItemPrice(item.price);
        }
    }

    function handleCustomerUpdate() {
        if (selectedCustomer) {
            const updatedCustomer = new Customer(name, email, phone);
            customerDispatch({ type: 'UPDATE_CUSTOMER', payload: updatedCustomer });
            navigate('/');
        }
    }

    function handleItemUpdate() {
        if (selectedItem) {
            const updatedItem = new Item(itemName, itemDescription, itemPrice);
            itemDispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
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
                        {customers.map((customer, index) => (
                            <option key={index} value={customer.email}>
                                {customer.name} ({customer.email})
                            </option>
                        ))}
                    </select>
                    {selectedCustomer && (
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
                        {items.map((item, index) => (
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    {selectedItem && (
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