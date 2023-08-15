const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Kira'},
        {id: 2, name: 'Ecenia'},
        {id: 3, name: 'Alexey'},
        {id: 4, name: 'Arina'},
        {id: 5, name: 'Ed'},
        {id: 6, name: 'Tatiana'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Whats app'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}
    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let sendMessage = action.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: sendMessage}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;