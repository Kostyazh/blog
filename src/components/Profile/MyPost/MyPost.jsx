import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redax/profile_reducer';




const MyPost = (props) => {


    let postsElement =
        props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

    let newPostElement = React.createRef(); //создает новую

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <h1>My Post</h1>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    name="textarea" required cols="30" rows="10" />
                <button onClick={onAddPost}>New Post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}
export default MyPost;