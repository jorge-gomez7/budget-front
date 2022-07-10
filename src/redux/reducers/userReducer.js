
const reducer = (state =0, action) =>{
    switch(action.type) {        
        case 'SET_ID_PERSON':
            return  state + action.payload;            
        default: 
            return state;
    }
}

export default reducer;