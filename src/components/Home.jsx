import React, {useEffect} from 'react';

import Sidebar from "../assets/shared/sidebar/Sidebar";
import Topbar from "../assets/shared/Topbar/Topbar";
import store from '../redux/store';
import {action} from '../redux/actions';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
 
} from "reactstrap";




const Home = () => {  
 

  useEffect(()=>{
  
 },[])

 
  store.dispatch(action(15));
 
  
  console.log('Here is');
  const redux = store.getState();
  console.log(redux);  
  
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
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

      <Sidebar />
    </>
  );
};

export default Home;
