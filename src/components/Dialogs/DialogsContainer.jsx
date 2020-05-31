import React from 'react'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redax/dialogs_reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../Redax/StoreContext'


const DialogsContainer = () => {




    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage;



                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />
            }
        }
    </StoreContext.Consumer>

}
export default DialogsContainer;