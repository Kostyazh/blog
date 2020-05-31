const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;

        default:
            return state;
    }


}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;