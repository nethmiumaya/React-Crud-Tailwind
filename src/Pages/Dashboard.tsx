import { useContext } from "react";
import { CustomerContext } from "../store/CustomerProvider";
import { ItemContext } from "../store/ItemProvider";
import { Customer } from "../model/Customer.ts";
import { Item } from "../model/Item.ts";
import './Dashboard.css';

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    const [items] = useContext(ItemContext);

    return (
        <div className="dashboard-container">
            <div className="left">
                <h2 className="form-header">Customer Details</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer: Customer) => (
                            <tr key={customer.email}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="right">
                <h2 className="form-header">Item Details</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item: Item) => (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}