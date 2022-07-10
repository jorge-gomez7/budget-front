export const setUserId = (id) =>{
    return (dispatch)=>{
        dispatch({
            type: 'SET_USER_ID',
            payload: id,
        });
    }
}