import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const Transfer = () => {
    
    const userId = useSelector((state)=>state.user);

    console.log(userId); 

    
    return (
        <div>
            Transfer Works!
        </div>
    );
};

export default Transfer;