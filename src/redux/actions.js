import store from './store';


export const action =(id)=>{   
    return{
        type: 'SET_ID_PERSON',
        id: id,
    }   
}

store.dispatch(action(0));