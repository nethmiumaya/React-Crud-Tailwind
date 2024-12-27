// import {useContext} from "react";
// import {CustomerContext} from "../store/CustomerProvider";
// import {Customer} from "../model/Customer.ts";
//
// export function Dashboard() {
//
//     const [customers, dispatch] = useContext(CustomerContext);
//     return (
//         <>
//             Dashboard
//             {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
//         </>
//     );
// }
import { useContext } from "react";
import { CustomerContext } from "../store/CustomerProvider";
import { Customer } from "../model/Customer.ts";
import './Dashboard.css';

export function Dashboard() {
    const [customers, dispatch] = useContext(CustomerContext);

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
                {/* Other content can go here */}
            </div>
        </div>
    );
}