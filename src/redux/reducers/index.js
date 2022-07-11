import { combineReducers } from 'redux';
import useReducer from './userReducer';

const reducers = combineReducers({
    user: useReducer
});

export default reducers;