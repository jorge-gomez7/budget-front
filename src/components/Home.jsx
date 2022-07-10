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
  console.log(userId);
  const dispatch = useDispatch();

  const {setUserId} = bindActionCreators(actionCreators, dispatch);
  
  useEffect(()=>{
    setUserId(15);
  },[])
  
  useEffect(()=>{
    console.log(userId);
  },[setUserId])
  
  return (
    <>
      <Topbar />
      <div className="home">
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            {/* <Button>Agregar</Button> */}
            {/* <Button onClick={()=>setUserId(15)}>Button</Button> */}
          </CardBody>
        </Card>
      </div>

      <Sidebar />
    </>
  );
};

export default Home;
