import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { updateNewMessageBody, sendMessageCreator } from '../../Redax/dialogs_reducer'


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialog}>
            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Button</button></div>
                </div>
            </div>
        </div >
    )
}
export default Dialogs;