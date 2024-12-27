import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { Customer } from "../model/Customer.ts";
import './UpdateCustomer.css';

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const customer = customers.find(c => c.email === event.target.value);
        if (customer) {
            setSelectedCustomer(customer);
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
        }
    }

    function handleUpdate() {
        if (selectedCustomer) {
            const updatedCustomer = new Customer(name, email, phone);
            dispatch({ type: 'UPDATE_CUSTOMER', payload: updatedCustomer });
            navigate('/');
        }
    }

    return (
        <div className="left">
            <div className="form-container">
                <header className="form-header">Update Customer</header>
                <select onChange={handleSelectChange} className="form-input">
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
                        <button onClick={handleUpdate} className="form-button">Update</button>
                    </>
                )}
            </div>
        </div>
    );
}