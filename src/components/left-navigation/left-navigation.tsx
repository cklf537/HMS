import { Link, NavLink } from "react-router-dom";
import { HeaderItems } from "../../context/AppContext";
import "./left-navigation.css";
import React from "react";
import { SlUser } from "react-icons/sl";


interface NavMenu {
    navLinks: HeaderItems[]
};

const LeftNavigation = (props: NavMenu) => {
    return <nav className="left-navigation-wrapper">
        <ul className="p-3">
            {props.navLinks.map(nav => <li key={nav.title}>
                    <NavLink to={nav.value}>{nav.title}</NavLink>
            </li>)}
        </ul>
    </nav>
}

export { LeftNavigation };