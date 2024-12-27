import { Link } from "react-router";
import './Navigation.css';

export function Navigation() {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/add'>Add</Link></li>
                    <li><Link to='/delete'>Delete</Link></li>
                    <li><Link to='/update'>Update</Link></li>
                </ul>
            </nav>
        </header>
    );
}