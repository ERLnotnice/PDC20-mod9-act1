import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Logo</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                            end
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/profile" 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Profile
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            Contact Us
                        </NavLink>

                        <NavLink 
                            to="/mymainforms" 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            My Main Forms
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
