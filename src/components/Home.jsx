import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators} from '../redux/actions/index';

import Sidebar from "../assets/shared/sidebar/Sidebar";
import Topbar from "../assets/shared/Topbar/Topbar";


import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
 
} from "reactstrap";




const Home = () => {  
 
  const userId = useSelector((state)=>state.user);
  
  const dispatch = useDispatch();

  const {setUserId} = bindActionCreators(actionCreators, dispatch);
  
  
  useEffect(()=>{
    console.log('first', userId);
    setUserId(35);
    
  },[])

  useEffect(()=>{
    
    
    console.log('second', userId);
  },[userId])
  
  
  
  return (
    <>
      <Topbar />
      <div className="home">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{userId}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            {/* <Button>Agregar</Button> */}
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <Sidebar />
    </>
  );
};

export default Home;
