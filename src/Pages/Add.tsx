import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { Customer } from "../model/Customer.ts";
import { Item } from "../model/Item.ts";
import { Modal } from "../component/Modal.tsx";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import './Add.css';

export function Add() {
    const navigate = useNavigate();
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    function handleCustomerSubmit() {
        const newCustomer = new Customer(name, email, phone);
        customerDispatch({ type: 'ADD_CUSTOMER', payload: newCustomer });
        navigate('/');
    }

    function handleItemSubmit() {
        const newItem = new Item(itemName, itemDescription, itemPrice);
        itemDispatch({ type: 'ADD_ITEM', payload: newItem });
        setItemName("");
        setItemDescription("");
        setItemPrice("");
    }

    return (
        <div className="container">
            <div className="left">
                <div className="form-container">
                    <header className="form-header">Add Customer</header>
                    <Modal handleSubmit={handleCustomerSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                        Add Customer
                    </Modal>
                </div>
            </div>
            <div className="right">
                <div className="form-container">
                    <header className="form-header">Add Item</header>
                    <Modal handleSubmit={handleItemSubmit} setName={setItemName} setDescription={setItemDescription} setPrice={setItemPrice}>
                        Add Item
                    </Modal>
                </div>
            </div>
        </div>
    );
}