import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Customer } from "../model/Customer";
import { Item } from "../model/Item";
import { Modal } from "../component/Modal";
import './Add.css';
import {addCustomer} from "../reducers/CustomerSlice.ts";
import {addItem} from "../reducers/ItemSlice.ts";

export function Add() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    function handleCustomerSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch(addCustomer(newCustomer));
        navigate('/');
    }

    function handleItemSubmit() {
        const newItem = new Item(itemName, itemDescription, itemPrice);
        dispatch(addItem(newItem));
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