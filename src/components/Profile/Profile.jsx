import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';
export default function Profile() {
    return (
        <div className={s.Profile}>
            <div className={s.profile_top}>
                <img src="https://avatars.githubusercontent.com/u/61667662?s=100" alt="img" />
                <p>Name Surname</p>
            </div>
            <MyPost />
        </div>
    );
}