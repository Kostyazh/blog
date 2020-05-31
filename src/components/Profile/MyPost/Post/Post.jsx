import React from 'react'
import s from './Post.module.css'


export default function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://avatars.githubusercontent.com/u/61667662?s=100" />
            {props.messages}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
} 