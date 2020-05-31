import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redax/profile_reducer';
import MyPost from './MyPost';
import StoreContext from '../../../Redax/StoreContext';




const MyPostContainer = () => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        // let text = newPostElement.current.value;
                        store.dispatch(addPostActionCreator());
                        //props.addPost();
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return <MyPost updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostContainer;