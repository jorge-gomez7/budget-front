import React, {useState, useEffect, store, getState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../redux/actions/index';

const Transfer = () => {    
    const userId = useSelector((state)=>state.user);            
    
    return (
        <div>
            {userId}
        </div>
    );
};

export default Transfer;