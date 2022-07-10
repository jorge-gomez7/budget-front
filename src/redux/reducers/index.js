import { combineReducers } from 'redux';
import reducer from './userReducer';

const reducers = combineReducers({
    user: reducer
});

export default reducers;