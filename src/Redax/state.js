import profileReducer from "./profile_reducer";



let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, messages: 'ljhrnvnlwnvin', likeCount: 12 },
                { id: 2, messages: 'lkjnkunlunl', likeCount: 24 },
                { id: 3, messages: 'jhiuhuhpiuiu', likeCount: 1 }
            ],
            newPostText: 'new jkfnvjnijni'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Kostya' },
                { id: 2, name: 'Kostya 2' },
                { id: 3, name: 'Kostya 3' },
                { id: 4, name: 'Kostya 4' },
                { id: 5, name: 'Kostya 5' }
            ],
            messages: [
                { id: 1, message: 'wregwergew' },
                { id: 2, message: 'wregwergew' },
                { id: 3, message: 'wregwergew' },
                { id: 4, message: 'wregwergew' },
                { id: 5, message: 'wregwergew' }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('hello');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    //change state

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = profileReducer(this._state.dialogsPage, action);
        this._state.sidebar = profileReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}



window.store = store;
export default store;

// store - oop