import React from 'react';
import {Input, Label, Form, FormGroup, Button,  Card, CardBody, CardTitle} from "reactstrap";

import coreCode from "../assets/favicon.ico";
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies  } from 'react-cookie';
import { useState } from 'react';
import axios from 'axios';




const Login = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['auth_token']);  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = async (e) => {
        e.preventDefault()         
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/login`, {email: email, password: password})
        navigate('/home')       
        console.log(res.data);
    }



    return (
        <div className="background">        
        <Card className="login-card">
            <img className="img-core-code" src={coreCode} alt="Core Code" />
            <Label className="final-project" tag="h4">Final Project</Label>
            <CardBody className="login-body">
                <CardTitle tag="h3" style={{textAlign: "center"}} >
                    Sign in
                </CardTitle>
                <Form inline onSubmit={register}>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        style={{fontSize: "20px"}}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Label for="exampleEmail" >
                        Email
                    </Label>  
                </FormGroup>
            {' '}
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        style={{fontSize: "20px"}}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
            {' '}
        <Button className="login-submit" type="submit">
      Log In
    </Button>
  </Form>  
             <Label size="lg" style={{float: "right"}}> Don't have an account? <Link to={'/register'} style={{textDecoration: "none"}}>Sign Up</Link></Label>                
            </CardBody>            
        </Card>
        </div>
    );
};

export default Login;