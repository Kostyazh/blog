import React from 'react';
import Profile_info from './Profile_info/Profile_info';
import MyPostContainer from './MyPost/MyPostContainer';
const Profile = (props) => {

    return (
        <div>

            <Profile_info />
            <MyPostContainer />
        </div >
    );
}
export default Profile;