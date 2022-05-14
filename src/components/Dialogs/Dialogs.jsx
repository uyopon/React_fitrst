import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import updateNewMessageTextActionCretor from '../../redux/state'
import addMessgeActionCreator from '../../redux/state'

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)}

    let dialogsElement = props.Dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.Messages.map(m => <Message message={m.message} id={m.id} />)
    
    // let newMessageBody = props.state.newMessageBody // ПУСТОЙ ЭКРАН СМЕРТИ
    let onsendmessageclick = () => {
        props.store.sispatch(addMessgeActionCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.sispatch(updateNewMessageTextActionCretor(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>

                <div>{messagesElement}</div>
                <div>
                    <textarea
                        className={s.margin_left}
                        ref={newMessageElement}
                        value='2'
                        onChange = {onNewMessageChange}
                    ></textarea>
                    <div className={s.margin_left} >
                        <button
                            onClick={onsendmessageclick}
                        >send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
