const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'     //ИСПОЛЬЗУЕМ ЭТИ КОНСТАНТЫ ЧТОБЫ НЕ ОПЕРЧАТАТЬСЯ  = )

const dialogsPage_reducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageBody = action.body

    }
    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.Messages.push({ id: 6, message: body })
    }
    return state
}


export default dialogsPage_reducer


