import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Transfer = () => {
    
    const userId = useSelector((state)=>state.user);
    

    useEffect(()=>{
        console.log('from transaction one', userId)
    },[])


    useEffect(()=>{
        console.log('from transaction two', userId)
    },[userId])
    

    
    return (
        <div>
            {userId}
        </div>
    );
};

export default Transfer;