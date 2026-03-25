import React from 'react';
import { NavLink } from 'react-router';

const navLinks = [
    { title: "Home", link: "/" },
    { title: "App", link: "/apps" },
    { title: "Installation", link: "/installation" },
]

const logo = "/assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map(navLink =>
                                <NavLink to={navLink.link} key={navLink.link}>{navLink.title}</NavLink>
                            )
                        }
                    </ul>
                </div>
                <NavLink to={"/"} className="btn btn-ghost text-xl cursor-pointer">
                    <img
                        src={logo}
                        alt='logo'
                        className='w-10 h-10 object-cover'
                    />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map(navLink =>
                            <NavLink
                                key={navLink.link}
                                to={navLink.link}
                                className={`${({ isActive }) => isActive ? "text-blue-500 border-b border-blue-500" : ""} font-semibold mr-5`}
                            >{navLink.title}</NavLink>
                        )
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="https://github.com/hasibulislamha01" target='_blank' className="btn">Contribute</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;