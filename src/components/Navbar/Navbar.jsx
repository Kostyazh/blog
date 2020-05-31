import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={s.Navbar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active_item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active_item}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active_item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.active_item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.active_item}>Settings</NavLink>
            </div>
        </div>
    );
}
