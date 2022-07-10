import React, {useState, useEffect} from 'react';
import store from '../redux/store';

const Transfer = (props) => {
    

    console.log(store.getState());
   
   let unsubscribe = store.subscribe(() => {console.log(store.getState())});

   unsubscribe();

    
    return (
        <div>
            Transfer Works!
        </div>
    );
};

export default Transfer;