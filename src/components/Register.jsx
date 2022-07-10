import React from 'react';
import {Input, Label, Form, FormGroup, Button,  Card, CardBody, CardTitle} from "reactstrap";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useCookies  } from 'react-cookie';




import coreCode from "../assets/favicon.ico";
import '../App.css';





const Register = () => {
    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['auth_token']);  
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const register = async (e) => {
         e.preventDefault()         
         const data = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/register`, {firstName: firstName, lastName: lastName, email: email, password: password})
         navigate('/home')
         setCookie('name', cookies.auth_token, { path: '/' });
         console.log(data);
     } 

    
    return (
        <div className="background">        
        <Card className="login-card">
            <img className="img-core-code" src={coreCode} alt="Core Code" />
            <Label className="final-project" tag="h4">Final Project</Label>
            <CardBody className="login-body">
                <CardTitle tag="h3" style={{textAlign: "center"}} >
                    Sign Up
                </CardTitle>
                <Form inline onSubmit={register}>
                <FormGroup floating>
                    <Input
                    
                        id="exampleFirstName"
                        name="first_name"
                        placeholder="First Name"
                        type="text"
                        style={{fontSize: "20px"}}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                    <Label for="exampleFirstName" >
                        First Name
                    </Label>  
                </FormGroup>
                <FormGroup floating>
                    <Input
                    
                        id="exampleLastName"
                        name="last_name"
                        placeholder="Last Name"
                        type="text"
                        style={{fontSize: "20px"}}
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                    <Label for="exampleLastName" >
                        Last Name
                    </Label>  
                </FormGroup>
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
      Sign Up
    </Button>
  </Form>
             <Label size="lg" style={{float: "right"}}> I already have an account? <Link to='/login' style={{textDecoration: "none"}}>Sign In</Link></Label>                
            </CardBody>            
        </Card>
        </div>
    );
};

export default Register;