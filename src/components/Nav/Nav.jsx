import React from 'react';
import s from './Nav.module.css'

export default function Nav() {
    return (
        <div className={s.Nav}>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Massages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </div>
    );
}
