
const reducer = (state =[], action) =>{
    switch(action.type) {
        default: 
        return state;
        case 'SET_ID_PERSON':
            return {
                ...state,
                id: action.id
            };
    }
}

export default reducer;