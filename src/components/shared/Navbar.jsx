import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="_header">
            <h1>Crud App</h1>
            <nav className="_navbar-main-container">
                <ul className="_navbar-link">
                    <li className="_navbar-links">
                        <Link to="/add-user" className="_links">Add</Link>
                    </li>
                    <li className="_navbar-links">
                        <Link to="manage-users" className="_links">Manage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


