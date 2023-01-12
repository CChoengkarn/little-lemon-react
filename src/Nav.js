import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Nav() {
 return (
    <nav className="main-nav">
    <ul className="nav-item" style={{listStyleType: 'none'}}>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/orderOnline">orderOnline</CustomLink>
        <CustomLink to="/reservation">Reservation</CustomLink>
        <CustomLink to="/menu">Menu</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/home">Home</CustomLink>
    </ul>
</nav>
 );

};

function CustomLink({href, children,...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
    <Link to={to} {...props}>
        {children}
        </Link>
    </li>
    )
}
export default Nav;