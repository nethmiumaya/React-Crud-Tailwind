import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import './DeleteCustomer.css';

export function DeleteCustomer() {
    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);
    const [selectedCustomerEmail, setSelectedCustomerEmail] = useState("");

    function handleDelete() {
        dispatch({ type: 'DELETE_CUSTOMER', payload: { email: selectedCustomerEmail } });
        navigate('/');
    }

    return (
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
                <button onClick={handleDelete} className="form-button bg-red-600 hover:bg-red-700">Delete</button>
                <br />
            </div>
        </div>
    );
}