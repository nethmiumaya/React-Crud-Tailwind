import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { Customer } from "../model/Customer.ts";
import { Modal } from "../component/Modal.tsx";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import './AddCustomer.css';

export function AddCustomer() {
    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({ type: 'ADD_CUSTOMER', payload: newCustomer });
        navigate('/');
    }

    return (
        <div className="left">
            <div className="form-container">
                <header className="form-header">Add Customer</header>
                <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                    Add Customer
                </Modal>
            </div>
        </div>
            );
            }