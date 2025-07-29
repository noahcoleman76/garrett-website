import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm py-3">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                {/* Brand */}
                <NavLink to="/" className="navbar-brand fw-bold fs-4" style={{ color: "#dd783f" }}>
                    Garrett Nichols
                </NavLink>


                {/* Navigation Links */}
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link text-dark">
                            Stories
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gallery" className="nav-link text-dark">
                            Gallery
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/memorial-video" className="nav-link text-dark">
                            Memorial Video
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/message" className="nav-link text-dark">
                            Message the Family
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/jokes" className="nav-link text-dark">
                            Jokes & Pick-Up Lines
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/family" className="nav-link text-dark">
                            Family
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
