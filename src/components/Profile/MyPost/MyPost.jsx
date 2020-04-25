import React from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'


export default function MyPost() {
    return (
        <div>
            <h1>My Post</h1>
            <div>
                <textarea name="textarea" required cols="30" rows="10"></textarea>
                <button>New Post</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}