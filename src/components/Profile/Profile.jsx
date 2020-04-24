import React from 'react';
import s from './Profile.module.css'
export default function Profile() {
    return (
        <div className={s.Profile}>
            <div className={s.profile_top}>
                <img src="https://avatars.githubusercontent.com/u/61667662?s=100" alt="img" />
                <p>Name Surname</p>
            </div>
            <div className={s.profile_blog}>
                <p>Blog</p>
                <form action="submit">
                    <input type="text" />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
}