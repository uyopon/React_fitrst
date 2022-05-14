const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT =  'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT =  'UPDATE-NEW-MESSAGE-TEXT'     //ИСПОЛЬЗУЕМ ЭТИ КОНСТАНТЫ ЧТОБЫ НЕ ОПЕРЧАТАТЬСЯ  = )
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            newPostsText: '',

            Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
            { id: 2, message: 'hello everybody', LikesCount: 0 },
            { id: 3, message: 'my name is john', LikesCount: 1 },
            { id: 4, message: 'I am  here', LikesCount: 8 }],
            
        },
        dialogsPage: {
            newMessageBody: '', //АКТУАЛЬНОЕ ЗНАЧЕНИЕ В  TEXT-AREA
            Dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },],
            Messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how are you' },
                { id: 3, message: 'yo' },
                { id: 4, message: 'hi' },
                { id: 5, message: 'hi Viktor' },],
        },
        },

    _callSubscriber() { },

    getstate() {
        return this._state    //THIS
    },
    subscribe(observer) {
        this._callSubscriber = observer ///НАБЛЮДАТЕЛЬ (ПАТТЕРН)-СПРОСЯТ НА СОБЕСЕДОВАНИИ
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostsText,
                LikesCount: 5
            };
            this._state.profilePage.Posts.push(newPost)
            this._state.profilePage.newPostsText = ''
            this._callSubscriber(this._state)
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostsText = action.newText
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT ){
            this._state.dialogsPage.newMessageBody = action.text
            this._callSubscriber(this._state)

        }
        else if (action.type === SEND_MESSAGE ){

            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.newMessageBody.push( { id: 6, message: 'hi Viktor' })
            
            this._callSubscriber(this._state)

        }
    },
}
export const addPostActionCreator = () => {
    return(
       { type: ADD_POST }
    )

}

 export const updateNewPostTextActionCretor = (text) => {
    return(
        {type: UPDATE_NEW_POST_TEXT, newText:text }
    )

}



export default store


